import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How The Pixel and Pine Studio collects, uses and protects personal data under the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.",
  alternates: { canonical: "/privacy-policy" },
};

const toc = [
  { id: "about", label: "About this policy" },
  { id: "laws", label: "Laws we follow" },
  { id: "collect", label: "Personal data we collect" },
  { id: "purposes", label: "Why we use it" },
  { id: "consent", label: "Consent and withdrawal" },
  { id: "sharing", label: "Who we share it with" },
  { id: "transfers", label: "Transfers outside India" },
  { id: "retention", label: "How long we keep it" },
  { id: "security", label: "How we protect it" },
  { id: "breach", label: "Personal data breaches" },
  { id: "rights", label: "Your rights" },
  { id: "duties", label: "Your duties" },
  { id: "children", label: "Children" },
  { id: "cookies", label: "Cookies" },
  { id: "grievance", label: "Grievance officer" },
  { id: "changes", label: "Changes to this policy" },
];

const mail = <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>;

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="This policy explains what personal data we collect through this website and our services, why we collect it, and the rights you have over it under Indian law."
      toc={toc}
    >
      <h2 id="about">1. About this policy</h2>
      <p>
        {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates{" "}
        <Link href="/">www.pixelandpinestudio.com</Link> and provides data and analytics, digital
        marketing and IT staffing services. For personal data we collect for our own purposes, we
        are the <strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023.
        Where we process personal data on behalf of a client as part of a project, we act as that
        client&apos;s <strong>Data Processor</strong> and process it only on their documented
        instructions under our agreement with them.
      </p>
      <p>
        This notice is provided in English. You may request it in any language listed in the
        Eighth Schedule to the Constitution of India by writing to {mail}.
      </p>

      <h2 id="laws">2. Laws we follow</h2>
      <ul>
        <li>The Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and the Digital Personal Data Protection Rules, 2025, as they come into force.</li>
        <li>The Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&ldquo;SPDI Rules&rdquo;).</li>
        <li>Other applicable Indian laws, and, where we serve clients outside India, the data protection laws that apply to that engagement.</li>
      </ul>

      <h2 id="collect">3. Personal data we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><strong>Enquiries:</strong> your name, email address, phone number, company and the contents of your message when you use our contact form or write to us.</li>
        <li><strong>Candidates:</strong> if you apply for a role or join our talent network, your CV, work history, skills, qualifications, current and expected compensation, notice period, location preferences and references you choose to share.</li>
        <li><strong>Clients and suppliers:</strong> business contact details of the people we work with, and information needed for contracts, invoicing and tax compliance.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Technical data processed by our hosting provider when you visit the website, such as IP address, browser type, device information, pages requested and time of visit. This is used for security and to keep the website running.</li>
      </ul>
      <p>
        We do not ask for passwords, financial account details, health data or biometric data
        through this website. Please do not include them in messages. If we need sensitive
        information for a specific purpose, such as a background check you have agreed to, we will
        ask for it separately and explain why.
      </p>

      <h2 id="purposes">4. Why we use your personal data</h2>
      <table>
        <thead><tr><th>Purpose</th><th>Basis under the DPDP Act</th></tr></thead>
        <tbody>
          <tr><td>Responding to your enquiry and preparing proposals</td><td>Your consent, and the legitimate use of data you voluntarily provide for that purpose (Section 7(a))</td></tr>
          <tr><td>Delivering services under a contract with you or your employer</td><td>Consent and the specified purpose for which you provided the data</td></tr>
          <tr><td>Recruitment: assessing your profile and, with your agreement, presenting it to client companies</td><td>Your consent, which we ask for before sharing your profile with any client</td></tr>
          <tr><td>Invoicing, accounting, tax and other legal obligations</td><td>Compliance with law (Section 7)</td></tr>
          <tr><td>Keeping the website secure and preventing fraud or misuse</td><td>Legitimate uses permitted by law</td></tr>
          <tr><td>Sending occasional updates about our services</td><td>Only with your separate, opt-in consent. You can unsubscribe at any time</td></tr>
        </tbody>
      </table>
      <p>We do not sell personal data, and we do not use it for automated decisions that have legal or similarly significant effects on you.</p>

      <h2 id="consent">5. Consent and withdrawal</h2>
      <p>
        Where we rely on consent, it is free, specific, informed, unconditional and unambiguous,
        and limited to the purpose stated when we ask for it. You can withdraw consent at any time
        by writing to {mail} or through our <Link href="/contact">contact form</Link>; withdrawing is
        as easy as giving consent. Withdrawal does not affect processing already carried out, and
        we will stop processing and erase the data within a reasonable time unless we must keep it
        by law. You may also manage consent through a Consent Manager registered with the Data
        Protection Board of India, once such managers are available.
      </p>

      <h2 id="sharing">6. Who we share it with</h2>
      <ul>
        <li><strong>Service providers (Data Processors)</strong> that help us run our business, such as website hosting (Vercel), domain and email routing (Cloudflare), email delivery and productivity tools. They process data only on our instructions under contracts that require appropriate safeguards.</li>
        <li><strong>Client companies</strong>, when you are a candidate and you have agreed to us presenting your profile for a specific role.</li>
        <li><strong>Professional advisers</strong> such as lawyers, auditors and accountants, under a duty of confidentiality.</li>
        <li><strong>Government and law enforcement authorities</strong>, when required by law, court order or a lawful request.</li>
        <li><strong>A successor business</strong>, in the event of a merger, acquisition or restructuring, subject to this policy.</li>
      </ul>

      <h2 id="transfers">7. Transfers outside India</h2>
      <p>
        Some of our service providers store or process data on servers outside India. We transfer
        personal data outside India only as permitted under Section 16 of the DPDP Act and will not
        transfer it to any country or territory the Central Government has restricted by
        notification. We require providers to protect data to a standard no lower than this policy.
      </p>

      <h2 id="retention">8. How long we keep it</h2>
      <ul>
        <li><strong>Enquiries</strong> that do not lead to an engagement: up to 24 months after our last contact.</li>
        <li><strong>Candidate profiles:</strong> up to 24 months after our last contact, or until you ask us to delete them.</li>
        <li><strong>Client and contract records:</strong> for the term of the engagement and as long as required by tax, accounting and other laws, typically eight years.</li>
        <li><strong>Security logs:</strong> for at least one year where required by law, and otherwise no longer than needed.</li>
      </ul>
      <p>When personal data is no longer needed for its purpose or the law, we erase it and ask our processors to do the same.</p>

      <h2 id="security">9. How we protect it</h2>
      <p>
        We maintain reasonable security safeguards, as required by Section 8(5) of the DPDP Act and
        Rule 8 of the SPDI Rules, including encryption in transit (HTTPS), access limited to people
        who need it, strong authentication on business accounts, confidentiality obligations
        for our team and contractors, and regular review of access. No system is completely secure,
        but we work to protect your data and to respond quickly if something goes wrong.
      </p>

      <h2 id="breach">10. Personal data breaches</h2>
      <p>
        If a personal data breach occurs, we will inform the Data Protection Board of India and each
        affected person as required by the DPDP Act and Rules, describing what happened, the likely
        impact, the steps we are taking and what you can do to protect yourself.
      </p>

      <h2 id="rights">11. Your rights</h2>
      <p>Under the DPDP Act you have the right to:</p>
      <ul>
        <li><strong>Access</strong> a summary of the personal data we process about you, the processing activities, and the identities of others we have shared it with (Section 11).</li>
        <li><strong>Correction, completion, updating and erasure</strong> of your personal data (Section 12).</li>
        <li><strong>Grievance redressal</strong> through our Grievance Officer (Section 13).</li>
        <li><strong>Nominate</strong> another person to exercise your rights in the event of your death or incapacity (Section 14).</li>
        <li><strong>Withdraw consent</strong> at any time, as described above.</li>
      </ul>
      <p>
        To exercise any right, write to {mail} from the email address we hold, or use our contact
        form. We may need to verify your identity. We aim to respond within 30 days and in any case
        within the period prescribed under the DPDP Rules.
      </p>

      <h2 id="duties">12. Your duties</h2>
      <p>
        Under Section 15 of the DPDP Act, please give us accurate information, do not impersonate
        anyone, do not suppress material information, and do not file false or frivolous complaints.
      </p>

      <h2 id="children">13. Children</h2>
      <p>
        Our website and services are intended for businesses and adult professionals. We do not
        knowingly collect personal data of anyone under 18 without verifiable consent of a parent
        or lawful guardian, and we do not track, monitor behaviour of, or target advertising at
        children. If you believe a child has sent us personal data, contact {mail} and we will
        delete it.
      </p>

      <h2 id="cookies">14. Cookies</h2>
      <p>
        This website does not use advertising or analytics cookies. See our{" "}
        <Link href="/cookie-policy">Cookie policy</Link> for details.
      </p>

      <h2 id="grievance">15. Grievance officer</h2>
      <p>
        In line with Section 13 of the DPDP Act and Rule 5(9) of the SPDI Rules, you can raise any
        question, complaint or request about your personal data with our Grievance Officer:
      </p>
      <div className="callout">
        <p><strong>Grievance Officer{site.grievanceOfficer ? `: ${site.grievanceOfficer}` : ""}</strong></p>
        <p>{site.name}</p>
        {site.postalAddress && <p>{site.postalAddress}</p>}
        <p>Email: {mail}</p>
      </div>
      <p>
        We will acknowledge your grievance promptly and resolve it within one month of receipt. If
        you are not satisfied with our response, you may complain to the Data Protection Board of
        India after exhausting this grievance process, as provided under the DPDP Act.
      </p>

      <h2 id="changes">16. Changes to this policy</h2>
      <p>
        We may update this policy to reflect changes in law or in how we work. The latest version
        will always be on this page with its date. If changes are significant, we will tell you
        through the website or by email before they take effect.
      </p>
    </LegalPage>
  );
}
