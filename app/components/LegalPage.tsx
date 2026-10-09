import Link from "next/link";
import { site } from "../lib/site";

export default function LegalPage({
  title,
  intro,
  toc,
  children,
}: {
  title: string;
  intro: string;
  toc: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <main className="legal">
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
          <p className="meta">Last updated {site.legalUpdated}</p>
        </div>
      </section>
      <div className="wrap legal-grid">
        <aside className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
            ))}
          </ol>
          <div className="toc-links">
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
            <Link href="/cookie-policy">Cookie policy</Link>
          </div>
        </aside>
        <article className="prose">{children}</article>
      </div>
    </main>
  );
}
