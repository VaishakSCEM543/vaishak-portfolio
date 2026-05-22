"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Cpu,
  Wifi,
  Shield,
  FileText,
  Sparkles,
  Briefcase,
} from "lucide-react";

const links = {
  github: "https://github.com/VaishakSCEM543",
  linkedin: "https://www.linkedin.com/in/vaishak-d-karkera-49b6ba292",
  email: "mailto:karkeravaishak@gmail.com",
  pdsRepo: "https://github.com/VaishakSCEM543/smart-public-distribution-system",
  esp32Repo:
    "https://github.com/VaishakSCEM543/ESP32-Built-In-Sensor-Web-Control-System",
};

const projects = [
  {
    title: "Smart Border Surveillance System (SBSS)",
    tag: "Security + Automation",
    featured: true,
    category: ["Embedded", "IoT", "Automation"],
    icon: <Shield className="w-5 h-5" />,
    description:
      "A smart surveillance system using sensors + automation to detect threats and enable real-time monitoring.",
    impact:
      "Designed for real-time alerts, threat detection logic, and smarter border safety monitoring.",
    tech: ["ESP32", "Sensors", "IoT", "Automation"],
    github: links.github,
  },
  {
    title: "Smart Public Distribution System (PDS)",
    tag: "GovTech + Transparency",
    featured: true,
    category: ["Embedded", "IoT"],
    icon: <Cpu className="w-5 h-5" />,
    description:
      "End-to-end IoT-based ration distribution concept focused on transparency, security, and operational efficiency.",
    impact:
      "Improves tracking, reduces leakage/fraud risk, and increases system accountability.",
    tech: ["Embedded", "IoT", "C", "Monitoring"],
    github: links.pdsRepo,
  },
  {
    title: "Smart Inventory Management System",
    tag: "Efficiency + Tracking",
    category: ["Embedded", "IoT", "Automation"],
    icon: <Wifi className="w-5 h-5" />,
    description:
      "Inventory tracking & monitoring system designed to reduce manual errors and improve operational visibility.",
    impact:
      "Better stock control, reduced human error, and improved process efficiency.",
    tech: ["IoT", "Embedded", "Automation"],
    github: links.github,
  },
  {
    title: "Smart Device Health Monitoring",
    tag: "IoT + Dashboard",
    category: ["IoT", "Dashboard", "Automation"],
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Real-time device monitoring system with dashboard visualization for insights and smarter maintenance decisions.",
    impact:
      "Enables parameter tracking, real-time monitoring, and dashboard-driven insights.",
    tech: ["ESP32", "Python", "API", "Dashboard"],
    github: links.github,
  },
  {
    title: "Smart Dental Project",
    tag: "Healthcare + Smart Devices",
    category: ["IoT", "Automation"],
    icon: <Cpu className="w-5 h-5" />,
    description:
      "A healthcare-focused smart system concept to support dental process optimization using automation + monitoring.",
    impact:
      "Focus on reliability, smart alerts, and structured tracking for healthcare support.",
    tech: ["IoT", "Smart Devices", "Automation"],
    github: links.github,
  },
];

