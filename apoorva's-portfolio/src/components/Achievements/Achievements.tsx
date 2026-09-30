import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { EDUCATION_LIST, CERTIFICATIONS } from "../../data/portfolioData";

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            Milestones & Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Academic background in Computer Science and professional
            certifications in industry software engineering and workplace
            readiness.
          </motion.p>
        </div>

        {/* Dual Grid: Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Academic Education
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Computer Science Degrees & Graduate Studies
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-7 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                        edu.status === "In Progress"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <div className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1.5">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                    {edu.grade && (
                      <>
                        <span>•</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Grade: {edu.grade}
                        </span>
                      </>
                    )}
                  </div>

                  {edu.highlights && (
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                      {edu.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <BookOpen className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/30">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Certifications & Training
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Verified Industry Qualifications & Internships
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-7 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
                      Verified Certificate
                    </span>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>{cert.period}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {cert.title}
                  </h4>
                  <div className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1.5">
                    {cert.issuer}
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
