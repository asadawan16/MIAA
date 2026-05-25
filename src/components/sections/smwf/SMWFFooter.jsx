import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import smwfLime from "../../../assets/images/Homepage/SMWF/smwf-lime.svg"
import smwfTurquoise from "../../../assets/images/Homepage/SMWF/smwf-turquoise.svg"
import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const INK   = "#124039"
const LIME  = "#CBCE58"
const EMAIL = "info@sydneymuslimwritersfestival.org"

// Links ordered to match the live grid: row reading L→R
const LINKS = [
  { label: "Islamic Art in Australia",         to: "/islamic-art" },
  { label: "Community Engagement & Education", to: "/community-engagement" },
  { label: "MIAA Off-Site Events",             to: "/offsite-events" },
  { label: "MIAA Timeline & Construction",     to: "/timeline" },
  { label: "Sydney Muslim Writers Festival",   to: "/smwf" },
  { label: "Contact Us",                       to: "/contact" },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill={INK}
        d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.74 3.74 0 0 1-1.38-.9 3.74 3.74 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.22 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.78 2.2 12 2.2zm0-2.2C8.74 0 8.33 0 7.05.07 5.78.13 4.9.33 4.14.63a5.94 5.94 0 0 0-2.16 1.4A5.94 5.94 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05 0 8.33 0 8.74 0 12s0 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.94 5.94 0 0 0 1.4 2.16c.62.62 1.36 1.07 2.16 1.4.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.94 5.94 0 0 0 2.16-1.4c.62-.62 1.07-1.36 1.4-2.16.3-.76.5-1.64.56-2.91.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.94 5.94 0 0 0-1.4-2.16A5.94 5.94 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67 0 15.26 0 12 0z"
      />
      <path
        fill={INK}
        d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8z"
      />
      <circle cx="18.41" cy="5.59" r="1.44" fill={INK} />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill={INK}
        d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.13c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"
      />
    </svg>
  )
}

function SocialChip({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center transition-transform hover:scale-105"
      style={{ backgroundColor: LIME }}
    >
      {icon}
    </a>
  )
}

