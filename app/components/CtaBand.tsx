import Link from "next/link";
import { Arrow } from "./Icons";

export default function CtaBand({
  title = "Tell us what you're working on.",
  body = "Whether it's a dashboard, a marketing push or a role to fill, send a short note and we'll reply within one working day.",
}: { title?: string; body?: string }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-light">Start a conversation <Arrow /></Link>
          <Link href="/services" className="btn btn-ghost">View services</Link>
        </div>
      </div>
    </section>
  );
}
