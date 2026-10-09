import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { Arrow, Check, ServiceIcon } from "../components/Icons";
import { services } from "../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Data and analytics, digital marketing and IT staffing services from The Pixel and Pine Studio.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow on-dark">Services</p>
          <h1>Three practices. One accountable team.</h1>
          <p className="lead">
            Pick one practice or combine them. The same team that designs your reporting can help
            you market it and staff it.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap service-rows">
          {services.map((s) => (
            <article key={s.slug} className="service-row">
              <div>
                <span className="icon-box"><ServiceIcon name={s.icon} /></span>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2>{s.title}</h2>
                <p className="lead">{s.summary}</p>
                <Link href={`/services/${s.slug}`} className="btn">Explore {s.title} <Arrow /></Link>
              </div>
              <ul className="checks big">
                {s.offerings.map((o) => (
                  <li key={o.title}>
                    <Check />
                    <span><strong>{o.title}</strong>{o.body}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
