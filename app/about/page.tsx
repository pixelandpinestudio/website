import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { Arrow, Doc, Globe, Layers, Shield, Target } from "../components/Icons";
import { services } from "../lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The Pixel and Pine Studio is an India-based studio for data and analytics, digital marketing and IT staffing.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: <Target />, title: "Clarity over activity", body: "We agree what success looks like before we start, and we measure against it, not against hours spent." },
  { icon: <Layers />, title: "Connected thinking", body: "Reporting, marketing and people decisions affect each other. We look at them together." },
  { icon: <Doc />, title: "No lock-in", body: "We document what we build and train your team, so you can run it without us." },
  { icon: <Shield />, title: "Trust and confidentiality", body: "NDAs as standard, least-privilege access and personal data handled in line with the DPDP Act, 2023." },
  { icon: <Globe />, title: "Local and global", body: "Rooted in India and comfortable working across time zones with international teams." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow on-dark">About us</p>
          <h1>A studio for data, marketing and the people behind them.</h1>
          <p className="lead">
            The Pixel and Pine Studio helps organisations turn their data into decisions, their
            marketing into measurable growth, and their hiring plans into capable teams.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="section-head">
            <p className="eyebrow">Our story</p>
            <h2>Why one studio for three practices?</h2>
          </div>
          <div className="prose-block">
            <p>
              Businesses rarely have a data problem, a marketing problem and a hiring problem in
              isolation. A new dashboard shows where growth is coming from; marketing needs to act on
              it; and someone has to run the reports and test the systems once the project ends.
            </p>
            <p>
              We set up The Pixel and Pine Studio so that one team could own that whole journey. Our
              analytics work keeps our marketing honest. Our delivery experience makes us better at
              screening the data and QA professionals we place. And our clients deal with one partner
              who understands how the pieces connect.
            </p>
            <p>
              The name says how we work: pixel-level care in the detail, and pine-tree patience for
              results that last.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we stand for</p>
            <h2>Principles we work by</h2>
          </div>
          <div className="value-grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <span className="icon-box">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our practices</p>
            <h2>Where we can help</h2>
          </div>
          <div className="related">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="related-card">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                </div>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's build something that lasts." />
    </main>
  );
}
