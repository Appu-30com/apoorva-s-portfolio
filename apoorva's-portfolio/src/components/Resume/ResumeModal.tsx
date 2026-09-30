import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Copy,
  Check,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Code2,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION_LIST,
  CERTIFICATIONS,
} from "../../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "summary">("preview");

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.role}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.bio}

SKILLS:
${SKILL_CATEGORIES.map(
  (c) => `${c.category}: ${c.skills.map((s) => s.name).join(", ")}`,
).join("\n")}

EXPERIENCE:
${EXPERIENCES.map(
  (e) => `
${e.role} - ${e.company} (${e.period})
${e.achievements.map((a) => `• ${a}`).join("\n")}
`,
).join("\n")}

PROJECTS:
${PROJECTS.map(
  (p) => `
${p.title} (${p.tags.join(", ")})
${p.description}
${p.highlights.map((h) => `• ${h}`).join("\n")}
`,
).join("\n")}

EDUCATION:
${EDUCATION_LIST.map((edu) => `• ${edu.degree} - ${edu.institution} (${edu.period})`).join("\n")}

CERTIFICATIONS:
${CERTIFICATIONS.map((c) => `• ${c.title} - ${c.issuer} (${c.period})`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 flex items-center justify-center font-bold">
                  CV
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.name} — Resume
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Front-End Software Engineer & Mobile UI Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Formatted View
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                      activeTab === "summary"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Quick Summary
                  </button>
                </div>

                <button
                  onClick={handleCopyText}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  title="Copy formatted text resume"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 print:p-0 print:space-y-6 text-slate-800 dark:text-slate-200">
              {activeTab === "summary" ? (
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                      Professional Highlights
                    </h4>
                    <p className="text-sm leading-relaxed text-blue-800/90 dark:text-blue-300">
                      {PERSONAL_INFO.bio}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                      <h5 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Core Tech Stack
                      </h5>
                      <p className="text-sm font-medium">
                        React.js, TypeScript, Redux Toolkit, Tailwind CSS,
                        Flutter, Dart, Node.js, Express.js, MongoDB
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                      <h5 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Key Metrics
                      </h5>
                      <p className="text-sm font-medium">
                        1.5+ Years Exp • 30+ REST APIs • 7+ Role Modules • 10+
                        Enterprise Components
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Top Resume Header */}
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {PERSONAL_INFO.role} — React.js, TypeScript, Flutter
                    </p>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {PERSONAL_INFO.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        {PERSONAL_INFO.phone}
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {PERSONAL_INFO.email}
                      </a>
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FaLinkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Profile Summary
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {PERSONAL_INFO.bio}
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Technical Skills
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {SKILL_CATEGORIES.map((cat) => (
                        <div
                          key={cat.category}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800"
                        >
                          <span className="font-semibold text-slate-900 dark:text-white block mb-1 text-xs uppercase tracking-wide">
                            {cat.category}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            {cat.skills.map((s) => s.name).join(", ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      Professional Experience
                    </h4>
                    <div className="space-y-6">
                      {EXPERIENCES.map((exp) => (
                        <div
                          key={exp.id}
                          className="relative pl-4 border-l-2 border-blue-500/40"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h5 className="font-bold text-slate-900 dark:text-white text-base">
                              {exp.role}
                            </h5>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit mt-1 sm:mt-0">
                              {exp.period}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {exp.company} • {exp.location}
                          </div>
                          <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                            {exp.achievements.map((ach, idx) => (
                              <li key={idx}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-blue-600" />
                      Key Projects
                    </h4>
                    <div className="space-y-4">
                      {PROJECTS.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                              {proj.title}
                            </h5>
                            <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                              {proj.tags.slice(0, 4).join(" • ")}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                            {proj.description}
                          </p>
                          <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                            {proj.highlights.slice(0, 3).map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        Education
                      </h4>
                      <div className="space-y-3">
                        {EDUCATION_LIST.map((edu) => (
                          <div key={edu.id} className="text-xs">
                            <div className="font-bold text-slate-900 dark:text-white">
                              {edu.degree}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                              {edu.institution}
                            </div>
                            <div className="text-blue-600 dark:text-blue-400 font-medium">
                              {edu.period} {edu.grade ? `| ${edu.grade}` : ""}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-blue-600" />
                        Certifications & Training
                      </h4>
                      <div className="space-y-3">
                        {CERTIFICATIONS.map((cert) => (
                          <div key={cert.id} className="text-xs">
                            <div className="font-bold text-slate-900 dark:text-white">
                              {cert.title}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                              {cert.issuer} ({cert.period})
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>
                Ready for immediate discussion & technical interviews.
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Send Email
                </a>
                <span>•</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Direct Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
