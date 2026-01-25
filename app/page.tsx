"use client";

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
} from "lucide-react";

const links = {
  github: "https://github.com/VaishakSCEM543",
  linkedin: "https://www.linkedin.com/in/vaishak-d-karkera-49b6ba292",
  email: "mailto:vaishak3366@gmail.com",
  pdsRepo: "https://github.com/VaishakSCEM543/smart-public-distribution-system",
  esp32Repo:
    "https://github.com/VaishakSCEM543/ESP32-Built-In-Sensor-Web-Control-System",
};

const projects = [
  {
    title: "Smart Border Surveillance System (SBSS)",
    tag: "Security + Automation",
    icon: <Shield className="w-5 h-5" />,
    description:
      "A smart security & surveillance concept using sensors + automation to detect threats and improve border safety with real-time monitoring.",
    tech: ["ESP32", "Sensors", "IoT", "Automation"],
    github: links.github,
  },
  {
    title: "Smart Public Distribution System (PDS)",
    tag: "GovTech + Transparency",
    icon: <Cpu className="w-5 h-5" />,
    description:
      "End-to-end IoT-based ration distribution system built to ensure transparent, secure, and accurate delivery, reducing fraud and inefficiency.",
    tech: ["Embedded", "IoT", "C", "Monitoring"],
    github: links.pdsRepo,
  },
  {
    title: "Smart Inventory Management System",
    tag: "Efficiency + Tracking",
    icon: <Wifi className="w-5 h-5" />,
    description:
      "Inventory tracking & monitoring system designed to reduce manual errors and improve stock visibility using smart automation workflows.",
    tech: ["IoT", "Embedded", "Automation"],
    github: links.github,
  },
  {
    title: "Smart Device Health Monitoring",
    tag: "IoT + Dashboard",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "IoT monitoring system that tracks real-time parameters and visualizes insights through dashboards (device → API → cloud → UI).",
    tech: ["ESP32", "Python", "API", "Dashboard"],
    github: links.github,
  },
  {
    title: "Smart Dental Project",
    tag: "Healthcare + Smart Devices",
    icon: <Cpu className="w-5 h-5" />,
    description:
      "A smart healthcare-focused system concept built to improve dental process/management with automation and monitoring support.",
    tech: ["IoT", "Smart Devices", "Automation"],
    github: links.github,
  },
];

const skills = [
  {
    title: "Programming",
    items: ["C", "Python", "Basics of Web (HTML)"],
  },
  {
    title: "Embedded / IoT",
    items: ["ESP32", "STM32", "Arduino", "Sensors & Modules"],
  },
  {
    title: "Software + Automation",
    items: ["IoT → APIs → Cloud → Dashboards", "Automation Workflows", "Data Handling"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Documentation & Versioning"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-purple-500 blur-[140px]" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-[140px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="font-semibold tracking-wide">
            Vaishak<span className="text-cyan-300">.dev</span>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#blog">Blog</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={links.email}
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            ⚡ ECE Engineer • Embedded • IoT • AI Automation • Software
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I’m{" "}
            <span className="text-cyan-300">Vaishak</span> 👋
          </h1>

          <p className="mt-5 text-lg text-white/75 md:text-xl">
            I build real-world systems that connect{" "}
            <span className="text-white">Sensors → Microcontrollers → APIs → Dashboards</span>.
            Passionate about Embedded Systems, IoT, Automation, and smart devices.
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
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Focus</p>
              <p className="mt-1 font-semibold">Embedded + IoT</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Strength</p>
              <p className="mt-1 font-semibold">Real Working Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Goal</p>
              <p className="mt-1 font-semibold">Internships & Collaboration</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold md:text-3xl">About Me</h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            I’m an Electronics & Communication Engineering student focused on building
            complete end-to-end smart solutions using embedded systems + IoT.
            I love working on projects where hardware and software come together in real-world impact.
          </p>

          <p className="mt-3 text-white/75 leading-relaxed">
            I’m currently improving my problem-solving skills, documentation, and building consistent
            projects using ESP32 / STM32, sensors, automation logic, and dashboard-style monitoring.
          </p>
        </motion.div>
      </section>

{/* Skills */}
<section id="skills" className="mx-auto max-w-6xl px-5 pb-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold md:text-3xl">Skills</h2>
    <p className="mt-2 text-white/70">
      A clean overview of what I work with.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {/* Programming */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Programming</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["C", "Python"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Embedded */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Embedded</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["ESP32", "STM32", "Arduino"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* IoT */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">IoT</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Wi-Fi", "Bluetooth/BLE", "MQTT"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Smart Systems */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Smart Systems</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Sensors", "Monitoring", "Automation"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Tools</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Git", "GitHub", "VS Code"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard / Web */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Dashboard / Web</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["APIs", "Dashboards", "HTML"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</section>


      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
          <p className="mt-2 text-white/70">
            A few strong projects showcasing embedded systems, automation, and IoT workflows.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/60">{p.tag}</p>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                    </div>
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/80 hover:bg-black/50"
                  >
                    GitHub
                  </a>
                </div>

                <p className="mt-4 text-white/75 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-6xl px-5 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold md:text-3xl">Blog</h2>
          <p className="mt-2 text-white/70">
            I’ll be sharing learnings on Embedded Systems, ESP32 projects, IoT dashboards,
            automation workflows, and real project building.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-white/60">Coming Soon</p>
              <h3 className="mt-2 text-lg font-semibold">
                How I build IoT systems end-to-end
              </h3>
              <p className="mt-2 text-white/70 text-sm">
                Sensors → ESP32 → API → Cloud → Dashboard.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-white/60">Coming Soon</p>
              <h3 className="mt-2 text-lg font-semibold">
                My ESP32 project workflow
              </h3>
              <p className="mt-2 text-white/70 text-sm">
                Planning, wiring, testing, code structure, documentation and GitHub.
              </p>
            </div>
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
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
          <p className="mt-2 text-white/70">
            Want to collaborate or offer an internship opportunity? Let’s connect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishak3366@gmail.com&su=Portfolio%20Contact&body=Hi%20Vaishak,%0A%0A"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>

            <a
              href={links.github}
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <footer className="mt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Vaishak • Built with Next.js
        </footer>
      </section>
    </div>
  );
}
