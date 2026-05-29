import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"

function BannerIcon({ color = "#FFFFFF", className }) {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.9421 4.46141C13.7827 1.84474 11.5328 -0.150662 8.91212 0.00893913C6.29145 0.16854 4.30029 2.42223 4.45965 5.0389C1.84298 5.19826 -0.152427 7.44819 0.00717415 10.0689C0.166775 12.6895 2.42046 14.6807 5.03713 14.5213C5.19649 17.138 7.44642 19.1334 10.0671 18.9738C12.6878 18.8142 14.6789 16.5605 14.5196 13.9438C17.1362 13.7845 19.1316 11.5346 18.972 8.91388C18.8124 6.29321 16.5587 4.30206 13.9421 4.46141Z"
        fill={color}
      />
    </svg>
  )
}

const INDIVIDUAL_TICKETS = [
  { name: "Adults",     age: "26 and Above", priceLabel: "Normal", price: "$40" },
  { name: "Youth",      age: "18–25",        priceLabel: "Normal", price: "$30" },
  { name: "School Age", age: "7–17",         priceLabel: "Price",  price: "$15" },
  { name: "Under 6",    age: "0–6",          priceLabel: "Price",  price: "Free" },
]

const PACKAGE_TICKETS = [
  { name: "Family Package", description: "2 adults + 2 kids under 17", priceLabel: "Normal", price: "$100" },
  { name: "Family Small",   description: "1 adult + 2 kids under 17",  priceLabel: "Price",  price: "$60" },
]

const REGISTER_URL = "https://www.miaaustralia.org/smwf"

function DottedDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-between -mx-6 md:-mx-7 desktop:-mx-8 3xl:-mx-10 4xl:-mx-16 my-6 md:my-7 desktop:my-8 3xl:my-10 4xl:my-14"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="block w-4 h-4 md:w-5 md:h-5 desktop:w-6 desktop:h-6 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9 rounded-full"
          style={{ backgroundColor: "#2A9E9B" }}
        />
      ))}
    </div>
  )
}

function TicketCard({ ticket }) {
  return (
    <motion.div
      {...staggerItem}
      className="p-6 md:p-7 desktop:p-8 3xl:p-10 4xl:p-16 flex flex-col text-center"
      style={{ backgroundColor: "#124039" }}
    >
      <p className="font-aeonik text-white text-lg md:text-xl desktop:text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold tracking-tight">
        {ticket.name}
      </p>
      <p className="font-barlow text-white/70 text-xs md:text-sm desktop:text-base 3xl:text-base 4xl:text-xl mt-1">
        {ticket.age || ticket.description}
      </p>

      <DottedDivider />

      <p className="font-barlow text-white/70 text-xs md:text-sm desktop:text-base 3xl:text-base 4xl:text-xl">
        {ticket.priceLabel}
      </p>
      <p className="font-aeonik text-white text-2xl md:text-3xl desktop:text-4xl 3xl:text-[2.75rem] 4xl:text-6xl font-medium leading-none mt-1">
        {ticket.price}
      </p>

      <motion.a
        href={REGISTER_URL}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="mt-6 md:mt-7 desktop:mt-8 3xl:mt-10 4xl:mt-14 inline-flex items-center justify-center font-aeonik text-xs md:text-sm desktop:text-base 3xl:text-lg 4xl:text-2xl font-semibold tracking-[0.18em] uppercase rounded-none py-3 md:py-3.5 desktop:py-4 3xl:py-5 4xl:py-7"
        style={{ backgroundColor: "#CBCE58", color: "#124039" }}
      >
        Register
      </motion.a>
    </motion.div>
  )
}

function VerticalDottedDivider() {
  return (
    <div
      aria-hidden
      className="relative flex flex-col items-center justify-between self-stretch mx-4 md:mx-6 desktop:mx-8 3xl:mx-10 4xl:mx-14 -my-4 md:-my-5 desktop:-my-6 3xl:-my-7 4xl:-my-10"
    >
      {/* Continuous vertical line running through the dots, edge to edge */}
      <span
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px 4xl:w-0.5"
        style={{ backgroundColor: "#2A9E9B" }}
      />
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="relative block w-3.5 h-3.5 md:w-4 md:h-4 desktop:w-5 desktop:h-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8 rounded-full shrink-0"
          style={{ backgroundColor: "#2A9E9B" }}
        />
      ))}
    </div>
  )
}

