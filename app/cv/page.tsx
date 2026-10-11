import { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import PrintButton from "@/components/cv/PrintButton";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Muhammad Sami Abid",
  description: "Official Curriculum Vitae of Muhammad Sami Abid, Software Engineering Undergraduate.",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] py-10 px-4 sm:px-6">
      {/* Top action bar */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Portfolio</span>
        </Link>

        <PrintButton />
      </div>

      {/* CV Paper Container */}
      <div className="max-w-4xl mx-auto bg-white text-neutral-900 p-8 sm:p-12 md:p-16 rounded-xl shadow-lg border border-neutral-200 print:shadow-none print:border-none print:p-0">
        {/* Header */}
        <header className="border-b-2 border-neutral-800 pb-5 mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-900 uppercase">
            {PORTFOLIO_DATA.personal.name}
          </h1>
          <p className="text-sm font-semibold text-neutral-700 tracking-wider uppercase mt-1">
            Software Engineering Intern
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2.5 font-sans">
            <span>{PORTFOLIO_DATA.personal.location}</span>
            <span>•</span>
            <span>{PORTFOLIO_DATA.personal.phone}</span>
            <span>•</span>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-neutral-900 underline">
              {PORTFOLIO_DATA.personal.email}
            </a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-neutral-900 underline">
              github.com/{PORTFOLIO_DATA.personal.githubUsername}
            </a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-neutral-900 underline">
              linkedin.com/in/rao-sami-344a11333
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-neutral-700 text-justify">
            BS Software Engineering student at Superior University Lahore with a strong foundation in Python, C++, SQL, Object-Oriented Programming, and Data Structures & Algorithms. Hands-on experience building full-stack web applications — including relational and NoSQL databases and Git/GitHub version control — as well as data analysis projects using Python, Pandas, NumPy, Matplotlib, Seaborn, SQL, and Power BI. Currently exploring ML/AI tools and quick to adapt to new technologies. I’m a quick learner and passionate about building real-world software solutions.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
            Professional Experience
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-neutral-900 font-bold">Full-Stack Web Development Intern</strong>
                  <span className="text-neutral-600"> — TEYZIX CORE — Remote</span>
                </div>
                <span className="text-neutral-600 font-mono text-[11px]">Jul 2026 – Aug 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 mt-1 text-[11px] leading-relaxed text-neutral-700 space-y-1">
                <li>Built full-stack websites and platforms — Smart Community Marketplace, E-Commerce Website, DriveLux Car Rental Website, and Vendor Quotation System</li>
                <li>Designed and consumed RESTful APIs with Node.js/Express, integrated MongoDB & MySQL databases, and used Git/GitHub for version control across React, Next.js, Vite, TypeScript, Tailwind CSS, Bootstrap, and JWT-based projects; deployed on Vercel & Railway</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-neutral-900 font-bold">Data Analytics Intern</strong>
                  <span className="text-neutral-600"> — Developer Hub — Remote (6-Week Program)</span>
                </div>
                <span className="text-neutral-600 font-mono text-[11px]">Jun 2026 – Jul 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 mt-1 text-[11px] leading-relaxed text-neutral-700 space-y-1">
                <li>Performed data cleaning, exploratory data analysis, and basic statistical modeling using Python (Pandas, NumPy), Excel, Power Query, and SQL to extract actionable insights from project datasets</li>
                <li>Created visualizations and interactive dashboards (Matplotlib, Seaborn, Power BI) to communicate findings, automated basic ETL steps, and prepared reports to support data-driven decisions</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-neutral-900 font-bold">Dispatcher</strong>
                  <span className="text-neutral-600"> — WebEx</span>
                </div>
                <span className="text-neutral-600 font-mono text-[11px]">Dec 2025 – Feb 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 mt-1 text-[11px] leading-relaxed text-neutral-700">
                <li>Managed real-time communication and dispatch coordination under pressure; strengthened decision-making, prioritization, teamwork, and communication skills</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
            Technical Projects
          </h2>

          <div className="space-y-3 text-[11px]">
            <div>
              <strong className="text-neutral-900 font-bold">AI Powered Lead Qualification & CRM Automation</strong> | Next.js, Supabase, FastAPI, Gemini
              <p className="text-neutral-700">Built an AI-powered CRM system to detect spam, score and prioritize leads, and generate personalized responses automatically.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">Smart Community Marketplace</strong> | Next.js, Tailwind CSS, MongoDB
              <p className="text-neutral-700">Community buying/selling platform with listings, categories, user dashboard, and seamless browsing.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">DriveLux — Car Rental Platform</strong> | React.js, Node.js, Express, MongoDB
              <p className="text-neutral-700">Real-world booking system with REST APIs, email verification, admin dashboard, and fake-email blocking via DNS validation.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">E-Commerce Web Application</strong> | Next.js 15, TypeScript, MongoDB
              <p className="text-neutral-700">JWT authentication, Zustand cart, full CRUD admin panel via REST APIs, deployed on Vercel.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">Vendor Quotation System</strong> | React/Vite, Node.js, Express, MongoDB
              <p className="text-neutral-700">Vendor management with REST APIs, quotation creation & comparison, dashboard stats — deployed as a split monorepo on Vercel.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">Mental Health Score Predictor</strong> | Python, Scikit-Learn, FastAPI
              <p className="text-neutral-700">Built a Random Forest regression model with data preprocessing and feature engineering, achieving ~0.90 R², and deployed it using FastAPI for real-time predictions.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">SQL E-Commerce Sales Analysis & Aviation Database System</strong> | MySQL, SQL
              <p className="text-neutral-700">Normalized 3NF schemas, stored procedures, triggers, CTEs, and window functions for customer segmentation and manifest management.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">Hospital Emergency Management & Car Rental Systems</strong> | C++ (DSA & OOP)
              <p className="text-neutral-700">Implemented Max-Heap Priority Queue, BST, Linked List, Stack, and file-based data persistence in pure C++.</p>
            </div>

            <div>
              <strong className="text-neutral-900 font-bold">Hotel Network Design — Cisco</strong> | Cisco Packet Tracer
              <p className="text-neutral-700">VLAN segmentation, inter-VLAN routing, DHCP, OSPF, SSH, port security, STP.</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-neutral-900 font-bold">BS Software Engineering</strong> — The Superior University, Lahore
              </div>
              <span className="text-neutral-600 font-mono text-[11px]">2024 – 2028 (Expected)</span>
            </div>
            <div className="flex justify-between items-baseline text-[11px]">
              <span className="text-neutral-700">Intermediate — Punjab Group of Colleges</span>
              <span className="text-neutral-600 font-mono">921 / 1100</span>
            </div>
            <div className="flex justify-between items-baseline text-[11px]">
              <span className="text-neutral-700">Matriculation — The Islamia Public Science School</span>
              <span className="text-neutral-600 font-mono">1061 / 1100</span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1 text-[11px] leading-relaxed text-neutral-700">
            <div><strong className="text-neutral-900">Languages & Tools:</strong> Python, C++, Java, Git/GitHub, Basic Deployments and AI Assisted Tools</div>
            <div><strong className="text-neutral-900">Web Development:</strong> React.js, Next.js, Node.js, Express, RESTful APIs, HTML5, CSS3, Bootstrap, Tailwind CSS, JWT</div>
            <div><strong className="text-neutral-900">Databases:</strong> MongoDB, MySQL, Supabase</div>
            <div><strong className="text-neutral-900">Data Analysis:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Excel, Power Query, Data Cleaning, Visualization, Basic Statistics, Power BI</div>
          </div>
        </section>

        {/* Certifications & Soft Skills */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            Certifications & Soft Skills
          </h2>
          <ul className="list-disc list-outside pl-4 text-[11px] leading-relaxed text-neutral-700 space-y-0.5">
            <li>Certified Data Analyst Foundations Course — Data Science Academy, School of AI (2026)</li>
            <li>Graphics Designing — KHREWS (2025)</li>
            <li>Website Development — SET (2024)</li>
            <li>Networking Basics — Cisco Networking Academy (2024)</li>
          </ul>
          <p className="text-[11px] text-neutral-600 mt-2 font-sans">
            Problem-Solving • Clear Communication • Team Collaboration • Eagerness to Learn • Time Management • Adaptability • Urdu (Native), English (Intermediate)
          </p>
        </section>
      </div>
    </div>
  );
}
