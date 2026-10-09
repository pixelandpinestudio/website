import Link from "next/link";
import CtaBand from "./components/CtaBand";
import Faq from "./components/Faq";
import { Arrow, Check, Doc, Layers, ServiceIcon, Shield, Target } from "./components/Icons";
import { services } from "./lib/site";

const principles = [
  { icon: <Layers />, title: "One accountable team", body: "Data, marketing and hiring under one roof, so nothing gets lost between three different vendors." },
  { icon: <Target />, title: "Outcomes agreed up front", body: "Every engagement starts with written goals and measures of success, and we report against them." },
  { icon: <Doc />, title: "Built to be handed over", body: "Documentation, training and access stay with you. You are never locked in to us." },
  { icon: <Shield />, title: "Secure by default", body: "We work in your environment with least-privilege access, under NDA, and handle personal data in line with Indian law." },
];

const models = [
  { title: "Fixed-scope projects", body: "A defined deliverable, timeline and fee. Ideal for a dashboard build, a migration, a marketing audit or a website relaunch.", points: ["Fixed price after discovery", "Milestone-based delivery", "Warranty period after go-live"] },
  { title: "Monthly retainers", body: "An ongoing team for reporting, campaigns and continuous improvement, billed monthly with a clear scope.", points: ["Agreed monthly capacity", "Monthly reporting and review", "Flexible, with notice terms"] },
  { title: "Staff augmentation", body: "Vetted data, BI and QA professionals who join your team on contract, contract-to-hire or permanent terms.", points: ["Technically screened shortlists", "Contract or permanent", "Replacement support"] },
];

const steps = [
  { title: "Discovery", body: "We learn your goals, systems and constraints, and agree on what success looks like." },
  { title: "Plan and estimate", body: "You get a clear scope, timeline and team before any work starts." },
  { title: "Deliver and support", body: "We build, test and hand over, then stay available as you grow." },
];

const faqs = [
  { q: "Who do you work with?", a: "Enterprise teams and growing businesses in India and internationally, typically where reporting, marketing and hiring needs overlap." },
  { q: "Do you work with clients outside India?", a: "Yes. We work remotely with clients in other time zones and agree overlap hours and communication cadence at the start." },
  { q: "How quickly can you start?", a: "Discovery can usually begin within days of a signed agreement. Staffing searches start as soon as the role brief is agreed." },
  { q: "How is pricing structured?", a: "Projects are fixed-fee after discovery. Retainers are a monthly fee for agreed capacity. Staffing is a rate card or placement fee agreed in writing." },
  { q: "Will we own what you build?", a: "Yes. Work is delivered in your accounts and tenants, and intellectual property in deliverables passes to you on payment, as set out in our agreement." },
  { q: "How do you handle confidential data?", a: "We sign an NDA before discovery, access only what the work requires, and follow the practices set out in our Privacy policy." },
];

const tools = ["Power BI", "Power Apps", "Power Automate", "Microsoft Fabric", "Azure", "SQL Server", "Google Analytics 4", "Google Ads", "Meta Ads", "LinkedIn Ads", "Search Console", "Looker Studio"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow on-dark"><span className="live-dot" /> Data · Marketing · IT staffing</p>
            <h1>Data, marketing and the people to run them.</h1>
            <p className="lead">
              We build analytics that leadership actually uses, grow your reach online, and place
              skilled data and QA professionals on your team.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-light">Start a conversation <Arrow /></Link>
              <Link href="/services" className="btn btn-ghost">Explore services</Link>
            </div>
            <ul className="hero-points">
              <li><Check /> Reply within one working day</li>
              <li><Check /> NDA before discovery</li>
              <li><Check /> India and international clients</li>
            </ul>
          </div>
          <HeroPanel />
        </div>
        <div className="wrap tool-row" aria-label="Platforms we work with">
          <span className="tool-label">Platforms we work with</span>
          <div className="tool-list">
            {tools.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Three practices under one roof.</h2>
            <p className="lead">
              The same team that designs your reporting can help you market it and staff it. We
              work with enterprise and growing businesses in India and internationally.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card">
                <div className="service-top">
                  <span className="icon-box"><ServiceIcon name={s.icon} /></span>
                  <span className="mono">0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <ul>
                  {s.offerings.map((o) => <li key={o.title}>{o.title}</li>)}
                </ul>
                <span className="card-link">Explore the practice <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div className="section-head sticky">
            <p className="eyebrow">Why Pixel and Pine</p>
            <h2>Built for teams that need results they can measure.</h2>
            <p className="lead">
              We combine delivery discipline with practical, hands-on expertise. You get a single
              partner who understands how your data, your marketing and your people connect.
            </p>
            <Link href="/about" className="text-link">More about how we work <Arrow /></Link>
          </div>
          <div className="principles">
            {principles.map((p) => (
              <div key={p.title} className="principle">
                <span className="icon-box">{p.icon}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Engagement models</p>
            <h2>Work with us the way that suits you.</h2>
          </div>
          <div className="model-grid">
            {models.map((m) => (
              <div key={m.title} className="model">
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <ul className="checks">
                  {m.points.map((p) => <li key={p}><Check /> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="process">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow on-dark">How an engagement runs</p>
            <h2>Clear steps. No surprises.</h2>
          </div>
          <ol className="process">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-no">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="process-note">
            <Doc size={18} /> Every engagement ends with documentation and a handover session, so your team can run what we build.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions we hear often.</h2>
            <p className="lead">Something not covered here? <Link href="/contact" className="inline-link">Ask us directly</Link>.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function HeroPanel() {
  const bars = [38, 52, 46, 61, 57, 72, 68, 84];
  return (
    <div className="panel" aria-hidden="true">
      <div className="panel-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="mono">reporting / executive-overview</span>
      </div>
      <div className="panel-body">
        <div className="kpis">
          <div><small>Revenue</small><b>Trending up</b><span className="spark up" /></div>
          <div><small>Qualified leads</small><b>On target</b><span className="spark" /></div>
          <div><small>Open roles</small><b>Shortlisted</b><span className="spark flat" /></div>
        </div>
        <div className="chart">
          <div className="chart-head"><small>Performance by month</small><span className="mono">FY 26–27</span></div>
          <div className="bars">
            {bars.map((h, i) => <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
