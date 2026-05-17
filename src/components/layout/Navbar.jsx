import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { NAV_LINKS } from "../../lib/constants"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"
import topRightSpheres from "../../assets/images/Homepage/herotoprightelement.png"

const SOCIALS = [
  { label: "Tiktok", url: "#" },
  { label: "Twitter/X", url: "#" },
  { label: "Facebook", url: "https://www.facebook.com/" },
  { label: "YouTube", url: "https://www.youtube.com/" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      {/* Top bar (always visible) — Follow CTA + hamburger */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-end h-20 md:h-24 gap-3">
            <Link
              to="/support-us"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 bg-secondary-terra text-white text-[10px] font-bold tracking-[0.15em] uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
            >
              Follow Our Journey
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-primary px-3 py-2.5 bg-white rounded hover:bg-white/90 transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="0" y1="2" x2="20" y2="2" />
                <line x1="0" y1="12" x2="20" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen overlay nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bg-deep overflow-hidden"
          >
            {/* Spheres ornament — top right decorative */}
            <div className="absolute top-0 right-0 w-[35%] md:w-[30%] lg:w-[24%] max-h-[50%] pointer-events-none">
              <img
                src={topRightSpheres}
                alt=""
                className="w-full h-auto opacity-90"
              />
            </div>

            {/* Top bar — logo left + CTA & close right */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16">
              <div className="flex items-center justify-between h-20 md:h-24">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src={smallLogo}
                    alt="MIAA"
                    className="h-6 sm:h-8 md:h-10 w-auto"
                  />
                </Link>

                <div className="flex items-center gap-3">
                  <Link
                    to="/support-us"
                    onClick={() => setMenuOpen(false)}
                    className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-secondary-terra text-white text-[10px] font-bold tracking-[0.15em] uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
                  >
                    Follow Our Journey
                    <ArrowUpRight size={12} strokeWidth={2.5} />
                  </Link>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white p-2.5 bg-white/10 rounded hover:bg-white/20 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dotted divider line */}
            <div
              className="relative z-10 mx-4 sm:mx-6 md:mx-10 lg:mx-16 h-[2px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                backgroundSize: "8px 3px",
              }}
            />

            {/* Body — nav links left, socials right */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-10 md:pt-14">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">
                {/* Nav links */}
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = location.pathname === link.path
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * i }}
                      >
                        <Link
                          to={link.path}
                          className={`nav-link group relative flex items-center gap-3 py-2 md:py-2.5 text-2xl md:text-3xl lg:text-[34px] font-normal tracking-tight transition-colors duration-200 ${
                            isActive
                              ? "text-secondary-terra"
                              : "text-white/85 hover:text-secondary-terra"
                          }`}
                        >
                          {/* Quatrefoil marker — visible on hover or when active */}
                          <span
                            className={`flex-shrink-0 transition-opacity duration-200 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 100 100"
                              fill="#C15C45"
                            >
                              <circle cx="50" cy="22" r="25" />
                              <circle cx="50" cy="78" r="25" />
                              <circle cx="22" cy="50" r="25" />
                              <circle cx="78" cy="50" r="25" />
                              <rect
                                x="22"
                                y="22"
                                width="56"
                                height="56"
                                rx="4"
                              />
                            </svg>
                          </span>
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Social links — text only, right aligned */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="hidden md:flex flex-col items-end gap-2 self-center pr-2 lg:pr-6"
                >
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm md:text-[15px] text-white/85 hover:text-accent-wheat transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Socials — mobile (inline below nav) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="md:hidden mt-10 flex flex-wrap gap-x-5 gap-y-2"
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/85 hover:text-accent-wheat transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
