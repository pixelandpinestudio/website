import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

type Practice = {
  id: string;
  title: string;
  tagline: string;
  tone: "data" | "mkt" | "staff";
  cta: string;
  icon: React.ReactNode;
  items: string[];
};

const practices: Practice[] = [
  {
    id: "data",
    title: "Data and analytics",
    tagline: "From raw systems to dashboards people make decisions with.",
    tone: "data",
    cta: "Talk to us about your data",
    icon: <IconChart />,
    items: [
      "Power BI dashboards and reporting",
      "Power Platform apps and automation",
      "Data architecture and migration",
      "Discovery and solution design",
    ],
  },
  {
    id: "marketing",
    title: "Digital marketing",
    tagline: "Campaigns measured as carefully as we measure everything else.",
    tone: "mkt",
    cta: "Plan a campaign with us",
    icon: <IconMegaphone />,
    items: [
      "Search engine optimisation",
      "Social media management",
      "Paid ads and performance campaigns",
      "Content and website management",
    ],
  },
  {
    id: "staffing",
    title: "IT staffing",
    tagline: "Vetted professionals for contract or long-term roles.",
    tone: "staff",
    cta: "Tell us the role to fill",
    icon: <IconPeople />,
    items: [
      "Data management specialists",
      "Software testing",
      "Quality assurance (QA)",
      "BI and data engineering talent",
    ],
  },
];

const steps = [
  {
    title: "Discovery",
    body: "We learn your goals, systems and constraints, and agree on what success looks like.",
  },
  {
    title: "Plan and estimate",
    body: "You get a clear scope, timeline and team before any work starts.",
  },
  {
    title: "Deliver and support",
    body: "We build, test and hand over, then stay available as you grow.",
  },
];

const tools = [
  "Power BI", "Power Apps", "Power Automate", "Azure", "SQL", "Excel",
  "Google Analytics", "Google Ads", "Meta Ads", "SEO", "Social media", "QA testing",
];

const contacts = [
  { label: "New projects and hiring", email: "admin@pixelandpinestudio.com", tone: "data" },
  { label: "Client support", email: "support@pixelandpinestudio.com", tone: "mkt" },
  { label: "Privacy and data requests", email: "privacy@pixelandpinestudio.com", tone: "staff" },
];

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />

      <header className="hero" id="top">
        <div className="hero-glow" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="pill">
              <span className="dot" /> Data · Marketing · Staffing
            </p>
            <h1>
              <span className="g-data">Data</span>, <span className="g-mkt">marketing</span>
              <br /> and the <span className="g-staff">people</span> to run them.
            </h1>
            <p className="lead">
              We build analytics that leadership actually uses, grow your reach online, and
              place skilled data and QA professionals on your team.
            </p>
            <div className="actions">
              <a href="#contact" className="btn">
                Start a conversation <Arrow />
              </a>
              <a href="#services" className="btn-ghost">Explore what we do</a>
            </div>
            <ul className="chips">
              {practices.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className={`chip t-${p.tone}`}>
                    {p.icon}
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
        <div className="pixel-strip" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className={`px t-${["data", "mkt", "staff"][i % 3]}`} />
          ))}
        </div>
      </header>

      <main>
        <section className="marquee" aria-label="Platforms we work with">
          <div className="marquee-track">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} aria-hidden={i >= tools.length}>
                {t}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="wrap">
            <div className="intro" data-reveal>
              <p className="kicker">What we do</p>
              <h2>Three practices under one roof.</h2>
              <p className="muted">
                The same team that designs your reporting can help you market it and staff it.
                We work with enterprise and growing businesses in India and internationally.
              </p>
            </div>
            <div className="practices">
              {practices.map((p, i) => (
                <article
                  key={p.id}
                  id={p.id}
                  className={`practice t-${p.tone}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="practice-head">
                    <span className="icon">{p.icon}</span>
                    <span className="index">0{i + 1}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.tagline}</p>
                  <ul>
                    {p.items.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="practice-link">
                    {p.cta} <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="wrap">
            <div className="intro" data-reveal>
              <p className="kicker">How an engagement runs</p>
              <h2>Clear steps, no surprises.</h2>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`step t-${["data", "mkt", "staff"][i]}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap">
            <div className="contact-card" data-reveal>
              <div className="contact-glow" aria-hidden="true" />
              <div className="contact-copy">
                <p className="kicker light">Get in touch</p>
                <h2>Tell us what you&apos;re working on.</h2>
                <p>
                  Whether it&apos;s a dashboard, a marketing push or a role to fill, send a short
                  note and we&apos;ll reply within one working day.
                </p>
                <a href="mailto:admin@pixelandpinestudio.com" className="btn">
                  Email us <Arrow />
                </a>
              </div>
              <ul className="contacts">
                {contacts.map((c) => (
                  <li key={c.email} className={`t-${c.tone}`}>
                    <span className="bar" aria-hidden="true" />
                    <div>
                      <span className="label">{c.label}</span>
                      <a href={`mailto:${c.email}`}>{c.email}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a href="#top" className="logo">
            <Mark />
            <span>The Pixel and Pine Studio</span>
          </a>
          <nav aria-label="Footer">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="mailto:privacy@pixelandpinestudio.com">Privacy</a>
          </nav>
          <span className="copy">© {new Date().getFullYear()} The Pixel and Pine Studio</span>
        </div>
      </footer>
    </>
  );
}

function HeroVisual() {
  const bars = [42, 58, 50, 72, 64, 86, 78];
  return (
    <div className="visual" aria-hidden="true">
      <div className="glass card-main t-data">
        <div className="card-top">
          <span className="tag">Executive dashboard</span>
        </div>
        <div className="bars">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
        <div className="legend legend-top">
          <span><i className="sw data" />Actual</span>
          <span><i className="sw mkt" />Target</span>
        </div>
      </div>
      <div className="glass card-float card-mkt t-mkt">
        <span className="tag">Campaign reach</span>
        <svg viewBox="0 0 120 44" className="spark">
          <path d="M2 38 L20 30 L36 33 L54 20 L72 24 L90 10 L118 6" />
        </svg>
      </div>
      <div className="glass card-float card-staff t-staff">
        <span className="tag">Team placed</span>
        <div className="avatars">
          <i>BI</i><i>QA</i><i>DE</i><i>+</i>
        </div>
      </div>
    </div>
  );
}

function Mark() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0f2a1f" />
      <path d="M16 5 L25 21 H7 Z" fill="#34d399" />
      <rect x="14" y="21" width="4" height="6" fill="#fbbf24" />
      <rect x="21" y="6" width="4" height="4" fill="#a78bfa" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="check">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

function IconMegaphone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 8.5a5 5 0 0 1 0 7M20 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" />
    </svg>
  );
}