const skills = [
  { title: "Programming", items: ["C", "Python"] },
  { title: "Embedded", items: ["ESP32", "STM32", "Arduino"] },
  { title: "IoT", items: ["Wi-Fi", "Bluetooth/BLE", "MQTT"] },
  { title: "Smart Systems", items: ["Sensors", "Monitoring", "Automation"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { title: "Dashboard / Web", items: ["APIs", "Dashboards", "HTML"] },
  { title: "Cloud", items: ["Cloud Fundamentals", "AWS (Basics)", "IoT Cloud Integration", "API + Deployment (Basics)"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          <Sparkles className="h-4 w-4 text-cyan-200" />
          {kicker}
        </p>
      ) : null}

      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {desc ? <p className="mt-2 text-white/70">{desc}</p> : null}
    </div>
  );
}

function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={
        "group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition " +
        "hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12)] " +
        className
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 left-6 h-40 w-40 rounded-full bg-cyan-500/20 blur-[60px]" />
        <div className="absolute -bottom-24 right-6 h-40 w-40 rounded-full bg-purple-500/20 blur-[60px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const filters = ["All", "Embedded", "IoT", "Automation", "Dashboard"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#05060a] text-white"
    >
      {/* Background Orbs */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-28 left-6 h-[420px] w-[420px] rounded-full bg-purple-500/30 blur-[140px]" />
        <div className="absolute top-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/30 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[160px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
              <span className="text-cyan-200 font-bold">V</span>
            </div>
            <div className="font-semibold tracking-wide">
              Vaishak<span className="text-cyan-300">.dev</span>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#achievements">
              Achievements
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={links.email}
              aria-label="Send email"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-12 md:items-center"
        >
          {/* Left */}
          <div className="md:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                ⚡ ECE Engineer • Embedded • IoT • AI Automation • Software
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                ✅ Open to Internships
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              Building{" "}
              <span className="text-cyan-300">smart systems</span> that connect
              hardware to real software outcomes.
            </h1>

            <p className="mt-5 text-lg text-white/75 md:text-xl leading-relaxed">
              Hi, I’m <span className="text-white font-semibold">Vaishak</span>{" "}
              — I build real-world solutions that go from{" "}
              <span className="text-white">
                sensors → microcontrollers → APIs → dashboards
              </span>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="/VAISHAK_RESUME.pdf"
                download
                className="flex items-center gap-2 rounded-2xl border border-purple-400/30 bg-purple-400/10 px-6 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-400/20 transition"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <GlowCard className="p-5">
                <p className="text-sm text-white/60">Projects Built</p>
                <p className="mt-1 text-lg font-semibold">5+ Real Systems</p>
              </GlowCard>

              <GlowCard className="p-5">
                <p className="text-sm text-white/60">Embedded Boards</p>
                <p className="mt-1 text-lg font-semibold">ESP32 • STM32</p>
              </GlowCard>

              <GlowCard className="p-5">
                <p className="text-sm text-white/60">Core Focus</p>
                <p className="mt-1 text-lg font-semibold">
                  Monitoring + Automation
                </p>
              </GlowCard>
            </div>
          </div>

          {/* Right - Showcase */}
          <div className="md:col-span-5">
            <GlowCard className="p-7">
              <p className="text-xs text-white/60">Signature Focus</p>
              <h3 className="mt-2 text-xl font-semibold">
                End-to-End IoT Systems
              </h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                I’m interested in building complete solutions: embedded firmware,
                connectivity, automation logic, and monitoring dashboards.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Sensors & Embedded Control",
                  "Connectivity + Automation Logic",
                  "Dashboards + Monitoring Insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-5">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            kicker="About"
            title="Engineer mindset. Builder execution."
            desc="I enjoy building systems that work in real life — not just theory."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <GlowCard>
              <h3 className="text-lg font-semibold">What I build</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                Smart devices & IoT systems that combine embedded control, sensor
                logic, automation workflows, and monitoring dashboards.
              </p>
            </GlowCard>

            <GlowCard>
              <h3 className="text-lg font-semibold">What I’m improving</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                Problem solving, documentation, cleaner project architecture,
                and building stronger engineering depth with consistency.
              </p>
            </GlowCard>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            kicker="Skills"
            title="A clean stack, focused on real systems"
            desc="Simple, recruiter-friendly, and aligned with my projects."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((s) => (
              <GlowCard key={s.title} className={s.title === "Cloud" ? "border-cyan-400/20" : ""}>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            kicker="Projects"
            title="Featured work"
            desc="Projects that show embedded thinking + software execution."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === f
                    ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-200"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filteredProjects.map((p) => (
              <GlowCard
                key={p.title}
                className={p.featured ? "border-cyan-400/20" : ""}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/60">{p.tag}</p>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                    </div>
                  </div>

                  {p.featured ? (
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      Featured
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-white/75 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs text-white/60">Impact</p>
                  <p className="mt-1 text-sm text-white/75 leading-relaxed">
                    {p.impact}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 transition hover:bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                  >
                    GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="mx-auto max-w-6xl px-5 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            kicker="Achievements"
            title="Competitions & Recognitions"
            desc="Events where I collaborated, built, and presented ideas under real constraints."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <GlowCard className="border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Ideathon</p>
                  <h3 className="text-lg font-semibold">IEEE CEDA Ideathon 2025</h3>
                </div>
              </div>

              <p className="mt-3 text-white/70 leading-relaxed">
                Presented "Device Health Monitoring System" as part of Team Udbhav —
                shortlisted among the <span className="text-white font-semibold">Top 80</span> out of{" "}
                <span className="text-white font-semibold">200+</span> submitted ideas.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Team Udbhav", "Top 80/200+", "Pitching", "Teamwork"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>

            <GlowCard>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Hackathons / SIH</p>
                  <h3 className="text-lg font-semibold">Hackathons & Innovation Events</h3>
                </div>
              </div>

              <p className="mt-3 text-white/70 leading-relaxed">
                Participated in hackathons, ideathons, and innovation challenges (including SIH),
                focusing on practical problem-solving, ideation, and building real systems.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["SIH", "Ideation", "Prototyping", "Presentation"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-5 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            kicker="Experience"
            title="Programs & Team Work"
            desc="Learning through programs, teamwork, and consistent building."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <GlowCard>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Program</p>
                  <h3 className="text-lg font-semibold">
                    Samsung RISC-V Talent Development
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-white/70 leading-relaxed">
                Hands-on exploration of RISC-V toolchain workflows, compilation,
                and performance testing through real tasks and practice.
              </p>
            </GlowCard>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-24 left-6 h-64 w-64 rounded-full bg-cyan-500/20 blur-[90px]" />
            <div className="absolute -bottom-28 right-6 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />
          </div>

          <div className="relative">
            <SectionHeader
              kicker="Contact"
              title="Let’s build something real."
              desc="Internship opportunity, collaboration, or project discussion — I’m open."
            />

            <div className="flex flex-wrap gap-3">
              <a
                href={links.email}
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>

            </div>
          </div>
        </motion.div>

        <footer className="mt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Vaishak • Built with Next.js
        </footer>
      </section>
    </div>
  );
}
