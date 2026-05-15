import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { NAV_LINKS } from "../../lib/constants"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      {/* Top bar - only CTA + hamburger, logo comes from loader */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-3 md:px-4">
          <div className="flex items-center justify-end h-20 md:h-24 gap-3">
            <Link
              to="/support-us"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-secondary-terra text-white text-[10px] font-bold tracking-[0.15em] uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
            >
              Follow Our Journey
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white p-2.5 bg-primary/60 backdrop-blur-sm rounded hover:bg-primary/80 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
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
            className="fixed inset-0 z-[100] bg-bg-deep"
          >
            {/* Close button */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
              <div className="flex items-center justify-end h-20 md:h-24">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white p-2.5 bg-white/10 rounded hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Nav links */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-4 md:pt-8">
              <nav className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 md:py-4 border-b border-white/10 text-xl md:text-2xl lg:text-3xl font-light transition-colors duration-200 ${
                        location.pathname === link.path
                          ? "text-accent-wheat"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/support-us"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-xs font-bold tracking-[0.15em] uppercase rounded hover:bg-secondary-rust transition-colors"
                >
                  Follow Our Journey
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
