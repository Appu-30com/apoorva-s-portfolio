import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Smartphone,
  Cloud,
  Server,
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
} from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: "Frontend Architecture & Design Systems",
      description:
        "Building resilient, accessible, role-based user interfaces with React.js, TypeScript, Tailwind CSS, Redux Toolkit, and ShadCN UI.",
      badge: "React & TS",
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-500" />,
      title: "Full-Stack Services & REST APIs",
      description:
        "Designing scalable Node.js and Express.js backends, MongoDB data modeling, secure JWT authentication, and zero-flicker state sync.",
      badge: "Node & Express",
    },
    {
      icon: <Cloud className="w-5 h-5 text-purple-500" />,
      title: "Cloud Infrastructure & CI/CD",
      description:
        "Containerizing applications with Docker, deploying to AWS (EC2, S3), and automating test and build workflows with GitHub Actions.",
      badge: "AWS & Docker",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      title: "Cross-Platform Mobile Engineering",
      description:
        "Developing responsive mobile interfaces with Flutter and Dart, building clean widget hierarchies and reliable API integrations.",
      badge: "Flutter & Dart",
    },
  ];

  const quickFacts = [
    {
      icon: <Briefcase className="w-4 h-4 text-blue-500" />,
      label: "Current Role",
      value: "Software Engineer at Mindstack Solutions",
    },
    {
      icon: <MapPin className="w-4 h-4 text-blue-500" />,
      label: "Location",
      value: "Bangalore, Karnataka, India",
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-blue-500" />,
      label: "Education",
      value: "MCA (KSOU, 2028) & B.Sc CS (2024)",
    },
    {
      icon: <Globe className="w-4 h-4 text-blue-500" />,
      label: "Focus",
      value: "Full-Stack & Front-End Engineering",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/40 w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Engineering Intuitive UX with Scalable Cloud Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base sm:text-lg text-slate-700 dark:text-slate-300"
          >
            Dedicated to writing clean, type-safe code, architecting reusable UI
            systems, and accelerating delivery through modern development
            workflows.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 sm:p-8 shadow-xl backdrop-blur-md flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Professional Journey
                </h3>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                  I am a{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Software Engineer based in Bangalore
                  </strong>{" "}
                  with over 1.5 years of industry experience developing web
                  applications and enterprise platforms.
                </p>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                  At{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Mindstack Solutions
                  </strong>
                  , my work centers on delivering production front-end
                  architectures, complex role-based workflow consoles, and
                  AI-assisted tooling like{" "}
                  <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                    Conwio Radar
                  </strong>
                  .
                </p>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Beyond front-end, I build full-stack services using{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Node.js, Express, MongoDB, Docker, and AWS
                  </strong>
                  , allowing me to understand end-to-end software lifecycle from
                  API contract design to cloud deployment.
                </p>
              </div>

              {/* Quick Facts List */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid sm:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30">
                      {fact.icon}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {fact.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                        {fact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
