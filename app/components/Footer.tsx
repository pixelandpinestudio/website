import Link from "next/link";
import { services, site } from "../lib/site";
import { Logo } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <Logo />
              <span>{site.name}</span>
            </Link>
            <p>
              Data and analytics, digital marketing and IT staffing for enterprise and growing
              businesses in India and internationally.
            </p>
            <Link href="/contact" className="text-link">Start a conversation →</Link>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#process">Approach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact?type=candidate">Careers and candidates</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/cookie-policy">Cookie policy</Link></li>
              <li><Link href="/privacy-policy#grievance">Grievance officer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Made in India · Serving clients worldwide</span>
        </div>
      </div>
    </footer>
  );
}
