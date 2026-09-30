import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiNodedotjs } from "react-icons/si";
import {
  ArrowUpRight,
  MapPin,
  Activity,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { ResumeModal } from "../Resume/ResumeModal";

const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"agent" | "prompt" | "supervisor">(
    "agent",
  );

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-mesh-light dark:bg-mesh-dark w-full"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-blue-500/15 dark:bg-blue-600/20 blur-[130px] animate-pulse-slow" />
          <div
            className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-400/15 dark:bg-cyan-500/15 blur-[140px] animate-pulse-slow"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-[150px] animate-pulse-slow"
            style={{ animationDelay: "5s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* LEFT COLUMN: Bio & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-md shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Software Engineer • Mindstack Solutions</span>
                </motion.div>

                <div className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
              >
                Hi, I'm{" "}
                <span className="text-gradient-primary">
                  {PERSONAL_INFO.name}
                </span>
              </motion.h1>

              {/* Subheadline / Role */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-3 flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-slate-200"
              >
                <span>Full-Stack Software Engineer</span>
                <span className="hidden sm:inline text-blue-500">•</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  React.js, TypeScript, Node.js, AWS
                </span>
              </motion.div>

              {/* Concise Value Statement */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-normal"
              >
                Engineering high-performance enterprise platforms, responsive
                role-based web applications, and AI-agent workflows with clean,
                type-safe architecture and scalable cloud delivery.
              </motion.p>

              {/* CTAs & Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-blue-600 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-7 py-4 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                >
                  <FaFileAlt className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>View Resume</span>
                </button>

                <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:border-blue-400 transition shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:border-blue-400 transition shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:border-blue-400 transition shadow-sm"
                    aria-label="Send Email"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Stats Highlights Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {PERSONAL_INFO.experienceYears}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Years Industry Exp
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
                  <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    {PERSONAL_INFO.apiIntegrations}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    REST APIs Integrated
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
                  <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {PERSONAL_INFO.modulesDelivered}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Enterprise Modules
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {PERSONAL_INFO.componentsBuilt}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Reusable Components
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive Live Project Preview Card (Conwio Radar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center w-full"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-xl -z-10" />

              {/* Mock Dashboard Window */}
              <div className="w-full rounded-3xl border border-slate-200 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-500" />
                    <span>conwio-radar.telecom.app</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Production
                  </span>
                </div>

                {/* Dashboard Main Visual */}
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        Featured Platform Preview
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Conwio Radar
                      </h4>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                      7 Modules
                    </span>
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-850 dark:bg-slate-900 rounded-xl mb-4 text-xs font-semibold">
                    <button
                      onClick={() => setActiveTab("agent")}
                      className={`py-1.5 rounded-lg transition text-center cursor-pointer ${
                        activeTab === "agent"
                          ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                      }`}
                    >
                      AI Agent
                    </button>
                    <button
                      onClick={() => setActiveTab("prompt")}
                      className={`py-1.5 rounded-lg transition text-center cursor-pointer ${
                        activeTab === "prompt"
                          ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                      }`}
                    >
                      Prompt Config
                    </button>
                    <button
                      onClick={() => setActiveTab("supervisor")}
                      className={`py-1.5 rounded-lg transition text-center cursor-pointer ${
                        activeTab === "supervisor"
                          ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                      }`}
                    >
                      Supervisor
                    </button>
                  </div>

                  {/* Tab Dynamic Content Simulated UI */}
                  {activeTab === "agent" && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <Activity className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                            Active Telecom Agents
                          </span>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          14 Nodes Online
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <Cpu className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                            Real-time API Throughput
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                          ~12ms Response
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === "prompt" && (
                    <div className="space-y-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-mono text-[11px]">
                      <div className="text-slate-500 dark:text-slate-400">
                        // Prompt Configuration Model
                      </div>
                      <div className="text-blue-600 dark:text-cyan-400">
                        system_role: "Telecom Retention AI"
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        parameters: [temperature: 0.2, top_p: 0.95]
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        status: "Dynamic Validation OK"
                      </div>
                    </div>
                  )}

                  {activeTab === "supervisor" && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-purple-500" />
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                            Role-Based Workflow
                          </span>
                        </div>
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                          Supervisor Console
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 text-[11px] text-blue-700 dark:text-blue-300">
                        Zero-flicker state sync across 30+ REST endpoints
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Chips Bar */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                      <FaReact className="w-3.5 h-3.5" />
                      React.js
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
                      <SiTypescript className="w-3.5 h-3.5" />
                      TypeScript
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      <SiNodedotjs className="w-3.5 h-3.5" />
                      Node.js
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                      <FaAws className="w-3.5 h-3.5" />
                      AWS
                    </span>
                  </div>
                  <a
                    href="#projects"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default Hero;
