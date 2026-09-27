export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  objectives: string[];
  accent: string;
  github?: string;
  screenshots?: { src: string; alt: string }[];
  documentation?: { label: string; href: string; type: "PDF" | "README" }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "music-playback-patterns",
    title: "Music Playback Patterns",
    category: "Business Intelligence",
    summary: "Power BI analysis of listening behavior, engagement, skip rates, platform usage, artists, tracks, decades, and genres.",
    tools: ["Power BI", "DAX", "Data Visualization"],
    objectives: [
      "Analyze engagement and retention through play duration and skip behavior.",
      "Identify the artists, albums, and tracks that sustain listener engagement.",
      "Compare listening trends by day, time, platform, device, and playback method.",
      "Support stronger content-recommendation strategies with behavioral insights.",
    ],
    accent: "blue",
    github: "https://github.com/Anuragy08/Music_Playback_patterns",
    screenshots: [
      ...Array.from({ length: 11 }, (_, index) => ({ src: `/project-assets/music-playback-patterns/screenshots/SS_${index + 1}.png`, alt: `Music playback dashboard screenshot ${index + 1}` })),
      { src: "/project-assets/music-playback-patterns/screenshots/Measure_Table.png", alt: "Music playback measure table" },
    ],
    documentation: [
      { label: "Streaming Insights report", href: "/project-assets/music-playback-patterns/docs/streaming-insights.pdf", type: "PDF" },
      { label: "Project README", href: "/project-assets/music-playback-patterns/docs/README.md", type: "README" },
    ],
  },
  {
    slug: "play-market-2025",
    title: "Play Market 2025",
    category: "Market Analytics",
    summary: "Interactive Excel and Power BI dashboards exploring downloads, ratings, reviews, categories, engagement, and marketplace performance.",
    tools: ["Power BI", "Excel", "Python", "SQL", "Power Query"],
    objectives: [
      "Analyze app and game download trends.",
      "Evaluate user ratings and review scores.",
      "Compare category-level popularity and performance.",
      "Reveal engagement and feedback patterns through interactive dashboards.",
    ],
    accent: "violet",
    github: "https://github.com/Anuragy08/Play_Market_2025",
    screenshots: [
      { src: "/project-assets/play-market-2025/screenshots/Landing_Page.png", alt: "Play Market dashboard landing page" },
      { src: "/project-assets/play-market-2025/screenshots/Overall_Market_Overview.png", alt: "Play Market overall market overview" },
      { src: "/project-assets/play-market-2025/screenshots/app-performance-downloads.png", alt: "Play Market app performance and downloads" },
      { src: "/project-assets/play-market-2025/screenshots/App_Review_Analysis.png", alt: "Play Market app review analysis" },
      { src: "/project-assets/play-market-2025/screenshots/dynamic-charts.png", alt: "Play Market dynamic charts" },
      { src: "/project-assets/play-market-2025/screenshots/game-insights.png", alt: "Play Market game insights" },
      { src: "/project-assets/play-market-2025/screenshots/top-apps-games.png", alt: "Play Market top apps and games" },
      { src: "/project-assets/play-market-2025/screenshots/top-apps-games-comparison.png", alt: "Play Market top apps and games comparison" },
      { src: "/project-assets/play-market-2025/screenshots/Top_Categories.png", alt: "Play Market top categories" },
      { src: "/project-assets/play-market-2025/screenshots/user-review-analysis.png", alt: "Play Market user review analysis" },
    ],
    documentation: [
      { label: "Play Market 2025 report", href: "/project-assets/play-market-2025/docs/play-market-2025.pdf", type: "PDF" },
      { label: "Project README", href: "/project-assets/play-market-2025/docs/README.md", type: "README" },
    ],
  },
  {
    slug: "real-estate-market-trends",
    title: "Real Estate Market Trends: 2001–2022",
    category: "End-to-End Analytics",
    summary: "An automated analytics pipeline and Power BI solution for long-term real-estate sales trends and granular property insights.",
    tools: ["Power BI", "Python", "MySQL", "ETL", "Power Query"],
    objectives: [
      "Clean and transform raw property data through an automated ETL pipeline.",
      "Build interactive dashboards for market and property-level analysis.",
      "Use drill-through pages to support granular investigation.",
      "Document the complete flow from source data to stakeholder-ready reporting.",
    ],
    accent: "cyan",
    github: "https://github.com/Anuragy08/Real_Estate_Market_Trends-2001-2022-",
    screenshots: [
      { src: "/project-assets/real-estate-market-trends/screenshots/overview.jpg", alt: "Real estate market overview dashboard" },
      { src: "/project-assets/real-estate-market-trends/screenshots/property-town-stats.jpg", alt: "Real estate property town statistics" },
      { src: "/project-assets/real-estate-market-trends/screenshots/residential-property-stats.jpg", alt: "Residential property statistics" },
      { src: "/project-assets/real-estate-market-trends/screenshots/sales-analysis.jpg", alt: "Real estate sales analysis" },
      { src: "/project-assets/real-estate-market-trends/screenshots/property-details.jpg", alt: "Real estate property details" },
      { src: "/project-assets/real-estate-market-trends/screenshots/remarks-insights.jpg", alt: "Real estate remarks and insights" },
      { src: "/project-assets/real-estate-market-trends/screenshots/data-quality.jpg", alt: "Real estate data quality dashboard" },
    ],
    documentation: [
      { label: "Property Market Trends report", href: "/project-assets/real-estate-market-trends/docs/property-market-trends-2001-2022.pdf", type: "PDF" },
      { label: "Project README", href: "/project-assets/real-estate-market-trends/docs/README.md", type: "README" },
    ],
  },
  {
    slug: "smart-retail-database",
    title: "Smart Retail Database",
    category: "Advanced SQL",
    summary: "MySQL-based retail analysis covering customer segmentation, sales trends, product performance, stores, inventory, and workforce efficiency.",
    tools: ["MySQL", "CTEs", "Joins", "Aggregations", "RFM"],
    objectives: [
      "Segment customers using RFM analysis.",
      "Identify sales trends, product performance, and revenue drivers.",
      "Evaluate staff and store efficiency.",
      "Demonstrate beginner, intermediate, and advanced SQL techniques.",
    ],
    accent: "green",
    github: "https://github.com/Anuragy08/Smart-Retail-Database",
    screenshots: [
      { src: "/project-assets/smart-retail-database/screenshots/erd-image.png", alt: "Smart Retail Database entity relationship diagram" },
    ],
    documentation: [
      { label: "Database Insights report", href: "/project-assets/smart-retail-database/docs/database-insights.pdf", type: "PDF" },
    ],
  },
  {
    slug: "loan-approval-prediction",
    title: "Loan Approval Prediction",
    category: "Machine Learning",
    summary: "A logistic-regression classification model for predicting loan approval outcomes.",
    tools: ["Logistic Regression", "Data Preprocessing", "Feature Scaling", "Model Evaluation"],
    objectives: [
      "Prepare and clean applicant data for modeling.",
      "Scale relevant model features.",
      "Train a classification model for loan-approval prediction.",
      "Evaluate predictive performance using suitable classification measures.",
    ],
    accent: "amber",
  },
  {
    slug: "real-estate-price-prediction",
    title: "Real Estate Price Prediction",
    category: "Machine Learning",
    summary: "A K-Nearest Neighbours model for predicting house prices from cleaned and engineered real-estate features.",
    tools: ["KNN", "Feature Engineering", "Data Cleaning", "Model Evaluation"],
    objectives: [
      "Clean and prepare real-estate data for predictive modeling.",
      "Engineer relevant features for price prediction.",
      "Apply K-Nearest Neighbours to estimate house prices.",
      "Evaluate the resulting regression model.",
    ],
    accent: "rose",
  },
  {
    slug: "claims-payment-analysis",
    title: "Claims & Payment Analysis",
    category: "SQL Analytics",
    summary: "Complex SQL analysis of customer, claim, and payment data to reveal business trends, insights, and key performance metrics.",
    tools: ["SQL", "Data Analysis", "Business Metrics", "Trend Analysis"],
    objectives: [
      "Analyze customer and claims data with complex SQL queries.",
      "Extract important claim and payment metrics.",
      "Identify meaningful business trends and patterns.",
      "Translate query results into decision-ready insights.",
    ],
    accent: "indigo",
  },
];
