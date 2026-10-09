import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "../../components/CtaBand";
import Faq from "../../components/Faq";
import { Arrow, Check, ServiceIcon } from "../../components/Icons";
import { getService, services } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.summary, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);
  const isStaffing = s.slug === "it-staffing";

  return (
    <main>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/services">Services</Link> <span>/</span> <span>{s.title}</span>
            </nav>
            <h1>{s.title}</h1>
            <p className="lead">{s.summary}</p>
            <div className="hero-actions">
              <Link href={`/contact?type=${isStaffing ? "staffing" : s.slug === "data-analytics" ? "data" : "marketing"}`} className="btn btn-light">
                Discuss your project <Arrow />
              </Link>
              {isStaffing && <Link href="/contact?type=candidate" className="btn btn-ghost">I&apos;m looking for a role</Link>}
            </div>
          </div>
          <span className="hero-icon" aria-hidden="true"><ServiceIcon name={s.icon} size={56} /></span>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="section-head">
            <p className="eyebrow">Overview</p>
            <h2>{s.tagline}</h2>
          </div>
          <p className="lead body-lead">{s.intro}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we deliver</p>
            <h2>Capabilities</h2>
          </div>
          <div className="offer-grid">
            {s.offerings.map((o, i) => (
              <div key={o.title} className="offer">
                <span className="mono">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <ul className="checks">
                  {o.points.map((p) => <li key={p}><Check /> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">{isStaffing ? "How we hire" : "What you receive"}</p>
            <h2>{isStaffing ? "A clear, accountable process." : "Deliverables"}</h2>
            <ol className="numbered">
              {s.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Outcomes</p>
            <h2>What changes for you</h2>
            <div className="outcomes">
              {s.outcomes.map((o) => (
                <div key={o.title}>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">{isStaffing ? "Engagement terms" : "Tools and platforms"}</p>
          <div className="tags">
            {s.tools.map((t) => <span key={t}>{t}</span>)}
          </div>
          {isStaffing && (
            <div className="notice">
              <strong>Recruitment fraud notice.</strong> The Pixel and Pine Studio never asks candidates
              for money at any stage of hiring. We contact candidates only from our
              pixelandpinestudio.com domain. If someone asks you for a fee in our name, do not pay
              and <Link href="/contact" className="inline-link">report it to us</Link>.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>{s.title}: common questions</h2>
          </div>
          <Faq items={s.faqs} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Other practices</p>
          <div className="related">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="related-card">
                <span className="icon-box"><ServiceIcon name={o.icon} /></span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.tagline}</p>
                </div>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
