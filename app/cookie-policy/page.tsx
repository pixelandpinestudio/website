import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "How www.thepixelandpinestudio.com uses cookies and similar technologies.",
  alternates: { canonical: "/cookie-policy" },
};

const toc = [
  { id: "what", label: "What cookies are" },
  { id: "use", label: "How we use them" },
  { id: "third", label: "Third parties" },
  { id: "control", label: "Your choices" },
  { id: "changes", label: "Changes" },
];

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie policy"
      intro="We keep tracking to a minimum. This page explains which cookies and similar technologies this website uses, and how you can control them."
      toc={toc}
    >
      <h2 id="what">1. What cookies are</h2>
      <p>
        Cookies are small text files a website stores on your device. Similar technologies include
        local storage and pixels. They can be strictly necessary for a site to work, or used for
        analytics and advertising.
      </p>

      <h2 id="use">2. How we use them</h2>
      <table>
        <thead><tr><th>Category</th><th>Used on this website?</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Strictly necessary</td><td>Only where required</td><td>Delivering pages securely and protecting the site and contact form from abuse</td></tr>
          <tr><td>Analytics</td><td>No</td><td>-</td></tr>
          <tr><td>Advertising and tracking</td><td>No</td><td>-</td></tr>
        </tbody>
      </table>
      <p>
        Because we use only strictly necessary technologies, no consent banner is shown. If we
        introduce analytics or advertising cookies in future, we will update this policy and ask for
        your consent first, as required by the Digital Personal Data Protection Act, 2023.
      </p>

      <h2 id="third">3. Third parties</h2>
      <p>
        Our hosting provider may process technical information such as your IP address to deliver
        the website and protect it from attacks. See our{" "}
        <Link href="/privacy-policy#sharing">Privacy policy</Link> for the providers we use.
      </p>

      <h2 id="control">4. Your choices</h2>
      <p>
        You can block or delete cookies through your browser settings. Blocking strictly necessary
        cookies may stop parts of the website, such as the contact form, from working.
      </p>

      <h2 id="changes">5. Changes</h2>
      <p>
        We will update this page if our use of cookies changes. Questions can be sent to{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
