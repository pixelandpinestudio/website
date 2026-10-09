import Nav from "./components/Nav";

const practices = [
  {
    title: "Data and analytics",
    tagline: "From raw systems to dashboards people make decisions with.",
    color: "var(--forest)",
    items: [
      "Power BI dashboards and reporting",
      "Power Platform apps and automation",
      "Data architecture and migration",
      "Discovery and solution design",
    ],
  },
  {
    title: "Digital marketing",
    tagline: "Campaigns measured as carefully as we measure everything else.",
    color: "var(--amber)",
    items: [
      "Search engine optimisation",
      "Social media management",
      "Paid ads and performance campaigns",
      "Content and website management",
    ],
  },
  {
    title: "IT staffing",
    tagline: "Vetted professionals for contract or long-term roles.",
    color: "var(--sage)",
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

const contacts = [
  { label: "New projects and hiring", email: "admin@pixelandpinestudio.com" },
  { label: "Client support", email: "support@pixelandpinestudio.com" },
  { label: "Privacy and data requests", email: "privacy@pixelandpinestudio.com" },
];

// Pixel pine: each row is [start column, width] on a 9-column grid.
const tree: [number, number][] = [
  [4, 1], [3, 3], [2, 5], [3, 3], [2, 5], [1, 7], [2, 5], [1, 7], [0, 9],
];

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <Nav />
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>Data, marketing and the people to run them.</h1>
            <p className="lead">
              We build analytics that leadership actually uses, grow your reach online, and
              place skilled data and QA professionals on your team.
            </p>
            <a href="#contact" className="btn">Start a conversation</a>
          </div>
          <PixelPine />
        </section>
        <div className="pixel-strip" aria-hidden="true" />
      </div>

      <main>
        <section id="services" className="section">
          <div className="wrap">
            <div className="intro">
              <h2>What we do</h2>
              <p className="muted">
                Three practices under one roof, so the same team that designs your reporting can
                help you market it and staff it. We work with enterprise and growing businesses
                in India and internationally.
              </p>
            </div>
            <div className="practices">
              {practices.map((p) => (
                <article key={p.title} className="practice">
                  <span className="swatch" style={{ background: p.color }} aria-hidden="true" />
                  <h3>{p.title}</h3>
                  <p className="muted">{p.tagline}</p>
                  <ul>
                    {p.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section white">
          <div className="wrap">
            <h2>How an engagement runs</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="wrap contact-grid">
            <div>
              <h2 className="big">Tell us what you&apos;re working on.</h2>
              <p className="muted">
                Whether it&apos;s a dashboard, a marketing push or a role to fill, send a short
                note and we&apos;ll reply within one working day.
              </p>
              <a href="mailto:admin@pixelandpinestudio.com" className="btn">Email us</a>
            </div>
            <ul className="contacts">
              {contacts.map((c) => (
                <li key={c.email}>
                  <span>{c.label}</span>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </li>
              ))}
            </ul>
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

function PixelPine() {
  const cells: { x: number; y: number; c: string }[] = [];
  tree.forEach(([start, width], y) => {
    for (let x = start; x < start + width; x++) {
      const c = (x * 7 + y * 3) % 5 === 0 ? "var(--sage)" : "var(--leaf-dark)";
      cells.push({ x, y, c });
    }
  });
  [9, 10].forEach((y) => cells.push({ x: 4, y, c: "var(--amber)" }));
  return (
    <svg className="pixel-pine" viewBox="0 0 90 110" aria-hidden="true">
      {cells.map(({ x, y, c }, i) => (
        <rect
          key={i}
          x={x * 10 + 1}
          y={y * 10 + 1}
          width="8"
          height="8"
          rx="1"
          fill={c}
          style={{ animationDelay: `${((x + y) % 6) * 0.25}s` }}
        />
      ))}
    </svg>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="var(--forest)" />
      <path d="M16 5 L25 21 H7 Z" fill="var(--sage)" />
      <rect x="14" y="21" width="4" height="6" fill="var(--amber)" />
      <rect x="21" y="6" width="4" height="4" fill="var(--amber)" />
    </svg>
  );
}
