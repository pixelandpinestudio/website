const services = [
  {
    title: "Websites",
    body: "Fast, accessible sites that look sharp on every screen and are easy to keep up to date.",
  },
  {
    title: "Android & iOS apps",
    body: "Native-feeling mobile apps built from one codebase and shipped to Google Play and the App Store.",
  },
  {
    title: "Design",
    body: "Brand, interface and product design, from first sketch to pixel-perfect screens.",
  },
];

const steps = [
  { n: "01", title: "Listen", body: "We learn what you need and who it is for." },
  { n: "02", title: "Design", body: "We shape the idea into clear, testable screens." },
  { n: "03", title: "Build", body: "We develop, test and launch on web and mobile." },
  { n: "04", title: "Grow", body: "We measure, improve and keep things running." },
];

const email = "support@pixelandpinestudio.com";

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a href="/" className="logo" aria-label="Pixel & Pine Studio home">
          <PineMark />
          <span>Pixel &amp; Pine</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact" className="btn btn-small">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <p className="eyebrow">Digital studio</p>
          <h1>
            Websites and apps,
            <br />
            <em>grown with care.</em>
          </h1>
          <p className="lead">
            Pixel &amp; Pine Studio designs and builds websites and mobile apps for
            Android and iOS. Thoughtful design, solid engineering, no fuss.
          </p>
          <div className="actions">
            <a href={`mailto:${email}`} className="btn">Start a project</a>
            <a href="#services" className="link">See what we do →</a>
          </div>
          <div className="pixels" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${(i % 6) * 0.15}s` }} />
            ))}
          </div>
        </section>

        <section id="services" className="wrap section">
          <h2>What we do</h2>
          <div className="grid">
            {services.map((s) => (
              <article key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="band">
          <div className="wrap section">
            <h2>How we work</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Have something in mind?</h2>
          <p className="lead">Tell us about it. We usually reply within a working day.</p>
          <a href={`mailto:${email}`} className="btn">{email}</a>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Pixel &amp; Pine Studio</span>
        <a href="mailto:privacy@pixelandpinestudio.com">Privacy</a>
      </footer>
    </>
  );
}

function PineMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="var(--pine)" />
      <path d="M16 5 L25 21 H7 Z" fill="var(--leaf)" />
      <rect x="14" y="21" width="4" height="6" fill="var(--amber)" />
      <rect x="21" y="6" width="4" height="4" fill="var(--amber)" />
    </svg>
  );
}
