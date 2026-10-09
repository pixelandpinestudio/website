"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Arrow, Check } from "./Icons";

const types = [
  { value: "data", label: "Data and analytics" },
  { value: "marketing", label: "Digital marketing" },
  { value: "staffing", label: "Hiring through IT staffing" },
  { value: "candidate", label: "I'm looking for a role" },
  { value: "other", label: "Something else" },
];

const CONTACT = "admin@pixelandpinestudio.com";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const params = useSearchParams();
  const initial = types.some((t) => t.value === params.get("type")) ? params.get("type")! : "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.status === 503) {
        const subject = encodeURIComponent(`Website enquiry from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.company || ""}\n${data.phone || ""}`);
        setFallback(`mailto:${CONTACT}?subject=${subject}&body=${body}`);
      }
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-card form-success" role="status">
        <span className="success-icon"><Check size={22} /></span>
        <h2>Thank you. Your message is with us.</h2>
        <p>We reply to every enquiry within one working day. Look out for an email from our team.</p>
        <button className="btn btn-outline" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <label className="field">
          <span>Full name <em>*</em></span>
          <input name="name" required maxLength={120} autoComplete="name" placeholder="Your name" />
        </label>
        <label className="field">
          <span>Work email <em>*</em></span>
          <input name="email" type="email" required maxLength={160} autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" placeholder="+91" />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="company" maxLength={160} autoComplete="organization" placeholder="Company name" />
        </label>
      </div>
      <label className="field">
        <span>How can we help? <em>*</em></span>
        <select name="type" required defaultValue={initial}>
          <option value="" disabled>Select an option</option>
          {types.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Message <em>*</em></span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder="A few lines about your goals, timeline or the role you need to fill."
        />
      </label>
      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I consent to The Pixel and Pine Studio processing the details above to respond to my
          enquiry, as described in the <Link href="/privacy-policy">Privacy policy</Link>. I can
          withdraw consent at any time.
        </span>
      </label>
      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
          {fallback && <> You can also <a href={fallback}>send it from your email app</a>.</>}
        </p>
      )}
      <div className="form-foot">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : <>Send message <Arrow /></>}
        </button>
        <p>We reply within one working day.</p>
      </div>
    </form>
  );
}
