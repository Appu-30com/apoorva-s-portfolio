import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FileText } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { ResumeModal } from "../Resume/ResumeModal";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#achievements" },
  { title: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const currentSection = navLinks.find((item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActive(currentSection.title);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavigation = (href: string, title: string) => {
    const section = document.querySelector<HTMLElement>(href);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(title);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => handleNavigation("#home", "Home")}
              className="cursor-pointer text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1"
              aria-label="Go to home section"
            >
              <span className="text-gradient-primary">Apoorva</span>
              <span className="text-blue-600">.</span>
            </motion.button>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-8 xl:gap-10 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleNavigation(item.href, item.title)}
                  className={`relative text-[15px] font-semibold transition-colors duration-200 cursor-pointer ${
                    active === item.title
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {item.title}

                  {active === item.title && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1.5 left-0 h-[2.5px] w-full rounded-full bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </button>
              ))}

              <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

              <ThemeToggle theme={theme} onToggle={toggleTheme} />

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="rounded-xl p-2 text-2xl text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <HiMenuAlt3 />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm lg:hidden"
                aria-label="Close navigation menu"
              />

              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed right-0 top-0 z-[70] h-screen w-[min(320px,85vw)] bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 lg:hidden"
                aria-label="Mobile navigation"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                      Navigation
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                      aria-label="Close menu"
                    >
                      <HiOutlineX className="text-xl" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-1.5 py-6">
                    {navLinks.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleNavigation(item.href, item.title)}
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                          active === item.title
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      setIsResumeOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/25"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default Navbar;
