import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { EXPERIENCES } from "../../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
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
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base sm:text-lg text-slate-700 dark:text-slate-300"
          >
            1.5+ years of delivering enterprise front-end systems, telecom
            services, and AI agent workflows at Mindstack Solutions.
          </motion.p>
        </div>

        {/* Clean Single-Column Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-200 dark:to-slate-800" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-2 sm:left-4 top-6 -translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 flex items-center justify-center shadow-md ${
                      exp.current
                        ? "bg-blue-600 border-blue-200 dark:border-blue-900 animate-pulse"
                        : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 ${
                    exp.current
                      ? "border-blue-500/40 bg-white dark:bg-slate-900/95 ring-1 ring-blue-500/20"
                      : "border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>

                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Bullets */}
                  <div className="mt-5 space-y-3">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                      Stack:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
