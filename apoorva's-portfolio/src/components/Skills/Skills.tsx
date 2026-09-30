import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, Server, Cloud, Cpu, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-500" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-500" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-500" />;
    }
  };

  const filteredCategories =
    activeFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => {
          if (activeFilter === "frontend")
            return c.category.includes("Frontend");
          if (activeFilter === "backend") return c.category.includes("Backend");
          if (activeFilter === "cloud") return c.category.includes("Cloud");
          if (activeFilter === "mobile") return c.category.includes("Mobile");
          return true;
        });

  return (
    <section id="skills" className="py-20 relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            Skills & Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Core Technical Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base sm:text-lg text-slate-700 dark:text-slate-300"
          >
            Focused skill set prioritizing modern TypeScript frontend
            architecture, scalable Node.js services, and AWS cloud deployment.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { id: "all", label: "All Skills" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "cloud", label: "Cloud & DevOps" },
            { id: "mobile", label: "Mobile & Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Clean Primary Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skill Chips List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                        skill.featured
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50"
                          : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      }`}
                    >
                      {skill.featured && (
                        <Check className="w-3 h-3 text-blue-500" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
