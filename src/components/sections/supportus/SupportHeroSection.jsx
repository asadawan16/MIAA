import { motion } from "framer-motion"
import heroImg from "../../../assets/images/Support/support-hero.jpg"

export default function SupportHeroSection() {
  return (
    <section className="relative bg-bg-deep overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight text-center"
        >
          How Can I Get Involved?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm md:text-[15px] text-accent-cream/75 mt-3 max-w-2xl mx-auto"
        >
          Help shape the Museum of Islamic Art Australia &mdash; through giving,
          partnership or your time.
        </motion.p>
      </div>

      {/* Full-width speaker / event photo placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="w-full"
      >
        <div className="w-full h-[260px] md:h-[420px] lg:h-[500px] overflow-hidden">
          <img
            src={heroImg}
            alt="Speaker addressing the MIAA community"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  )
}
