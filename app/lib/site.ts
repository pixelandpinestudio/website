export const site = {
  name: "The Pixel and Pine Studio",
  short: "Pixel and Pine",
  url: "https://www.thepixelandpinestudio.com",
  description:
    "Data and analytics, digital marketing and IT staffing for enterprise and growing businesses in India and internationally.",
  contactEmail: "admin@pixelandpinestudio.com",
  privacyEmail: "privacy@pixelandpinestudio.com",
  legalUpdated: "9 October 2026",
  // Fill these in to publish them on the legal pages.
  grievanceOfficer: "",
  postalAddress: "",
};

export type Offering = { title: string; body: string; points: string[] };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  icon: "chart" | "megaphone" | "people";
  title: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  intro: string;
  offerings: Offering[];
  deliverables: string[];
  outcomes: { title: string; body: string }[];
  tools: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "data-analytics",
    icon: "chart",
    title: "Data and analytics",
    eyebrow: "Practice 01",
    tagline: "From raw systems to dashboards people make decisions with.",
    summary:
      "Power BI reporting, Power Platform apps and the data foundations underneath them, designed around the decisions your leadership actually makes.",
    intro:
      "Most organisations do not lack data. They lack a trusted, shared version of it. We connect your source systems, model the numbers once, and put them in front of the people who need them, with the security and documentation to keep it running after we hand over.",
    offerings: [
      {
        title: "Power BI dashboards and reporting",
        body: "Executive, operational and self-service reporting built on a single, governed model.",
        points: [
          "Semantic models with documented DAX measures",
          "Row-level security and workspace governance",
          "Paginated and scheduled reports",
          "Migration from Excel and legacy reporting tools",
        ],
      },
      {
        title: "Power Platform apps and automation",
        body: "Low-code apps and workflows that remove manual, error-prone steps from everyday work.",
        points: [
          "Power Apps canvas and model-driven apps",
          "Power Automate flows and approvals",
          "Dataverse and SharePoint integration",
          "Environment strategy and ALM",
        ],
      },
      {
        title: "Data architecture and migration",
        body: "Reliable pipelines and storage that scale with your reporting, not against it.",
        points: [
          "Warehouse and lakehouse design on Azure",
          "ETL and ELT pipelines with Data Factory and SQL",
          "On-premise to cloud migration",
          "Data quality checks and monitoring",
        ],
      },
      {
        title: "Discovery and solution design",
        body: "A short, structured engagement that turns a broad ambition into a scoped, costed plan.",
        points: [
          "Stakeholder workshops and KPI definitions",
          "Source system and data audit",
          "Target architecture and roadmap",
          "Estimates you can take to budget approval",
        ],
      },
    ],
    deliverables: [
      "KPI catalogue with agreed definitions",
      "Documented data model and lineage",
      "Dashboards published to your tenant with access controls",
      "Runbooks, handover sessions and training",
    ],
    outcomes: [
      { title: "One version of the numbers", body: "Finance, sales and operations work from the same definitions." },
      { title: "Less manual reporting", body: "Spreadsheets stitched together by hand are replaced with refreshed models." },
      { title: "Owned by your team", body: "Everything is documented and built in your environment, not ours." },
    ],
    tools: ["Power BI", "Power Apps", "Power Automate", "Dataverse", "Azure Data Factory", "Azure SQL", "Microsoft Fabric", "SQL Server", "Excel", "SharePoint"],
    faqs: [
      {
        q: "Do you work inside our Microsoft tenant?",
        a: "Yes. We build in your environment under accounts you control, so you keep full ownership of reports, models and data.",
      },
      {
        q: "Can you improve dashboards we already have?",
        a: "Yes. We often start with a review of existing reports, fix the model underneath and then rationalise the report set.",
      },
      {
        q: "How long does a typical dashboard project take?",
        a: "It depends on the number of source systems and the state of the data. Discovery gives you a fixed scope and timeline before any build starts.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    title: "Digital marketing",
    eyebrow: "Practice 02",
    tagline: "Campaigns measured as carefully as we measure everything else.",
    summary:
      "SEO, social media, paid campaigns and website management, run against clear targets and reported with the same rigour as our analytics work.",
    intro:
      "Marketing spend should be explainable. We plan channels around your commercial goals, set up tracking before we spend, and report what moved and why. Because we also build analytics, your marketing numbers sit in the same trusted reporting as the rest of the business.",
    offerings: [
      {
        title: "Search engine optimisation",
        body: "Technical, on-page and content SEO that compounds over time.",
        points: [
          "Technical audits and Core Web Vitals",
          "Keyword research and content plans",
          "On-page optimisation and internal linking",
          "Local SEO and Google Business Profile",
        ],
      },
      {
        title: "Social media management",
        body: "A consistent, on-brand presence on the platforms your buyers use.",
        points: [
          "Channel strategy and content calendars",
          "Post design and copywriting",
          "Community management",
          "Monthly reporting and recommendations",
        ],
      },
      {
        title: "Paid ads and performance campaigns",
        body: "Search, social and display campaigns optimised to cost per qualified lead.",
        points: [
          "Google Ads, Meta Ads and LinkedIn Ads",
          "Conversion tracking with GA4 and Tag Manager",
          "Landing page and creative testing",
          "Budget pacing and bid strategy",
        ],
      },
      {
        title: "Content and website management",
        body: "Keeping your website current, fast and working as your best salesperson.",
        points: [
          "Landing pages and site updates",
          "Blog and long-form content",
          "CMS administration",
          "Analytics and form tracking",
        ],
      },
    ],
    deliverables: [
      "Marketing audit and channel plan",
      "Tracking plan with conversion events",
      "Monthly performance report and dashboard",
      "Quarterly review with next-quarter priorities",
    ],
    outcomes: [
      { title: "Spend you can explain", body: "Every channel has a target and a measured cost per result." },
      { title: "Better qualified leads", body: "Campaigns are tuned to pipeline quality, not just volume." },
      { title: "A site that converts", body: "Pages are tested and improved against real behaviour." },
    ],
    tools: ["Google Analytics 4", "Google Tag Manager", "Google Search Console", "Google Ads", "Meta Ads", "LinkedIn Ads", "Looker Studio", "Power BI", "WordPress", "Webflow"],
    faqs: [
      {
        q: "Do you require a long-term contract?",
        a: "No. Most clients start on a monthly retainer with a defined scope. Projects such as an audit or a site rebuild can also be fixed-fee.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. We work inside ad and analytics accounts owned by your business, so history and data stay with you.",
      },
      {
        q: "How do you report results?",
        a: "You get a monthly report against agreed targets, with a live dashboard if you want one.",
      },
    ],
  },
  {
    slug: "it-staffing",
    icon: "people",
    title: "IT staffing",
    eyebrow: "Practice 03",
    tagline: "Vetted professionals for contract or long-term roles.",
    summary:
      "Screened data, BI and quality assurance professionals placed on contract, contract-to-hire or permanent terms.",
    intro:
      "Because we deliver data and testing work ourselves, we know what good looks like in these roles. Every candidate we put forward has been technically assessed against your brief, not just matched on keywords.",
    offerings: [
      {
        title: "Data management specialists",
        body: "People who keep your data accurate, governed and usable.",
        points: [
          "Data analysts",
          "Data stewards and governance roles",
          "Master data management",
          "Data migration specialists",
        ],
      },
      {
        title: "Software testing",
        body: "Manual and automation testers who fit into your delivery process.",
        points: [
          "Manual and functional testers",
          "Test automation engineers",
          "API and integration testing",
          "Performance testing",
        ],
      },
      {
        title: "Quality assurance (QA)",
        body: "Leaders who set up and run quality across teams and releases.",
        points: [
          "QA leads and test managers",
          "Test strategy and planning",
          "Defect management and reporting",
          "Process and release quality",
        ],
      },
      {
        title: "BI and data engineering talent",
        body: "Engineers who build and maintain the reporting stack.",
        points: [
          "Power BI developers",
          "Data engineers (Azure, SQL, Python)",
          "ETL and pipeline developers",
          "Analytics engineers",
        ],
      },
    ],
    deliverables: [
      "Role brief agreed with your hiring manager",
      "Shortlist of screened, technically assessed candidates",
      "Interview coordination and feedback loop",
      "Onboarding support and regular check-ins",
    ],
    outcomes: [
      { title: "Faster shortlists", body: "You interview fewer, better-matched candidates." },
      { title: "Flexible terms", body: "Contract, contract-to-hire or permanent, as your needs change." },
      { title: "Technical screening", body: "Candidates are assessed by practitioners in the same discipline." },
    ],
    tools: ["Contract", "Contract-to-hire", "Permanent", "Onsite", "Hybrid", "Remote"],
    faqs: [
      {
        q: "What engagement models do you offer?",
        a: "Contract staffing, contract-to-hire and permanent placement. We agree the model, notice terms and fees in writing before any search starts.",
      },
      {
        q: "How do you screen candidates?",
        a: "We review experience against your brief, run a technical assessment for the role and complete reference checks before a profile reaches you.",
      },
      {
        q: "I am a professional looking for roles. Can I apply?",
        a: "Yes. Use the contact form and choose 'I'm looking for a role'. We never charge candidates any fee at any stage.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
