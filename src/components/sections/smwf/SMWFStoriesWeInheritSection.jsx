import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"

import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"
import storiesImage from "../../../assets/images/Homepage/SMWF/stories-bg.jpg"

const BULLETS = [
  "Muslim students in Years 7 to 12",
  "Enrolled in a Sydney school or registered home-schooler based in Sydney",
  "Poetry, Short Prose (Fiction), Creative Non-Fiction",
]

const SUBMIT_URL = "https://www.miaaustralia.org/smwf"

export default function SMWFStoriesWeInheritSection() {
  return (
    <section
      id="smwf-stories-we-inherit"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#124039" }}
    >
      {/* Kufic pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${patternKufic})`,
          backgroundSize: "auto 720px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-[1500px] 3xl:max-w-[2000px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 py-16 md:py-20 lg:py-24 3xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 3xl:gap-20 items-center">
          {/* Left column — text */}
          <motion.div {...fadeInLeft}>
            <span
              className="inline-block px-5 md:px-6 3xl:px-8 py-2 md:py-2.5 3xl:py-3.5 rounded-full font-aeonik text-xs md:text-sm 3xl:text-base font-semibold tracking-[0.18em] uppercase mb-8 md:mb-10 3xl:mb-14"
              style={{ backgroundColor: "#C15C45", color: "#FFFFFF" }}
            >
              SMWF 2026
            </span>

            <h2 className="font-aeonik text-white text-4xl md:text-5xl lg:text-6xl 3xl:text-[5rem] font-medium tracking-tight leading-[1.05] mb-8 md:mb-10 3xl:mb-14">
              The Stories We Inherit
            </h2>

            <p className="font-barlow text-white text-lg md:text-xl 3xl:text-2xl mb-6 md:mb-8 3xl:mb-12">
              Student Writing Competition
            </p>

            <motion.ul
              {...staggerContainer}
              className="space-y-3 md:space-y-4 3xl:space-y-6 mb-10 md:mb-12 3xl:mb-16"
            >
              {BULLETS.map((item) => (
                <motion.li
                  key={item}
                  {...staggerItem}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <span
                    aria-hidden
                    className="block w-1.5 h-1.5 md:w-2 md:h-2 3xl:w-2.5 3xl:h-2.5 rounded-full mt-2.5 md:mt-3 3xl:mt-3.5 shrink-0"
                    style={{ backgroundColor: "#CBCE58" }}
                  />
                  <span className="font-barlow text-white/85 text-base md:text-lg 3xl:text-xl leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href={SUBMIT_URL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 md:px-8 3xl:px-12 py-3.5 md:py-4 3xl:py-6 font-aeonik text-xs md:text-sm 3xl:text-lg font-semibold tracking-[0.18em] uppercase rounded-md"
              style={{ backgroundColor: "#CBCE58", color: "#124039" }}
            >
              Submit Your Entry Here
            </motion.a>
          </motion.div>

          {/* Right column — image */}
          <motion.div
            {...fadeInRight}
            className="w-full"
          >
            <div className="aspect-[5/4] lg:aspect-[6/5] overflow-hidden rounded-lg">
              <img
                src={storiesImage}
                alt="Sydney Muslim Writers Festival author signing books"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
