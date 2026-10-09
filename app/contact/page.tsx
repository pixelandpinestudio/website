import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "../components/ContactForm";
import { Clock, Doc, Shield } from "../components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell The Pixel and Pine Studio what you're working on. We reply within one working day.",
  alternates: { canonical: "/contact" },
};

const next = [
  { title: "We reply within one working day", body: "A member of the team reads every message and replies personally." },
  { title: "A short discovery call", body: "We talk through goals, timelines and constraints. An NDA can be signed first." },
  { title: "A clear proposal", body: "You receive scope, team, timeline and fees in writing before any work starts." },
];

export default function ContactPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you&apos;re working on.</h1>
          <p className="lead">
            Whether it&apos;s a dashboard, a marketing push or a role to fill, send a short note and
            we&apos;ll reply within one working day.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="wrap contact-grid">
          <Suspense fallback={<div className="form-card" />}>
            <ContactForm />
          </Suspense>
          <aside className="contact-aside">
            <h2>What happens next</h2>
            <ol className="next-steps">
              {next.map((n, i) => (
                <li key={n.title}>
                  <span className="step-no">0{i + 1}</span>
                  <div>
                    <h3>{n.title}</h3>
                    <p>{n.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="aside-note">
              <Clock size={18} />
              <p><strong>Across time zones.</strong> We work with clients in India and internationally, and agree overlap hours at the start of every engagement.</p>
            </div>
            <div className="aside-note">
              <Shield size={18} />
              <p><strong>Your data.</strong> We use your details only to respond to you. See our <Link href="/privacy-policy" className="inline-link">Privacy policy</Link>.</p>
            </div>
            <div className="aside-note">
              <Doc size={18} />
              <p><strong>Looking for a role?</strong> Choose &ldquo;I&apos;m looking for a role&rdquo; in the form. We never charge candidates a fee.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
