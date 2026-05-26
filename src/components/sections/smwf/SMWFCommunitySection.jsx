import { motion } from "framer-motion"
import { Quote, Play } from "lucide-react"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"


import SMWFBehindTheMarkSection from "./SMWFBehindTheMarkSection"
import partnerNswGov from "../../../assets/images/Homepage/SMWF/partners/nsw-gov.png"
import partnerCbc from "../../../assets/images/Homepage/SMWF/partners/cbc.png"
import partnerIsra from "../../../assets/images/Homepage/SMWF/partners/isra.png"
import partnerLogoLockup from "../../../assets/images/Homepage/SMWF/partners/logo-lockup-07.png"
import partnerCityOfParramatta from "../../../assets/images/Homepage/SMWF/partners/city-of-parramatta.png"
import partnerBarakahBrew from "../../../assets/images/Homepage/SMWF/partners/barakah-brew.png"

const TESTIMONIALS = [
  {
    name: "Nadia Serhan Faour",
    role: "Author and Attendee",
    quote:
      "What attracted me to the festival was the children's library — Muslim books from all around the world and the chance to explore the range of books on display.",
  },
  {
    name: "George Green",
    role: "Motivational speaker and children's author",
    quote:
      "What I loved most about the Sydney Muslim Writers Festival was the clear effort to hear voices from many communities. It felt inclusive, intentional, and true to the diversity of Muslim stories.",
  },
  {
    name: "Annie McCann",
    role: "Indonesian-Australian emcee and author",
    quote:
      "I found great comfort in a space where joy and solace could naturally coexist. It was a safe haven for expressing collective grief — such spaces are crucial right now.",
  },
  {
    name: "Mostofa Alam",
    role: "Founder, Date Palm Tree Publishing House",
    quote:
      "SMWF is a distinguished program that enriches Australia's multicultural landscape — a professional platform that nurtures creative excellence.",
  },
  {
    name: "Lamisse Hamouda",
    role: "Author and Attendee",
    quote:
      "An opportunity to connect and learn from other writers and authors in the Muslim community, and to connect with people who are passionate about literature.",
  },
]

const PARTNER_LOGOS = [
  { name: "NSW Government",       logo: partnerNswGov },
  { name: "Canterbury Bankstown", logo: partnerCbc },
  { name: "Think Studio",         logo: partnerLogoLockup },
  { name: "ISRA",                 logo: partnerIsra },
  { name: "City of Parramatta",   logo: partnerCityOfParramatta },
  { name: "Barakah Brew",         logo: partnerBarakahBrew },
]

export default function SMWFCommunitySection() {
  return (
    <>
      {/* Testimonials — moving carousel */}
      <section
        className="py-20 md:py-24 lg:py-28 3xl:py-40 overflow-hidden"
        style={{ backgroundColor: "#F3EFEB" }}
      >
        <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 3xl:mb-20"
          >
            <div className="max-w-2xl">
              <h2
                className="font-aeonik text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight leading-tight"
                style={{ color: "#124039" }}
              >
                What Our Community Says
              </h2>
              <p
                className="mt-3 md:mt-4 3xl:mt-6 font-barlow text-base md:text-lg 3xl:text-xl"
                style={{ color: "rgba(18,64,57,0.7)" }}
              >
                Hear from the writers, readers, and attendees who&apos;ve been
                part of the SMWF journey.
              </p>
            </div>
            <CTAButton href="https://www.miaaustralia.org/smwf">
              Get Tickets
            </CTAButton>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5 md:gap-6 3xl:gap-9 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="shrink-0 w-[320px] md:w-[420px] lg:w-[480px] 3xl:w-[640px] bg-white rounded-lg p-7 md:p-8 3xl:p-12 flex flex-col"
                style={{ minHeight: "320px" }}
              >
                <Quote
                  className="w-8 h-8 3xl:w-12 3xl:h-12 mb-5 md:mb-6 3xl:mb-9 shrink-0"
                  style={{ color: "#4656CD" }}
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p
                  className="font-barlow text-base md:text-lg 3xl:text-xl leading-relaxed flex-1"
                  style={{ color: "rgba(18,64,57,0.85)" }}
                >
                  {t.quote}
                </p>
                <div className="mt-6 md:mt-8 3xl:mt-12">
                  <p
                    className="font-aeonik text-base md:text-lg 3xl:text-2xl font-semibold tracking-tight"
                    style={{ color: "#124039" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-barlow text-sm md:text-base 3xl:text-lg mt-1"
                    style={{ color: "rgba(18,64,57,0.6)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Behind the Mark */}
      <SMWFBehindTheMarkSection />

      {/* Partners & Sponsors */}
      <section
        className="py-16 md:py-20 lg:py-24 3xl:py-32"
        style={{ backgroundColor: "#F3EFEB" }}
      >
        <div className="max-w-[1300px] 3xl:max-w-[2400px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
          <motion.h2
            {...fadeInUp}
            className="font-aeonik text-center text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight mb-10 md:mb-12 3xl:mb-16"
            style={{ color: "#124039" }}
          >
            Partners &amp; Sponsors
          </motion.h2>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 3xl:gap-8"
          >
            {PARTNER_LOGOS.map((p) => (
              <motion.div
                key={p.name}
                {...staggerItem}
                className="h-40 md:h-48 lg:h-56 3xl:h-72 bg-white flex items-center justify-center p-8 md:p-10 lg:p-12 3xl:p-16"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-[70%] max-w-[80%] w-auto h-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
