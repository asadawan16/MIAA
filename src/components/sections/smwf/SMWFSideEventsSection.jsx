import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "../../../lib/motion"
import { ArrowUpRight } from "lucide-react"

import iconCalendar from "../../../assets/images/Homepage/SMWF/icon-calendar.svg"
import iconClock from "../../../assets/images/Homepage/SMWF/icon-clock.svg"
import iconLocation from "../../../assets/images/Homepage/SMWF/icon-location.svg"

import g1 from "../../../assets/images/Homepage/SMWF/gallery/g1.jpg"
import g2 from "../../../assets/images/Homepage/SMWF/gallery/g2.jpg"
import g5 from "../../../assets/images/Homepage/SMWF/gallery/g5.jpg"
import g8 from "../../../assets/images/Homepage/SMWF/gallery/g8.jpg"

const SECTION_BG = "#F3EFEB"
const INK         = "#124039"
const LIME        = "#CBCE58"
const REGISTER_URL = "https://www.miaaustralia.org/smwf"

const SIDE_EVENTS = [
  {
    title: "Opening Night",
    date: "10th April 2026",
    time: "7pm – 9pm",
    venue: "Parramatta Town Hall",
    price: "$10",
    photos: [g1, g2],
  },
  {
    title: "Workshop Day",
    date: "19 April 2026",
    time: "10am – 1:30pm",
    venue: "ISRA Centre Sydney",
    price: "$45",
    photos: [g5, g8],
  },
]

function InfoRow({ icon, text, underline = false }) {
  return (
    <li className="flex items-center gap-3 md:gap-4">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="w-4 h-4 md:w-5 md:h-5 3xl:w-7 3xl:h-7 flex-shrink-0"
      />
      <span
        className={`font-barlow text-sm md:text-base 3xl:text-xl ${
          underline ? "underline underline-offset-4 decoration-1" : ""
        }`}
        style={{ color: INK }}
      >
        {text}
      </span>
    </li>
  )
}

function DottedVerticalLine() {
  return (
    <div
      aria-hidden
      className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-between"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="block w-3.5 h-3.5 md:w-4 md:h-4 3xl:w-6 3xl:h-6 rounded-full"
          style={{ backgroundColor: "rgba(18, 64, 57, 0.2)" }}
        />
      ))}
    </div>
  )
}

function TicketCard({ event }) {
  return (
    <motion.div
      {...staggerItem}
      className="relative bg-white overflow-visible"
    >
      <div className="flex flex-col md:flex-row items-stretch min-h-[18rem] md:min-h-[22rem] lg:min-h-[24rem] 3xl:min-h-[32rem]">
        {/* LEFT — event info + photos */}
        <div className="flex-[3] p-7 md:p-10 3xl:p-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 3xl:gap-16">
          {/* Info column */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-aeonik text-2xl md:text-3xl lg:text-[2.25rem] 3xl:text-5xl font-medium tracking-tight mb-5 md:mb-6 3xl:mb-8"
              style={{ color: INK }}
            >
              {event.title}
            </h3>
            <ul className="space-y-2.5 md:space-y-3 3xl:space-y-4 mb-6 md:mb-8 3xl:mb-12">
              <InfoRow icon={iconCalendar} text={event.date} />
              <InfoRow icon={iconClock}    text={event.time} />
              <InfoRow icon={iconLocation} text={event.venue} underline />
            </ul>
            <motion.a
              href={REGISTER_URL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-6 md:px-7 3xl:px-10 py-3 md:py-3.5 3xl:py-5 font-aeonik text-[0.6875rem] md:text-xs 3xl:text-base font-semibold tracking-[0.18em] uppercase rounded-md"
              style={{ backgroundColor: LIME, color: INK }}
            >
              Download Full Programme
            </motion.a>
          </div>

          {/* Circular photos — separated, no overlap */}
          <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 flex-shrink-0">
            {event.photos.map((src, i) => (
              <div
                key={i}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 3xl:w-44 3xl:h-44 rounded-full overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="block w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE — perforated divider with triangular notches at top and bottom */}
        <div className="relative hidden md:block w-px self-stretch flex-shrink-0">
          <DottedVerticalLine />
          {/* Top notch — downward-pointing triangle (▽) cut into the top edge */}
          <span
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            style={{
              width: 0,
              height: 0,
              borderLeft: "26px solid transparent",
              borderRight: "26px solid transparent",
              borderTop: `42px solid ${SECTION_BG}`,
            }}
          />
          {/* Bottom notch — upward-pointing triangle (△) cut into the bottom edge */}
          <span
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
            style={{
              width: 0,
              height: 0,
              borderLeft: "26px solid transparent",
              borderRight: "26px solid transparent",
              borderBottom: `42px solid ${SECTION_BG}`,
            }}
          />
        </div>

        {/* RIGHT — price + register */}
        <div className="flex-1 p-7 md:p-10 3xl:p-14 flex flex-col md:items-center md:justify-center gap-5 md:gap-6 3xl:gap-9 border-t md:border-t-0 border-[#1240391a]">
          <div className="text-center md:text-center">
            <p
              className="font-aeonik text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-medium leading-none"
              style={{ color: INK }}
            >
              {event.price}
            </p>
            <p
              className="font-barlow text-xs md:text-sm 3xl:text-base mt-2"
              style={{ color: "rgba(18,64,57,0.65)" }}
            >
              per person
            </p>
          </div>

          <motion.a
            href={REGISTER_URL}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 md:px-8 3xl:px-12 py-3 md:py-3.5 3xl:py-5 font-aeonik text-xs md:text-sm 3xl:text-lg font-semibold tracking-[0.18em] uppercase rounded-md"
            style={{ backgroundColor: LIME, color: INK }}
          >
            Register
            <ArrowUpRight
              className="w-3.5 h-3.5 md:w-4 md:h-4 3xl:w-6 3xl:h-6"
              strokeWidth={2.5}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function SMWFSideEventsSection() {
  return (
    <section
      id="smwf-side-events"
      className="py-20 md:py-24 lg:py-28 3xl:py-40"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        <motion.div
          {...staggerContainer}
          className="space-y-6 md:space-y-8 3xl:space-y-12"
        >
          {SIDE_EVENTS.map((e) => (
            <TicketCard key={e.title} event={e} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
