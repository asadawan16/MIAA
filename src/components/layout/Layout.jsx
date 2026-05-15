import { useState } from "react"
import { Outlet, useLocation, Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Loader from "../loader/Loader"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"

export default function Layout() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <>
      {/* Show loader only on first visit to home */}
      <AnimatePresence>
        {loading && isHome && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={
          loading && isHome ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }
      >
        {/* Fixed logo top-left - appears after loader lands here */}
        <Link
          to="/"
          className="fixed top-4 sm:top-5 md:top-6 left-4 sm:left-6 md:left-10 lg:left-16 z-50"
        >
          <img
            src={smallLogo}
            alt="MIAA"
            className="h-6 sm:h-8 md:h-10 w-auto"
          />
        </Link>

        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  )
}
