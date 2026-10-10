import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms that apply to your use of the The Pixel and Pine Studio website.",
  alternates: { canonical: "/terms" },
};

const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "services", label: "Our services" },
  { id: "use", label: "Using this website" },
  { id: "ip", label: "Intellectual property" },
  { id: "submissions", label: "Information you send us" },
  { id: "recruitment", label: "Recruitment fraud" },
  { id: "links", label: "Third-party links" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes and contact" },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      intro="These terms govern your access to and use of www.thepixelandpinestudio.com. Please read them carefully."
      toc={toc}
    >
      <h2 id="acceptance">1. Acceptance</h2>
      <p>
        By accessing or using this website you agree to these terms and to our{" "}
        <Link href="/privacy-policy">Privacy policy</Link>. If you do not agree, please do not use
        the website. These terms are an electronic record under the Information Technology Act,
        2000 and do not require a physical or digital signature.
      </p>

      <h2 id="services">2. Our services</h2>
      <p>
        The website describes the data and analytics, digital marketing and IT staffing services
        offered by {site.name}. Content on the website is for general information and is not an
        offer capable of acceptance. Every engagement is governed by a separate written agreement,
        statement of work or placement terms, which take precedence over anything on this website.
      </p>

      <h2 id="use">3. Using this website</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the website for any unlawful purpose or in breach of any applicable law, including the Information Technology Act, 2000;</li>
        <li>attempt to gain unauthorised access to the website, its servers or any connected system, or interfere with its security or operation;</li>
        <li>introduce viruses, malware or any harmful code, or run automated scraping that places an unreasonable load on the website;</li>
        <li>submit false, misleading, defamatory or infringing content, or impersonate any person or organisation.</li>
      </ul>

      <h2 id="ip">4. Intellectual property</h2>
      <p>
        The website, including its design, text, graphics, logos and code, is owned by or licensed
        to {site.name} and protected by Indian and international intellectual property laws. You may
        view and print pages for your personal or internal business use. You may not copy,
        reproduce, modify or distribute any part of the website for commercial purposes without our
        written permission. Third-party product names, such as Microsoft Power BI or Google Ads, are
        trademarks of their respective owners and are used only to describe the platforms we work with.
      </p>

      <h2 id="submissions">5. Information you send us</h2>
      <p>
        When you contact us or send a CV, you confirm the information is accurate and that you are
        entitled to share it. We handle it as described in our{" "}
        <Link href="/privacy-policy">Privacy policy</Link>. Please do not send confidential business
        information until a non-disclosure agreement is in place.
      </p>

      <h2 id="recruitment">6. Recruitment fraud</h2>
      <p>
        {site.name} never asks candidates to pay any fee, deposit or charge for applications,
        interviews, training or placement. We contact candidates only from email addresses on the
        pixelandpinestudio.com domain. If you receive a request for money in our name, do not pay,
        and <Link href="/contact">report it to us</Link> and to the National Cyber Crime Reporting
        Portal (cybercrime.gov.in) or helpline 1930.
      </p>

      <h2 id="links">7. Third-party links</h2>
      <p>
        The website may link to third-party websites. We do not control and are not responsible for
        their content, availability or privacy practices. Visiting them is at your own risk.
      </p>

      <h2 id="disclaimer">8. Disclaimer</h2>
      <p>
        The website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
        While we take care to keep information accurate and current, we make no warranty that it is
        complete, error-free or suitable for any particular purpose, or that the website will be
        uninterrupted or free of harmful components. Nothing on the website is legal, financial or
        professional advice.
      </p>

      <h2 id="liability">9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for any indirect,
        incidental, special or consequential loss, or for loss of profit, revenue, data or goodwill,
        arising from your use of or inability to use the website. Nothing in these terms limits
        liability that cannot be limited under applicable law.
      </p>

      <h2 id="indemnity">10. Indemnity</h2>
      <p>
        You agree to indemnify {site.name} against claims, losses and expenses, including reasonable
        legal fees, arising from your breach of these terms or misuse of the website.
      </p>

      <h2 id="law">11. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of India. Any dispute arising from them or from your
        use of the website will be subject to the exclusive jurisdiction of the competent courts in
        India. If any provision is found unenforceable, the rest remains in effect.
      </p>

      <h2 id="changes">12. Changes and contact</h2>
      <p>
        We may update these terms from time to time; the version on this page applies from its date.
        Questions about these terms can be sent through our <Link href="/contact">contact form</Link>.
        Complaints about content on this website can be raised with our{" "}
        <Link href="/privacy-policy#grievance">Grievance Officer</Link>.
      </p>
    </LegalPage>
  );
}
