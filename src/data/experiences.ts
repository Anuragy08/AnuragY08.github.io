export type Experience = {
  slug: string;
  organization: string;
  project: string;
  period: string;
  position: string;
  role: string;
  workArea: string;
  location: string;
  challenge: string;
  tasks: string[];
  value: string;
  accent: string;
};

export const experiences: Experience[] = [
  {
    slug: "national-health-authority",
    organization: "National Health Authority",
    project: "Healthcare Analytics and BI Reporting",
    period: "2025 - Present",
    position: "Senior Consultant",
    role: "Senior data analytics and BI consultant",
    workArea: "Healthcare data analytics, business intelligence and reporting",
    location: "New Delhi, India",
    challenge: "Large, multi-source healthcare datasets required reliable extraction, validation and stakeholder-ready monitoring.",
    tasks: [
      "Developed complex SQL queries on Amazon Redshift for data extraction and analysis.",
      "Built interactive Power BI dashboards using DAX and business KPIs.",
      "Performed data validation, reconciliation and root-cause analysis across multiple sources.",
      "Automated reporting and supported stakeholders with accurate analytical insights.",
    ],
    value: "Improved visibility of key indicators and enabled faster, evidence-based stakeholder review through reliable dashboards and automated reporting.",
    accent: "blue",
  },
  {
    slug: "uidai",
    organization: "Unique Identification Authority of India",
    project: "Aadhaar Authentication and Service Delivery Analytics",
    period: "2023 - 2025",
    position: "Senior Analyst",
    role: "Data analyst and Power BI developer",
    workArea: "Digital identity analytics, KPI monitoring and dashboard development",
    location: "India",
    challenge: "High-volume Aadhaar transaction and service-delivery data required trend monitoring, anomaly identification and clear performance reporting.",
    tasks: [
      "Developed and managed complex MySQL queries for extraction, transformation and reporting.",
      "Analysed large datasets to identify authentication trends, anomalies, usage patterns and performance indicators.",
      "Designed Power BI dashboards for authentication and service-delivery metrics.",
      "Communicated findings to technical and non-technical stakeholders.",
    ],
    value: "Provided actionable insights that supported operational monitoring and improved understanding of transaction and service-delivery performance.",
    accent: "violet",
  },
  {
    slug: "easyrewardz",
    organization: "Easyrewardz Software Services Pvt. Ltd.",
    project: "Client Campaign Analytics and Loyalty Reporting",
    period: "2022 - 2023",
    position: "Data Analyst",
    role: "Campaign data analyst",
    workArea: "Campaign analytics, customer loyalty reporting and data solutions",
    location: "India",
    challenge: "Client teams needed timely campaign-performance data and tailored analytical outputs from operational databases.",
    tasks: [
      "Extracted data continuously to meet client requirements and track campaign performance.",
      "Compiled monthly campaign reports.",
      "Performed initial data cleaning and executed database queries.",
      "Delivered tailored data solutions based on client needs.",
    ],
    value: "Enabled regular campaign tracking and supported client decision-making with cleaner data and targeted analytical outputs.",
    accent: "cyan",
  },
  {
    slug: "ministry-of-corporate-affairs",
    organization: "Ministry of Corporate Affairs",
    project: "MCA Portal, Database and Infrastructure Support",
    period: "2021 - 2022",
    position: "IT Consultant",
    role: "IT and data-management consultant",
    workArea: "E-governance portals, database maintenance, migration and infrastructure support",
    location: "India",
    challenge: "Government portals required dependable database updates, migration support, documentation and infrastructure security before deployment.",
    tasks: [
      "Maintained MCA portals and updated databases regularly.",
      "Managed data updates and migration using Python.",
      "Created technical documentation for IT processes.",
      "Maintained servers and applied security patches.",
      "Validated, cleaned and extracted data to preserve flow and integrity.",
    ],
    value: "Supported reliable portal operations, improved data integrity and strengthened deployment readiness through maintenance and security activities.",
    accent: "amber",
  },
  {
    slug: "digismart",
    organization: "Digismart Digital Media Pvt. Ltd.",
    project: "Digital Campaign Performance Analytics",
    period: "2017 - 2021",
    position: "Associate",
    role: "Campaign analytics associate",
    workArea: "Digital campaign analytics, performance optimization and reporting",
    location: "India",
    challenge: "Campaign teams needed consistent performance tracking and data-driven optimization across client activities.",
    tasks: [
      "Extracted meaningful insights from raw campaign data.",
      "Prepared Excel trackers and performed detailed campaign optimizations.",
      "Developed data-driven policies and strategies.",
      "Collaborated with business and technical teams on operational implementation.",
    ],
    value: "Improved campaign monitoring and supported performance optimization through structured reporting and data-led recommendations.",
    accent: "green",
  },
];
