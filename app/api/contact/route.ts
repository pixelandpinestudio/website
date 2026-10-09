import { NextResponse } from "next/server";
import { site } from "../../lib/site";

const TYPES: Record<string, string> = {
  data: "Data and analytics",
  marketing: "Digital marketing",
  staffing: "Hiring through IT staffing",
  candidate: "Candidate looking for a role",
  other: "Something else",
};

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend success.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 160);
  const type = clean(body.type, 20);
  const message = clean(body.message, 4000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !TYPES[type] || message.length < 10) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (body.consent !== "yes") {
    return NextResponse.json({ error: "Please confirm your consent to continue." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Our form is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Company", company || "-"],
    ["Enquiry", TYPES[type]],
  ];
  const html = `
    <h2>New website enquiry</h2>
    <table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`).join("")}</table>
    <p style="white-space:pre-wrap">${escape(message)}</p>
    <p style="color:#888">Consent to processing given on ${new Date().toISOString()}.</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || `Website <noreply@pixelandpinestudio.com>`,
      to: [process.env.CONTACT_TO || site.contactEmail],
      reply_to: email,
      subject: `${TYPES[type]}: ${name}${company ? ` (${company})` : ""}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("contact: send failed", res.status, await res.text());
    return NextResponse.json({ error: "We couldn't send your message. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
