import { motion } from "framer-motion"
import { fadeInUp } from "../../../lib/motion"
import { useCountdown } from "./useCountdown"

import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const FESTIVAL_DATE = "2026-04-18T09:30:00+10:00"
const INK   = "#124039"
const CREAM = "#F3EFEB"
const LIME  = "#CBCE58"

function CountdownCell({ value, label, variant }) {
  const isLight = variant === "light"
  return (
    <div className="flex flex-col items-center">
      <div
        className="aspect-square w-20 sm:w-24 md:w-28 lg:w-32 3xl:w-44 flex items-center justify-center rounded-2xl 3xl:rounded-3xl"
        style={
          isLight
            ? { backgroundColor: CREAM }
            : { backgroundColor: "transparent", border: "1.5px solid rgba(243,239,235,0.18)" }
        }
      >
        <span
          className="font-aeonik text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] 3xl:text-[7.5rem] font-medium tabular-nums leading-none"
          style={{ color: isLight ? INK : LIME }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-4 md:mt-5 3xl:mt-7 font-aeonik text-white text-sm md:text-base 3xl:text-lg font-medium">
        {label}
      </p>
    </div>
  )
}

export default function SMWFCountdownSection() {
  const time = useCountdown(FESTIVAL_DATE)
  const cells = [
    { value: time.days,    label: "Days",    variant: "light" },
    { value: time.hours,   label: "Hours",   variant: "light" },
    { value: time.minutes, label: "Minutes", variant: "dark" },
    { value: time.seconds, label: "Seconds", variant: "dark" },
  ]

  return (
    <section
      id="smwf-countdown"
      className="relative overflow-hidden py-24 md:py-32 lg:py-36 3xl:py-52"
      style={{ backgroundColor: INK }}
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

      <div className="relative z-10 max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 text-center">
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-white text-4xl md:text-5xl lg:text-6xl 3xl:text-[5.5rem] font-medium tracking-tight leading-[1.1]"
        >
          Counting Down to<br />Festival Day
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="mt-6 md:mt-8 3xl:mt-12 font-barlow text-white/85 text-base md:text-lg 3xl:text-2xl"
        >
          April 18, 2026 — a day for writers, readers, and dreamers to gather.
        </motion.p>

        <motion.div
          {...fadeInUp}
          className="mt-12 md:mt-16 3xl:mt-24 flex justify-center gap-3 sm:gap-4 md:gap-5 3xl:gap-8"
        >
          {cells.map((cell) => (
            <CountdownCell key={cell.label} {...cell} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
