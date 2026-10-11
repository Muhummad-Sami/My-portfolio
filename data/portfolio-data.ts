export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Development" | "AI & Machine Learning" | "Data Analysis" | "Systems & Networking";
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  contribution: string;
  githubUrl?: string;
  liveUrl?: string;
  liveBackendUrl?: string;
  embedIframeUrl?: string;
  linkedinPostUrl?: string;
  caseStudy?: {
    overview: string;
    architecture: string;
    challenges: string[];
    outcomes: string[];
  };
  metrics?: { label: string; value: string }[];
  featured: boolean;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Professional" | "Coordination";
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  status: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Sami Abid",
    shortName: "Sami Abid",
    headline: "Software Engineering Student · Full-Stack Web Developer · Aspiring AI Engineer",
    location: "Lahore, Pakistan",
    email: "samirao9372@gmail.com",
    phone: "0306-7591228",
    github: "https://github.com/Muhummad-Sami",
    githubUsername: "Muhummad-Sami",
    linkedin: "https://linkedin.com/in/rao-sami-344a11333",
    avatarUrl: "https://avatars.githubusercontent.com/u/224607375?v=4",
    bio: [
      "I am a Software Engineering undergraduate at The Superior University Lahore with a rigorous foundation in Computer Science fundamentals, Object-Oriented Programming, and Data Structures & Algorithms.",
      "My practical work spans building production-tested full-stack web applications (Next.js, React, Node.js, Express, MongoDB, MySQL) and developing data analysis pipelines and dashboards (Python, Pandas, Power BI, SQL).",
      "I have completed two remote internships—building scalable multi-tier web platforms at TEYZIX CORE and conducting exploratory data analysis and reporting at Developer Hub. Currently, I am expanding my toolkit into applied AI/ML systems and production-grade software engineering."
    ],
    availability: "Available for Software Engineering & Data Internships, Remote Opportunities & Collaborative Technical Projects",
    statusNote: "BS Software Engineering (2024 – 2028 Expected) | The Superior University, Lahore",
  },

  skills: [
    {
      title: "Programming Languages",
      description: "Core algorithmic thinking, systems programming, and modern scripting languages.",
      skills: [
        { name: "Python", context: "EDA, Pandas, NumPy, Scikit-Learn, FastAPI" },
        { name: "C++", context: "Data Structures, OOP, Memory & Pointers, File I/O" },
        { name: "Java", context: "Core OOP and Software Architecture" },
        { name: "JavaScript (ES6+)", context: "Asynchronous workflows, Modern Web standards" },
        { name: "TypeScript", context: "Strict static typing, Interface design, Generics" },
        { name: "SQL", context: "Complex JOINs, CTEs, Window Functions, Indexing" }
      ]
    },
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, resilient client-server web applications.",
      skills: [
        { name: "Next.js 15 & 14", context: "App Router, Server Components, Route Handlers" },
        { name: "React.js", context: "Custom Hooks, Context API, Virtual DOM" },
        { name: "Node.js & Express", context: "RESTful API design, Middleware, Rate Limiting" },
        { name: "Tailwind CSS", context: "Utility-first design tokens, Responsive styling" },
        { name: "HTML5 & Modern CSS3", context: "Semantic architecture, Responsive layouts" },
        { name: "Zustand", context: "Predictable client-side state management" },
        { name: "JWT Authentication", context: "Secure token generation, validation & cookies" },
        { name: "Bootstrap 5", context: "Rapid component prototyping" }
      ]
    },
    {
      title: "Databases & Data Storage",
      description: "Data modeling, schema normalization, and querying across relational and NoSQL paradigms.",
      skills: [
        { name: "MongoDB", context: "Document schema modeling, Mongoose ODM, Aggregations" },
        { name: "MySQL", context: "Schema normalization (3NF), Stored Procedures, Triggers" },
        { name: "Supabase", context: "PostgreSQL BaaS, Row-Level Security, Auth" },
        { name: "File Persistence", context: "Binary/text file parsing and state serialization in C++" }
      ]
    },
    {
      title: "Data Analysis & Business Intelligence",
      description: "Extracting actionable insights, cleaning raw datasets, and crafting executive dashboards.",
      skills: [
        { name: "Pandas & NumPy", context: "Vectorized data munging, indexing, transformation" },
        { name: "Matplotlib & Seaborn", context: "Statistical distributions, correlation matrices" },
        { name: "Power BI", context: "Interactive dashboards, DAX metrics, data modeling" },
        { name: "SQL Analytics", context: "CTEs, cohort segmentation, sales aggregations" },
        { name: "Microsoft Excel & Power Query", context: "Pivot tables, slicers, automated ETL" },
        { name: "Exploratory Data Analysis (EDA)", context: "Missing value imputation, outlier detection" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Applied machine learning models and LLM-assisted workflows.",
      skills: [
        { name: "Scikit-Learn", context: "Random Forest Regression, train-test splits, R² evaluation" },
        { name: "FastAPI", context: "Lightweight, high-speed asynchronous model serving" },
        { name: "Google Gemini API", context: "Prompt engineering, spam detection, lead scoring" },
        { name: "AI-Assisted Tools", context: "Productivity acceleration and code optimization" }
      ]
    },
    {
      title: "Systems, Networking & DevOps",
      description: "Low-level system fundamentals, computer networking topologies, and cloud deployment.",
      skills: [
        { name: "Git & GitHub", context: "Branching strategies, Pull Requests, Version control" },
        { name: "Cisco Packet Tracer", context: "VLANs, Inter-VLAN routing, OSPF, DHCP, SSH, Port Security, STP" },
        { name: "Data Structures & Algorithms", context: "Linked Lists, Priority Queues, BSTs, Stacks" },
        { name: "Vercel & Railway", context: "Continuous deployment and environment configurations" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: "Full-Stack Web Development Intern",
      company: "TEYZIX CORE",
      location: "Remote",
      period: "Jul 2026 – Aug 2026",
      type: "Internship",
      highlights: [
        "Architected and deployed four complete full-stack web platforms: Smart Community Marketplace, E-Commerce Platform (Aesthete Store), DriveLux Car Rental, and Vendor Quotation System.",
        "Engineered RESTful API backends with Node.js and Express, implementing JWT session authentication, route guards, and payload validation.",
        "Integrated MongoDB and MySQL databases, designing normalized schemas and efficient queries for product catalogs, bookings, and customer profiles.",
        "Utilized Git/GitHub version control workflows across teams using React, Next.js, Vite, TypeScript, Tailwind CSS, and Bootstrap, deploying production builds to Vercel and Railway."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS", "Vercel", "Railway"]
    },
    {
      role: "Data Analytics Intern",
      company: "Developer Hub",
      location: "Remote (6-Week Intensive Program)",
      period: "Jun 2026 – Jul 2026",
      type: "Internship",
      highlights: [
        "Executed end-to-end data pipelines: performed data cleaning, anomaly detection, exploratory data analysis, and statistical evaluation across multiple enterprise-scale datasets.",
        "Leveraged Python (Pandas, NumPy), Excel Power Query, and SQL to transform unstructured logs into structured analytics tables.",
        "Authored interactive data visualizations and executive dashboards using Matplotlib, Seaborn, and Power BI to communicate key performance indicators.",
        "Automated repetitive ETL procedures to reduce manual reporting latency and synthesized findings into analytical briefs."
      ],
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Power Query", "Matplotlib", "Seaborn"]
    },
    {
      role: "Dispatcher",
      company: "WebEx",
      location: "Lahore, Pakistan",
      period: "Dec 2025 – Feb 2026",
      type: "Coordination",
      highlights: [
        "Coordinated real-time operations and dispatch communication in high-pressure, time-sensitive logistical scenarios.",
        "Developed sharp operational decision-making, rapid prioritization, and reliable crisis communication skills under strict SLAs.",
        "Collaborated seamlessly across cross-functional field teams to optimize turnaround times."
      ],
      technologies: ["Real-time Communication", "Incident Prioritization", "Logistics Operations"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      institution: "The Superior University, Lahore",
      period: "2024 – 2028 (Expected)",
      status: "In Progress",
      details: "Core coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Database Systems, Computer Networks, Discrete Mathematics, Software Engineering Principles."
    },
    {
      degree: "Intermediate (FSc Pre-Engineering)",
      institution: "Punjab Group of Colleges",
      period: "Completed",
      grade: "921 / 1100",
      status: "Completed",
      details: "Rigorous foundation in advanced Mathematics, Physics, and analytical reasoning."
    },
    {
      degree: "Matriculation (Science)",
      institution: "The Islamia Public Science School",
      period: "Completed",
      grade: "1061 / 1100",
      status: "Completed",
      details: "Distinguished academic record with emphasis on foundational Sciences and Mathematics."
    }
  ] as Education[],

  certifications: [
    {
      name: "Certified Data Analyst Foundations Course",
      issuer: "Data Science Academy, School of AI",
      year: "2026",
      credentialNote: "Covers data cleaning, exploratory analysis, statistical evaluation, and data-driven storytelling."
    },
    {
      name: "Graphics Designing",
      issuer: "KHREWS",
      year: "2025",
      credentialNote: "Visual composition, typography, color theory, and UI asset preparation."
    },
    {
      name: "Website Development",
      issuer: "SET",
      year: "2024",
      credentialNote: "Comprehensive fundamentals of frontend and client-side web architecture."
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2024",
      credentialNote: "Network models (OSI, TCP/IP), subnetting, packet routing, switching, and protocol inspection."
    }
  ] as Certification[],

  projects: [
    {
      id: "ai-crm-agent",
      slug: "ai-crm-agent",
      title: "AI-Powered Lead Qualification & CRM Automation",
      subtitle: "Intelligent Lead Triage, Spam Detection & Automated Persona Responses",
      category: "AI & Machine Learning",
      year: "2026",
      featured: true,
      description: "An automated CRM intelligence engine that inspects incoming inbound leads, filters spam, computes a qualification score based on business rules, and crafts tailored email responses using LLM orchestration.",
      problem: "Sales pipelines suffer from overwhelming spam submissions and slow response latency for high-value prospects, degrading conversion rates.",
      solution: "Engineered a full-stack system utilizing Next.js for the lead dashboard, Supabase for persistence and realtime updates, and a FastAPI service orchestrating the Google Gemini API to analyze lead sentiment, extract requirements, and draft context-aware follow-ups.",
      keyFeatures: [
        "Automated spam classification and intent detection using Google Gemini API",
        "Deterministic lead qualification scoring based on extracted budget, timeline, and industry tags",
        "Autonomous personalized email follow-up generation for sales reps",
        "Live triage dashboard with real-time lead updates via Supabase",
        "FastAPI asynchronous backend ensuring low-latency inference cycles"
      ],
      techStack: ["Next.js", "Supabase", "FastAPI", "Gemini API", "TypeScript", "Python"],
      contribution: "Designed the full architecture, connected the FastAPI inference microservice to the Next.js frontend, implemented Supabase database schema and RLS, and tuned Gemini prompts for structured JSON response parsing.",
      githubUrl: "https://github.com/Muhummad-Sami/AI_CRM_AGENT",
      liveUrl: "https://frontend-six-rose-93.vercel.app",
      liveBackendUrl: "https://backend-sand-seven-22.vercel.app",
      metrics: [
        { label: "Pipeline", value: "Real-time AI Triage" },
        { label: "Backend", value: "FastAPI + Gemini" }
      ],
      caseStudy: {
        overview: "Modern inbound funnels require immediate qualification. This project automates the manual triage phase using large language models integrated into a streamlined sales workspace.",
        architecture: "Client UI built with Next.js and TypeScript communicating via REST with a FastAPI microservice. The service interfaces with Google Gemini API using structured system instructions, saving records to Supabase PostgreSQL.",
        challenges: [
          "Ensuring deterministic JSON responses from the LLM for reliable database insertion.",
          "Preventing hallucinations when drafting commercial follow-up correspondence."
        ],
        outcomes: [
          "Engineered schema-constrained prompting ensuring reliable automated triage.",
          "Successfully deployed web dashboard on Vercel with zero cold-start database connection overhead via Supabase."
        ]
      }
    },
    {
      id: "smart-community-platform",
      slug: "smart-community-platform",
      title: "Smart Community Marketplace",
      subtitle: "Hyperlocal Community Commerce & Resource Sharing Platform",
      category: "Full-Stack Development",
      year: "2026",
      featured: true,
      description: "A centralized community portal enabling residents to list items for sale, exchange neighborhood services, manage personal listings, and browse verified offerings within localized categories.",
      problem: "Neighborhoods lack dedicated, reliable platforms for trading goods and local equipment without getting buried in chaotic social media feeds.",
      solution: "Built a responsive web application using Next.js, Tailwind CSS, and MongoDB with categorized item filtering, user listing dashboards, search, and intuitive community browsing.",
      keyFeatures: [
        "Structured multi-category listings with photo uploads, pricing, and condition tags",
        "User account dashboard to edit, archive, and manage active community posts",
        "Responsive, mobile-optimized search and category filter system",
        "Direct seller contact flow and neighborhood noticeboard updates",
        "Optimized MongoDB queries with indexing on category and timestamp"
      ],
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "REST APIs"],
      contribution: "Built during internship at TEYZIX CORE: designed the full UI layout with Tailwind CSS, created Next.js server endpoints for MongoDB document management, and implemented responsive state management.",
      githubUrl: "https://github.com/Muhummad-Sami/Smart-Community-Platform",
      liveUrl: "https://smart-community-platform-six.vercel.app",
      metrics: [
        { label: "Stack", value: "Next.js + MongoDB" },
        { label: "Deployment", value: "Vercel" }
      ],
      caseStudy: {
        overview: "Smart Community Marketplace addresses localized suburban commerce, reducing barriers for neighbors to borrow, donate, or sell items securely.",
        architecture: "Next.js App Router providing Server-Side Rendering for fast discovery, with MongoDB Atlas providing flexible schema storage for diverse listing categories.",
        challenges: [
          "Designing intuitive mobile browsing for diverse demographics.",
          "Maintaining snappy performance across image-heavy listings."
        ],
        outcomes: [
          "Developed high-accessibility UI with sub-second page loads on Vercel.",
          "Created modular components reusable across other internal internship projects."
        ]
      }
    },
    {
      id: "drivelux-car-rental",
      slug: "drivelux-car-rental",
      title: "DriveLux — Car Rental Platform",
      subtitle: "Production Booking Engine with Fraud Prevention & DNS Validation",
      category: "Full-Stack Development",
      year: "2026",
      featured: true,
      description: "A full-featured vehicle booking and reservation management platform featuring RESTful APIs, administrative vehicle control, automated email verification, and real-time DNS-based fake-email detection.",
      problem: "Vehicle rental businesses suffer from fraudulent bookings initiated by disposable email domains and manual administrative tracking errors.",
      solution: "Engineered an end-to-end platform featuring a customer booking workflow, administrative dashboard for fleet management, and automated verification checks including live MX/DNS validation to block disposable email accounts.",
      keyFeatures: [
        "Vehicle catalog browsing with transmission, fuel type, and price filters",
        "Date-range booking reservation calculator and checkout flow",
        "Automated email verification pipeline with DNS/MX lookup to block disposable emails",
        "Secure administrator portal to update fleet status, prices, and booking confirmations",
        "Custom Express.js REST API with comprehensive error handling and logging"
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DNS Validation"],
      contribution: "Built during internship at TEYZIX CORE: programmed the entire backend Express API, integrated MongoDB vehicle collections, built DNS validation middleware, and coded the React frontend UI.",
      githubUrl: "https://github.com/Muhummad-Sami/intership_project",
      liveUrl: "https://drivelux-liard.vercel.app",
      metrics: [
        { label: "Validation", value: "Live DNS/MX Lookup" },
        { label: "Fleet Mgmt", value: "Full CRUD Admin" }
      ],
      caseStudy: {
        overview: "DriveLux was developed to simulate commercial vehicle rental logistics with an emphasis on transaction integrity and anti-abuse safeguards.",
        architecture: "React.js single page application communicating with an Express.js backend on Node.js, storing fleet and booking records in MongoDB.",
        challenges: [
          "Preventing bot spam and burner email signups from depleting rental vehicle availability slots.",
          "Managing stateful date overlaps for car availability without race conditions."
        ],
        outcomes: [
          "Successfully integrated DNS record resolution to filter out fraudulent domain extensions.",
          "Deployed responsive client application to Vercel with seamless user interaction."
        ]
      }
    },
    {
      id: "ecommerce-web-application",
      slug: "ecommerce-web-application",
      title: "E-Commerce Web Application (Aesthete Store)",
      subtitle: "Next.js 15 Full-Stack Commerce with Zustand State & Admin Panel",
      category: "Full-Stack Development",
      year: "2026",
      featured: true,
      description: "A modern e-commerce storefront built on Next.js 15 and TypeScript, featuring JWT authentication, persistent client cart powered by Zustand, and a complete administrative CRUD dashboard via RESTful endpoints.",
      problem: "E-commerce stores require smooth shopping cart interactions without lag, combined with a secure back-office for inventory updates.",
      solution: "Implemented an elegant storefront utilizing Next.js 15 Server Components for product indexing, Zustand for client cart synchronization, and an admin management suite for creating, modifying, and tracking products in MongoDB.",
      keyFeatures: [
        "JWT-based user authentication and protected checkout routes",
        "Persistent client-side shopping cart with Zustand and local state sync",
        "Comprehensive administrative CRUD dashboard for inventory and product management",
        "Dynamic search, category filters, and responsive product detail pages",
        "Fully typed TypeScript codebase minimizing runtime failures"
      ],
      techStack: ["Next.js 15", "TypeScript", "MongoDB", "JWT", "Zustand", "Tailwind CSS"],
      contribution: "Built during internship at TEYZIX CORE: architected the Next.js 15 App Router structure, authored typed REST endpoints, implemented Zustand store logic, and managed Vercel deployment.",
      githubUrl: "https://github.com/Muhummad-Sami/Ecommerce",
      liveUrl: "https://aesthete-store.vercel.app",
      metrics: [
        { label: "Framework", value: "Next.js 15 (App Router)" },
        { label: "State", value: "Zustand Reactive Store" }
      ],
      caseStudy: {
        overview: "Aesthete Store was constructed to demonstrate enterprise-standard frontend architectural practices using the latest Next.js 15 features.",
        architecture: "Hybrid rendering model leveraging React Server Components for catalog pages and client islands for cart management and interactive forms.",
        challenges: [
          "Managing hydration consistency between server-rendered product cards and localStorage-persisted cart state.",
          "Securing admin endpoints against unauthorized payload tampering."
        ],
        outcomes: [
          "Achieved seamless cart updates with zero layout shift.",
          "Implemented strict JWT middleware guarding all administrative write actions."
        ]
      }
    },
    {
      id: "vendor-quotation-system",
      slug: "vendor-quotation-system",
      title: "Vendor Quotation Management System",
      subtitle: "B2B Procurement System with Quote Comparison & Analytics",
      category: "Full-Stack Development",
      year: "2026",
      featured: false,
      description: "A procurement portal designed to streamline vendor bidding, quotation creation, multi-supplier price comparison, and spend analysis deployed as a split monorepo architecture.",
      problem: "Procurement teams waste hours compiling bids across email threads, causing delayed purchase orders and inconsistent cost audits.",
      solution: "Built a centralized system where buyers invite vendors, upload structured bid requests, compare side-by-side quote matrices, and visualize cost differentials on an interactive analytics dashboard.",
      keyFeatures: [
        "Supplier portal for submitting itemized quotes against active procurement RFPs",
        "Side-by-side comparison matrix evaluating unit costs, delivery timelines, and tax terms",
        "Executive dashboard displaying aggregate spend, active negotiations, and vendor metrics",
        "Split monorepo architecture separating React frontend from Node.js Express API",
        "Role-based access control protecting confidential quotation submissions"
      ],
      techStack: ["React (Vite)", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
      contribution: "Built during internship at TEYZIX CORE: configured monorepo structure, created MongoDB models for RFPs and quotes, and designed the procurement comparison table UI.",
      githubUrl: "https://github.com/Muhummad-Sami/VenderQuotaionSystem",
      liveUrl: "https://vender-quotaion-system-1iu2.vercel.app",
      metrics: [
        { label: "Architecture", value: "Split Monorepo" },
        { label: "Feature", value: "Multi-Bid Comparison" }
      ]
    },
    {
      id: "mental-health-score-predictor",
      slug: "mental-health-score-predictor",
      title: "Mental Health Score Predictor",
      subtitle: "Machine Learning Regression Model with FastAPI Real-Time Inference",
      category: "AI & Machine Learning",
      year: "2026",
      featured: true,
      description: "An applied machine learning system that analyzes student academic stress, sleep duration, physical activity, and social indicators to predict mental wellness scores, deployed with FastAPI for real-time inference.",
      problem: "Identifying students at risk of severe academic burnout often happens too late due to a lack of quantitative, early screening tools.",
      solution: "Developed an end-to-end ML pipeline: performed exploratory data analysis, handled feature collinearity, trained a Random Forest Regressor achieving ~0.90 R², and wrapped the trained model in a containerized FastAPI endpoint.",
      keyFeatures: [
        "Feature engineering pipeline handling categorical encoding and numerical normalization",
        "Random Forest Regressor achieving approximately ~0.90 R² coefficient of determination",
        "FastAPI REST endpoint receiving JSON user survey parameters and returning predicted score instantly",
        "Interactive web testbench enabling users to simulate variable lifestyle factors",
        "Comprehensive model evaluation with residual analysis and mean absolute error metrics"
      ],
      techStack: ["Python", "Scikit-Learn", "FastAPI", "Pandas", "NumPy", "Jupyter"],
      contribution: "Performed complete data preprocessing in Jupyter, engineered features, trained and tuned the Random Forest model, and created the FastAPI inference wrapper.",
      githubUrl: "https://github.com/Muhummad-Sami/Student_Mental_Health_Prediction_Model",
      liveUrl: "https://student-mental-health-prediction-mo.vercel.app",
      metrics: [
        { label: "Accuracy", value: "~0.90 R² Score" },
        { label: "Serving", value: "FastAPI REST Engine" }
      ],
      caseStudy: {
        overview: "A predictive analytics initiative bridging machine learning with student health intervention, turning survey metrics into actionable early warnings.",
        architecture: "Trained scikit-learn pipeline serialized via joblib and served through an asynchronous FastAPI application running on Vercel/cloud server.",
        challenges: [
          "Balancing bias-variance tradeoff to prevent overfitting on survey demographics.",
          "Exposing machine learning inference over a standard HTTP web interface."
        ],
        outcomes: [
          "Achieved ~0.90 R² score with consistent cross-validation accuracy.",
          "Built a live web frontend allowing instant interactive scenario testing."
        ]
      }
    },
    {
      id: "sql-ecommerce-sales-analysis",
      slug: "sql-ecommerce-sales-analysis",
      title: "SQL E-Commerce Sales & Inventory Analytics",
      subtitle: "Advanced Relational Queries, Customer Cohorts & KPI Modeling",
      category: "Data Analysis",
      year: "2026",
      featured: false,
      description: "In-depth analytical investigation of e-commerce transactional data using advanced MySQL techniques, including Common Table Expressions (CTEs), window functions, subqueries, and multi-table JOINs.",
      problem: "Raw transactional databases contain millions of rows but offer little visibility into repeat customer lifetime value, inventory bottlenecks, or regional sales velocity without optimized analytical queries.",
      solution: "Formulated a comprehensive suite of SQL analysis queries computing key business metrics: customer retention rates, cohort analysis, top-grossing product categories, and inventory turnover ratios.",
      keyFeatures: [
        "Customer RFM segmentation (Recency, Frequency, Monetary) using SQL CTEs and ranking functions",
        "Running revenue totals and moving averages computed with SQL Window Functions (OVER, PARTITION BY)",
        "Inventory depletion warnings and supplier restock forecasting",
        "Optimized query performance using relational indexes on composite foreign keys"
      ],
      techStack: ["MySQL", "Advanced SQL", "CTEs", "Window Functions", "Data Modeling"],
      contribution: "Designed the analytical schema, authored complex SQL scripts for cohort tracking, and documented queries for business KPI generation.",
      embedIframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7486534218869764097?compact=1",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7486534218869764097/",
      metrics: [
        { label: "Technique", value: "CTEs & Window Functions" },
        { label: "Domain", value: "Retail & Inventory" }
      ]
    },
    {
      id: "aviation-database-system",
      slug: "aviation-database-system",
      title: "Aviation Operations Database System",
      subtitle: "Normalized Relational Architecture, Stored Procedures & Triggers",
      category: "Data Analysis",
      year: "2026",
      featured: false,
      description: "A production-grade relational database architecture for managing commercial airline operations, tracking flights, aircraft rosters, passenger itineraries, seat reservations, and payment processing.",
      problem: "Aviation logistics require strict data integrity, preventing double-booked seats and ensuring transaction atomicity across flight schedules and crew rosters.",
      solution: "Designed a 3NF normalized relational schema with foreign key constraints, automated validation triggers, stored procedures for automated seat reservation booking, and views for manifest reporting.",
      keyFeatures: [
        "Third Normal Form (3NF) schema eliminating data redundancy across flights, airports, and passengers",
        "Automated database triggers preventing double-booking of assigned seats",
        "Stored procedures handling atomic reservation and ticket payment workflows",
        "Complex multi-table JOIN queries generating real-time flight manifests and airport gate utilization reports"
      ],
      techStack: ["SQL", "MySQL", "Stored Procedures", "Triggers", "Relational Schema 3NF"],
      contribution: "Designed ER diagram, created DDL scripts, implemented triggers and stored procedures, and tested transaction integrity under concurrent query simulations.",
      githubUrl: "https://github.com/Muhummad-Sami/SQL-1st-Project",
      metrics: [
        { label: "Integrity", value: "3NF Normalization" },
        { label: "Automation", value: "Triggers & Procedures" }
      ]
    },
    {
      id: "mobile-sales-power-bi-dashboard",
      slug: "mobile-sales-power-bi-dashboard",
      title: "Mobile Sales Performance & Market Share Dashboard",
      subtitle: "Interactive Power BI Executive Dashboard & DAX Measures",
      category: "Data Analysis",
      year: "2026",
      featured: true,
      description: "An interactive business intelligence dashboard designed in Power BI to analyze smartphone sales trends, consumer rating distributions, payment channel popularity, and manufacturer market share.",
      problem: "Sales executives struggle to digest tabular sales reports to discern brand momentum, regional underperformance, and margin health.",
      solution: "Engineered a clean Power BI report featuring custom DAX measures, dynamic time-series slicers, cross-filtering visuals, and executive summary KPI cards highlighting total revenue and average transaction values.",
      keyFeatures: [
        "Executive KPI cards tracking Total Sales Volume, Average Transaction Value, and Overall Satisfaction",
        "Manufacturer comparison visual tracking brand revenue vs. unit sales share",
        "Breakdown of customer payment channel preference (credit cards, digital wallets, cash)",
        "Interactive time-intelligence filters exploring quarterly performance and seasonal spikes",
        "Custom DAX calculated columns and measures optimizing reporting responsiveness"
      ],
      techStack: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
      contribution: "Extracted and transformed dataset with Power Query, constructed dimensional data model (star schema), authored DAX expressions, and crafted intuitive dashboard UX.",
      embedIframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7484350953362448384?compact=1",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7484350953362448384/",
      metrics: [
        { label: "Platform", value: "Power BI Desktop" },
        { label: "Analytics", value: "Custom DAX Metrics" }
      ]
    },
    {
      id: "ipl-tournament-analytics-dashboard",
      slug: "ipl-tournament-analytics-dashboard",
      title: "IPL Tournament Performance & Match Analytics",
      subtitle: "Excel Power Query, Dynamic Slicers & KPI Summaries",
      category: "Data Analysis",
      year: "2026",
      featured: false,
      description: "A comprehensive analytical dashboard built in Microsoft Excel examining match outcomes, player strike rates, team head-to-head records, and tournament statistics across tournament seasons.",
      problem: "Multi-year sports datasets are cluttered with inconsistent player names and fragmented match records, requiring rigorous cleaning before analysis.",
      solution: "Utilized Excel Power Query for automated data ingestion and cleaning, built multi-table pivot relationships, and designed an interactive dashboard using connected slicers and dynamic charts.",
      keyFeatures: [
        "Automated ETL pipeline using Power Query to clean and structure raw match statistics",
        "Pivot tables and Pivot charts allowing instant filtering by franchise, season, and venue",
        "Key performance indicator summaries for team win rates, batting averages, and bowling economies",
        "Dynamic slicer controls linking disparate charts to a single unified filter panel"
      ],
      techStack: ["Microsoft Excel", "Power Query", "Pivot Tables", "Data Cleaning", "Data Visualization"],
      contribution: "Cleaned raw cricket data using Power Query, designed the pivot relationships, and produced the final dashboard layout.",
      metrics: [
        { label: "Tool", value: "Excel Power Query" },
        { label: "Features", value: "Dynamic Slicers" }
      ]
    },
    {
      id: "hotel-network-design-cisco",
      slug: "hotel-network-design-cisco",
      title: "Hospitality Enterprise Network Infrastructure",
      subtitle: "Cisco Packet Tracer Architecture with VLAN Segmentation & OSPF",
      category: "Systems & Networking",
      year: "2025",
      featured: false,
      description: "An enterprise-grade network topology designed in Cisco Packet Tracer for a multi-story hotel facility, featuring strict security isolation, VLAN segmentation, dynamic routing, and port security.",
      problem: "Hotels require guest Wi-Fi access while strictly isolating sensitive administrative, financial, and surveillance networks from unauthorized access.",
      solution: "Constructed a multi-layer hierarchical network topology with VLANs for Guests, Management, Surveillance, and Staff, routing traffic via Inter-VLAN routing and OSPF while hardening access with SSH and port security.",
      keyFeatures: [
        "VLAN segmentation isolating Guest networks from Internal Management and Surveillance",
        "Inter-VLAN routing configured with Router-on-a-Stick and Layer 3 switching",
        "Dynamic host configuration via centralized DHCP pools with lease limits",
        "OSPF dynamic routing protocol facilitating fault-tolerant multi-switch communication",
        "Switch hardening via Port Security (MAC-limiting), disabled unused ports, and SSH access"
      ],
      techStack: ["Cisco Packet Tracer", "VLAN", "Inter-VLAN Routing", "OSPF", "DHCP", "SSH", "Port Security"],
      contribution: "Architected network diagram, wrote Cisco IOS CLI commands for switch and router configurations, verified ACL filtering, and validated packet delivery using ping/traceroute simulations.",
      githubUrl: "https://github.com/Muhummad-Sami/ComputerNetworks-Project",
      metrics: [
        { label: "Security", value: "VLAN & Port Security" },
        { label: "Routing", value: "OSPF Dynamic Routing" }
      ]
    },
    {
      id: "hospital-management-system-cpp",
      slug: "hospital-management-system-cpp",
      title: "Hospital Emergency Triage & Patient Management System",
      subtitle: "C++ Data Structures Implementation: Priority Queue, BST, Linked List",
      category: "Systems & Networking",
      year: "2025",
      featured: false,
      description: "A high-performance C++ clinical management software built directly on fundamental data structures, implementing an emergency triage priority queue, binary search tree for patient records, and linked lists.",
      problem: "Emergency triage requires deterministic O(log N) retrieval of critical patients based on medical severity rather than simple first-come-first-served queues.",
      solution: "Implemented custom Data Structures from scratch in C++: a Max-Heap Priority Queue for urgent medical triage, a Binary Search Tree (BST) for patient record indexing by ID, and a Stack for undo operations.",
      keyFeatures: [
        "Max-Heap Priority Queue ordering emergency room patients by medical urgency level",
        "Binary Search Tree (BST) providing logarithmic search, insertion, and traversal of patient records",
        "Linked List implementation for flexible dynamic memory handling of active appointments",
        "Stack structure preserving historical actions for audit log inspection"
      ],
      techStack: ["C++", "Data Structures", "Priority Queue", "BST", "Linked List", "Stack"],
      contribution: "Wrote all algorithmic data structures from scratch in C++, managed memory allocation and deallocation to prevent leaks, and designed the interactive CLI console.",
      githubUrl: "https://github.com/Muhummad-Sami/3rd-Project-CPP",
      metrics: [
        { label: "Core", value: "DSA in Pure C++" },
        { label: "Triage", value: "Max-Heap Priority Queue" }
      ]
    },
    {
      id: "car-rental-system-cpp",
      slug: "car-rental-system-cpp",
      title: "Object-Oriented Car Rental System in C++",
      subtitle: "OOP Principles, Polymorphism & File-Based Data Persistence",
      category: "Systems & Networking",
      year: "2024",
      featured: false,
      description: "A robust console-based rental management application engineered in C++ using comprehensive Object-Oriented Programming (OOP) paradigms and disk-based file handling for persistent records.",
      problem: "Small rental agencies need dependable vehicle scheduling and invoice generation without heavy cloud database overhead.",
      solution: "Developed an OOP architecture with class hierarchies for Vehicles, Customers, and Bookings, incorporating inheritance, polymorphism, and stream file I/O for disk persistence between sessions.",
      keyFeatures: [
        "Strict OOP design featuring encapsulation, inheritance, and polymorphic vehicle rate calculations",
        "Persistent text/binary file handling for loading and updating fleet inventory across sessions",
        "Booking and return workflow with automatic penalty and duration billing calculations",
        "Input validation safeguarding against malformed user inputs and integer overflows"
      ],
      techStack: ["C++", "Object-Oriented Programming", "File I/O", "Polymorphism"],
      contribution: "Designed class architecture, implemented vehicle rate polymorphism, and built file persistence routines in C++.",
      githubUrl: "https://github.com/Muhummad-Sami/2nd-CPP-Project",
      metrics: [
        { label: "Paradigm", value: "Strict OOP & Polymorphism" },
        { label: "Storage", value: "File-Based Persistence" }
      ]
    },
    {
      id: "bill-management-system-cpp",
      slug: "bill-management-system-cpp",
      title: "Retail Billing & Inventory Management System",
      subtitle: "C++ Commercial File Processing, Invoicing & Stock Tracking",
      category: "Systems & Networking",
      year: "2024",
      featured: false,
      description: "A C++ billing and invoice automation system designed for retail merchants to maintain inventory counts, process sales transactions, and generate timestamped customer receipts.",
      problem: "Manual paper billing leads to discrepancies in stock balances and slow transaction processing during peak store hours.",
      solution: "Engineered a streamlined C++ application providing real-time inventory decrementing upon checkout, automatic tax calculations, and structured receipt generation written to disk.",
      keyFeatures: [
        "Itemized invoice generation with item lookups, quantity pricing, and sales tax computation",
        "Stock inventory reconciliation automatically reducing available counts upon transaction completion",
        "Customer transaction ledger saved directly to file storage for end-of-day auditing",
        "Clean terminal interface with formatted tabular output"
      ],
      techStack: ["C++", "File Handling", "Inventory Tracking", "Console UI"],
      contribution: "Developed the transaction math, file logging procedures, and receipt formatting logic.",
      githubUrl: "https://github.com/Muhummad-Sami/1st-CPP-Project",
      metrics: [
        { label: "Core", value: "C++ File Handling" },
        { label: "Utility", value: "Automated Receipts" }
      ]
    }
  ] as Project[]
};
