import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import renderImg from "../../../assets/images/Timeline/timeline-render.png"

export default function TimelineHeroSection() {
  return (
    <section className="relative bg-bg-deep overflow-hidden">
      {/* Top — Title + intro split */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Title + Donate CTA */}
          <motion.div {...fadeInLeft}>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight">
              The Journey Toward
              <br />
              Completion
            </h1>
            <div className="mt-6">
              <Link
                to="/support-us"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
              >
                Donate
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Right — Intro text */}
          <motion.div
            {...fadeInRight}
            className="flex flex-col gap-3 text-sm md:text-[15px] text-accent-cream/85 leading-relaxed"
          >
            <p>
              MIAA is a significant community-led cultural project based in the
              heart of Western Sydney. We are excited to share the groundwork
              underpinning the MIAA project as we are fast approaching our
              build.
            </p>
            <p>
              Learn more about the architecture and construction of the museum
              and our project timeline.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Building render placeholder — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full"
      >
        <div className="w-full h-[280px] md:h-[460px] lg:h-[560px] overflow-hidden">
          <img
            src={renderImg}
            alt="MIAA architectural render"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  )
}