export default function SMWFFooter() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log("MIAA newsletter signup:", { firstName, lastName, email })
  }

  return (
    <footer
      className="relative overflow-hidden"
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

      {/* Decorative big teal kufic mark — flush bottom-left, hidden on mobile (matches Footer.jsx watermark pattern) */}
      <img
        src={smwfTurquoise}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none hidden md:block md:w-[31.25rem] lg:w-[40.625rem] 3xl:w-[28vw] h-auto"
      />

      <div className="relative z-10 max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 pt-16 md:pt-20 lg:pt-24 3xl:pt-32 pb-8 md:pb-10 3xl:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 3xl:gap-32">
          {/* LEFT — logo + acknowledgements. Padded inward on lg+ so the bottom-left kufic watermark doesn't sit under the text. */}
          <div className="relative z-10 md:pl-16 lg:pl-24 3xl:pl-40">
            <img
              src={smwfLime}
              alt="Sydney Muslim Writers Festival"
              className="h-20 md:h-24 lg:h-28 3xl:h-40 w-auto"
            />

            <p className="mt-6 md:mt-7 3xl:mt-10 font-barlow text-white/85 text-sm md:text-base 3xl:text-lg leading-relaxed max-w-md 3xl:max-w-xl">
              MIAA is proudly located on beautiful Dharug country in Granville,
              Western Sydney. The Museum of Islamic Art Australia (MIAA)
              respectfully acknowledges the Burramattagal people of the Dharug
              Nation as the Traditional Owners of the land on which the museum
              will be located. We pay our respects to Elders past, present and
              emerging. Sovereignty has never been ceded.
            </p>

            <p className="mt-6 md:mt-7 3xl:mt-10 md:pl-10 lg:pl-16 3xl:pl-24 font-barlow text-white/85 text-sm md:text-base 3xl:text-lg leading-relaxed max-w-md 3xl:max-w-xl">
              Museum of Islamic Art Australia is an initiative of the Islamic
              Sciences and Research Academy (ISRA). Funded by the Government of
              New South Wales West Invest Program.
            </p>
          </div>

          {/* RIGHT — follow / email / disclaimer / links / signup */}
          <div className="flex flex-col gap-7 md:gap-8 3xl:gap-12">
            {/* Follow Us */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-aeonik text-white text-base md:text-lg 3xl:text-xl font-medium">
                Follow Us
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <SocialChip icon={<InstagramIcon />} href="https://www.instagram.com/" label="Instagram" />
                <SocialChip icon={<FacebookIcon />}  href="https://www.facebook.com/"  label="Facebook" />
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-aeonik text-white text-base md:text-lg 3xl:text-xl font-medium">
                Email Us
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="font-barlow text-sm md:text-base 3xl:text-lg hover:opacity-80 transition-opacity break-all"
                style={{ color: LIME }}
              >
                {EMAIL}
              </a>
            </div>

            {/* Disclaimer */}
            <p className="font-barlow text-white/80 text-sm md:text-base 3xl:text-lg leading-relaxed">
              The views expressed by speakers are their own and do not
              necessarily reflect the views of the Sydney Muslim Writers
              Festival. We aim to create a respectful space for sharing diverse
              perspectives and lived experiences.
            </p>

            {/* Link grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-5 md:pb-6 3xl:pb-10"
              style={{ borderBottom: "1px solid rgba(243,239,235,0.18)" }}
            >
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-aeonik text-white text-sm md:text-base 3xl:text-lg font-medium hover:opacity-75 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Stay updated form */}
            <div>
              <p className="font-aeonik text-white text-base md:text-lg 3xl:text-xl font-semibold mb-2">
                Stay updated
              </p>
              <p className="font-barlow text-white/80 text-sm md:text-base 3xl:text-lg mb-5 md:mb-6">
                Get news and updates from the Museum of Islamic Art Australia.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4 3xl:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full px-4 md:px-5 py-3 md:py-3.5 3xl:py-5 bg-transparent text-white placeholder-white/45 font-barlow text-sm md:text-base 3xl:text-lg outline-none focus:border-white/60 transition-colors"
                    style={{ border: "1px solid rgba(243,239,235,0.25)" }}
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="w-full px-4 md:px-5 py-3 md:py-3.5 3xl:py-5 bg-transparent text-white placeholder-white/45 font-barlow text-sm md:text-base 3xl:text-lg outline-none focus:border-white/60 transition-colors"
                    style={{ border: "1px solid rgba(243,239,235,0.25)" }}
                  />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 3xl:py-5 bg-transparent text-white placeholder-white/45 font-barlow text-sm md:text-base 3xl:text-lg outline-none focus:border-white/60 transition-colors"
                  style={{ border: "1px solid rgba(243,239,235,0.25)" }}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="mt-1 md:mt-2 w-full py-3.5 md:py-4 3xl:py-6 font-aeonik text-sm md:text-base 3xl:text-lg font-semibold"
                  style={{ backgroundColor: LIME, color: INK }}
                >
                  Sign up
                </motion.button>

                <p className="font-barlow text-white/55 text-xs md:text-sm 3xl:text-base mt-1">
                  By clicking Sign Up you&apos;re confirming that you agree with
                  our Terms and Conditions.
                </p>
              </form>
            </div>

            {/* Copyright + design credit — stacked at the bottom of the right column */}
            <div
              className="pt-6 md:pt-8 3xl:pt-12 mt-2"
              style={{ borderTop: "1px solid rgba(243,239,235,0.18)" }}
            >
              <p className="font-barlow text-white/85 text-sm md:text-base 3xl:text-lg">
                © 2026 Museum of Islamic Art Australia
              </p>
              <p className="mt-1 md:mt-2 font-barlow text-white/85 text-sm md:text-base 3xl:text-lg">
                Website Designed and Built by{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  Think Studio
                </a>{" "}
                x{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  Auralis Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
