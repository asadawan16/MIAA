import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp } from "../../../lib/motion"

import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const INK         = "#124039"
const CREAM       = "#F3EFEB"
const LIME        = "#CBCE58"

export default function SMWFJoinCommunitySection() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // Hook up to your newsletter provider here.
    console.log("SMWF subscribe:", { firstName, lastName, email })
  }

  return (
    <section
      id="smwf-join"
      className="relative overflow-hidden"
    >
      {/* Top — cream (matches Partners section above) */}
      <div
        className="absolute inset-x-0 top-0 h-[35%]"
        style={{ backgroundColor: CREAM }}
      />
      {/* Bottom — dark green with kufic pattern */}
      <div
        className="absolute inset-x-0 bottom-0 h-[65%]"
        style={{ backgroundColor: INK }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${patternKufic})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center top",
          // Fade the pattern out at the top and bottom so it blends smoothly
          // into the cream above and the solid-green footer below.
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 72%, transparent 100%)",
        }}
      />

      {/* Floating card */}
      <div className="relative z-10 max-w-[1100px] 3xl:max-w-[1700px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 py-20 md:py-28 lg:py-32 3xl:py-44">
        <motion.div
          {...fadeInUp}
          className="bg-white shadow-2xl p-8 md:p-12 lg:p-16 3xl:p-24"
        >
          <div className="text-center max-w-2xl 3xl:max-w-3xl mx-auto mb-10 md:mb-12 3xl:mb-16">
            <h2
              className="font-aeonik text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight leading-tight"
              style={{ color: INK }}
            >
              Join the SMWF Community
            </h2>
            <p
              className="mt-5 md:mt-6 3xl:mt-9 font-barlow text-base md:text-lg 3xl:text-2xl leading-relaxed"
              style={{ color: INK }}
            >
              Subscribe for the latest news, event updates, and author
              highlights from SMWF 2026.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl 3xl:max-w-3xl mx-auto flex flex-col gap-4 md:gap-5 3xl:gap-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 3xl:gap-7">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full px-5 md:px-6 3xl:px-9 py-3.5 md:py-4 3xl:py-6 font-barlow text-sm md:text-base 3xl:text-xl bg-white border outline-none focus:border-[#124039] transition-colors"
                style={{ color: INK, borderColor: "rgba(18,64,57,0.2)" }}
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full px-5 md:px-6 3xl:px-9 py-3.5 md:py-4 3xl:py-6 font-barlow text-sm md:text-base 3xl:text-xl bg-white border outline-none focus:border-[#124039] transition-colors"
                style={{ color: INK, borderColor: "rgba(18,64,57,0.2)" }}
              />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 md:px-6 3xl:px-9 py-3.5 md:py-4 3xl:py-6 font-barlow text-sm md:text-base 3xl:text-xl bg-white border outline-none focus:border-[#124039] transition-colors"
              style={{ color: INK, borderColor: "rgba(18,64,57,0.2)" }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-2 md:mt-3 w-full py-4 md:py-5 3xl:py-7 font-aeonik text-sm md:text-base 3xl:text-xl font-semibold tracking-[0.18em] uppercase"
              style={{ backgroundColor: LIME, color: INK }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
