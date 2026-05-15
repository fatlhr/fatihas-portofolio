export const projects = [
  {
    slug: "bebas-bebasmaju",
    title: "Bebas & BebasMaju",
    company: "PT Bank Multiarta Sentosa Tbk (Bank MAS)",
    description:
      "Worked on banking and merchant flows across Android and iOS, with delivery spanning loan application, approval tracking, repayment handling, QR payments, invoice generation, and transaction monitoring inside the Bank MAS product suite.",
    technologies: ["loan flow", "merchant QR", "repayment tracking", "invoice flow"],
    imageUrl: "/images/project-4.svg",
    isInternal: false,
    role: "Mobile Engineer",
    scope: "Banking, lending, and merchant product delivery across Android and iOS.",
    projectLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=YOUR_APP_ID",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/id/app/YOUR_APP_NAME/id0000000000",
      },
    ],
    visuals: [
      { title: "Loan journey", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Merchant QR", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Invoice and repayment", imageUrl: "https://www.dummyimg.in/placeholder" },
    ],
    evidencePoints: [
      {
        title: "Loan flow",
        summary: "Application entry, approval tracking, and repayment handling.",
      },
      {
        title: "Merchant QR",
        summary: "Payment flow and transaction visibility for merchant operations.",
      },
      {
        title: "Invoice trail",
        summary: "Invoice generation and supporting transaction evidence.",
      },
    ],
  },
  {
    slug: "internal-workflow-app",
    title: "Internal Workflow App",
    company: "PT. Japfa Comfeed Indonesia",
    description:
      "Helped build Japfa's internal workflow app across mobile and web, covering form-driven task execution, approval flow, notifications, and team communication so daily coordination no longer depended on scattered third-party tools.",
    technologies: [
      "workflow system",
      "form-based tasks",
      "push notification",
      "team communication",
      "cross-platform app",
    ],
    imageUrl: "/images/project-1.svg",
    isInternal: true,
    role: "Mobile Engineer",
    scope: "Internal workflow, approval, and communication flow across mobile and web.",
    visuals: [
      { title: "Task form flow", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Approval handoff", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Team notifications", imageUrl: "https://www.dummyimg.in/placeholder" },
    ],
    evidencePoints: [
      {
        title: "Task execution",
        summary: "Form-driven work steps that replace scattered manual follow-up.",
      },
      {
        title: "Approval flow",
        summary: "Structured handoff between submitter, approver, and next action.",
      },
      {
        title: "Team signals",
        summary: "Notifications and communication that keep operations moving.",
      },
    ],
  },
  {
    slug: "nolimit-pemda",
    title: "NoLimit Pemda",
    company: "Freelance",
    description:
      "Built a mobile monitoring app for government-facing use cases, focused on social media tracking, issue visibility, and lightweight analytics that could be checked quickly from Android and iOS devices.",
    technologies: ["social monitoring", "local government", "mobile analytics", "issue tracking"],
    imageUrl: "/images/project-2.svg",
    isInternal: false,
    role: "Mobile Developer",
    scope: "Mobile monitoring for social channels, issue visibility, and quick reporting.",
    visuals: [
      { title: "Monitoring feed", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Issue summary", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Analytics snapshot", imageUrl: "https://www.dummyimg.in/placeholder" },
    ],
    evidencePoints: [
      {
        title: "Social watch",
        summary: "Monitoring flow for public-facing online activity and mentions.",
      },
      {
        title: "Issue visibility",
        summary: "Fast read on emerging topics that need follow-up.",
      },
      {
        title: "Light analytics",
        summary: "Quick mobile summaries for decision-making on the go.",
      },
    ],
  },
  {
    slug: "campus-services-app",
    title: "Campus Services App",
    company: "PT. Bank Rakyat Indonesia / Sagara Technology",
    description:
      "Contributed to a campus services app connected to the BRI ecosystem, with work around non-academic modules such as rental, library access, and crowdfunding inside one mobile experience.",
    technologies: [
      "campus services",
      "library module",
      "crowdfunding flow",
      "bank integration",
    ],
    imageUrl: "/images/project-3.svg",
    isInternal: true,
    role: "Mobile Developer",
    scope: "Service modules, transaction-connected flows, and release support inside one campus app.",
    visuals: [
      { title: "Rental module", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Library access", imageUrl: "https://www.dummyimg.in/placeholder" },
      { title: "Crowdfunding flow", imageUrl: "https://www.dummyimg.in/placeholder" },
    ],
    evidencePoints: [
      {
        title: "Rental module",
        summary: "Availability, booking logic, and service flow handling.",
      },
      {
        title: "Library access",
        summary: "Catalog and borrowing interactions inside the same app surface.",
      },
      {
        title: "Crowdfunding",
        summary: "Funding flow connected to the wider bank ecosystem.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