function PackageCard({ ticket }) {
  return (
    <motion.div
      {...staggerItem}
      className="px-6 md:px-8 desktop:px-10 3xl:px-12 4xl:px-16 py-4 md:py-5 desktop:py-6 3xl:py-7 4xl:py-10 flex items-stretch"
      style={{ backgroundColor: "#124039" }}
    >
      {/* Left: name + description */}
      <div className="flex-[1.3] flex flex-col justify-center text-left">
        <p className="font-aeonik text-white text-lg md:text-xl desktop:text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold tracking-tight whitespace-nowrap">
          {ticket.name}
        </p>
        <p className="font-barlow text-white/70 text-xs md:text-sm desktop:text-base 3xl:text-base 4xl:text-xl mt-1">
          {ticket.description}
        </p>
      </div>

      <VerticalDottedDivider />

      {/* Right: price + register */}
      <div className="flex-1 flex flex-col justify-center text-center">
        <p className="font-barlow text-white/70 text-xs md:text-sm desktop:text-base 3xl:text-base 4xl:text-xl">
          {ticket.priceLabel}
        </p>
        <p className="font-aeonik text-white text-xl md:text-2xl desktop:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium leading-none mt-1">
          {ticket.price}
        </p>

        <motion.a
          href={REGISTER_URL}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mt-3 md:mt-4 desktop:mt-5 3xl:mt-5 4xl:mt-8 inline-flex items-center justify-center font-aeonik text-xs md:text-sm desktop:text-base 3xl:text-base 4xl:text-xl font-semibold tracking-[0.18em] uppercase rounded-none py-2 md:py-2.5 desktop:py-3 3xl:py-3.5 4xl:py-5"
          style={{ backgroundColor: "#CBCE58", color: "#124039" }}
        >
          Register
        </motion.a>
      </div>
    </motion.div>
  )
}

function TiltedMarquee({ text, bg, color, rotate, duration = 60, reverse = false }) {
  return (
    <div className="relative h-16 md:h-20 desktop:h-24 3xl:h-28 4xl:h-40 -my-1 md:-my-1 3xl:my-1">
      <div
        className="absolute left-[-120px] right-[-120px] top-1/2 -translate-y-1/2 overflow-hidden py-2.5 md:py-3 desktop:py-4 3xl:py-5 4xl:py-7"
        style={{
          backgroundColor: bg,
          transform: `translateY(-50%) rotate(${rotate}deg)`,
          transformOrigin: "center",
        }}
      >
        <div
          className="flex smwf-banner-top w-max"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 desktop:gap-8 4xl:gap-12 px-3 md:px-4 desktop:px-5 4xl:px-7 shrink-0">
                  <span
                    className="font-aeonik font-semibold text-base md:text-lg desktop:text-xl 3xl:text-2xl 4xl:text-3xl tracking-tight whitespace-nowrap"
                    style={{ color }}
                  >
                    {text}
                  </span>
                  <BannerIcon
                    color={color}
                    className="w-3.5 h-3.5 md:w-4 md:h-4 desktop:w-5 desktop:h-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8 shrink-0"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SMWFTicketsSection() {
  return (
    <section
      id="smwf-tickets"
      className="overflow-hidden py-10 md:py-12 lg:py-14 desktop:py-16 3xl:py-20 4xl:py-28"
      style={{ backgroundColor: "#2A9E9B" }}
    >
      <div className="max-w-[1280px] desktop:max-w-[1480px] 3xl:max-w-[2800px] 4xl:max-w-[3600px] mx-auto px-6 md:px-10 lg:px-14 desktop:px-16 3xl:px-20 4xl:px-28">
        {/* Festival Day Tickets */}
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-white text-center text-2xl md:text-3xl lg:text-4xl desktop:text-[2.75rem] 3xl:text-5xl 4xl:text-7xl font-medium tracking-tight mb-6 md:mb-8 desktop:mb-10 3xl:mb-12 4xl:mb-16"
        >
          Festival Day Tickets
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 desktop:gap-6 3xl:gap-8 4xl:gap-12"
        >
          {INDIVIDUAL_TICKETS.map((t) => (
            <TicketCard key={t.name} ticket={t} />
          ))}
        </motion.div>
      </div>

      {/* Tilted decorative marquees */}
      <div className="mt-12 md:mt-16 desktop:mt-20 3xl:mt-24 4xl:mt-32">
        <TiltedMarquee
          text="See you at the festival! 18 April 2026"
          bg="#4656CD"
          color="#FFFFFF"
          rotate={3}
          duration={70}
          reverse
        />
      </div>
      <TiltedMarquee
        text="Transforming Narratives — Inspiring Communities"
        bg="#F4A8A1"
        color="#124039"
        rotate={-2}
        duration={70}
      />

      <div className="max-w-[1280px] desktop:max-w-[1480px] 3xl:max-w-[2800px] 4xl:max-w-[3600px] mx-auto px-6 md:px-10 lg:px-14 desktop:px-16 3xl:px-20 4xl:px-28">
        {/* Packages */}
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-white text-center text-2xl md:text-3xl lg:text-4xl desktop:text-[2.75rem] 3xl:text-5xl 4xl:text-7xl font-medium tracking-tight mb-6 md:mb-8 desktop:mb-10 3xl:mb-12 4xl:mb-16"
        >
          Packages
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 desktop:gap-7 3xl:gap-9 4xl:gap-14"
        >
          {PACKAGE_TICKETS.map((t) => (
            <PackageCard key={t.name} ticket={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
