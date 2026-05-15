import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"
import smwf3 from "../../../assets/images/Homepage/SMWF/SMWF-03.png"
import bgPattern from "../../../assets/images/Homepage/SMWF/SMWF-BGPATTERN.png"
import smwfLogo from "../../../assets/images/Homepage/SMWF/smwflogo.png"

// 3 base images doubled for seamless infinite scroll
const baseImages = [smwf1, smwf2, smwf3]
const carouselImages = [...baseImages, ...baseImages]

function QuatrefoilIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 100 100" fill="#fff">
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" fill="#fff" />
    </svg>
  )
}

function BannerStrip({ text, count = 30 }) {
  return (
    <div className="flex whitespace-nowrap gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 text-white text-[13px] font-semibold tracking-wide flex-shrink-0"
        >
          <QuatrefoilIcon />
          {text}
        </span>
      ))}
    </div>
  )
}

export default function SMWFSection() {
  return (
    <section className="py-16 md:py-24 bg-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-stretch">
          {/* Left content */}
          <motion.div {...fadeInLeft} className="pr-0 lg:pr-12 py-4">
            <div className="mb-6">
              <img
                src={smwfLogo}
                alt="Sydney Muslim Writers Festival"
                className="h-20 w-auto"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-primary tracking-tight leading-snug">
              MIAA is home of the Sydney<br />Muslim Writer&apos;s Festival (SMWF)
            </h2>
            <p className="italic text-secondary-wine mt-4 text-base font-medium">
              Our Story Our Words
            </p>
            <p className="mt-2 text-sm text-primary leading-normal">
              The Sydney Muslim Writers Festival is a unique platform that
              celebrates the diverse voices of Muslim writers, poets, and
              thinkers. Founded with the vision of showcasing authentic
              storytelling, SMWF offers a space for both emerging and established
              authors to share their narratives and explore various themes in
              literature. While the full festival will return in 2026, the journey
              continues with a series of smaller events, workshops, and discussions
              throughout the year. Join us as we celebrate the power of words,
              foster dialogue, and build connections across communities
            </p>
            <div className="mt-8">
              <Link
                to="/events"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
              >
                Explore
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            {...fadeInRight}
            className="relative min-h-[480px] md:min-h-[540px] rounded-lg overflow-hidden"
          >
            {/* Teal base */}
            <div className="absolute inset-0 bg-primary" />
            {/* Pattern on top */}
            <div className="absolute inset-0">
              <img src={bgPattern} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Vertical auto-carousel — tilted as a group */}
            <div
              className="absolute z-10 flex justify-center"
              style={{
                top: "-20%",
                bottom: "-20%",
                left: "-10%",
                right: "-10%",
                transform: "rotate(-10deg)",
              }}
            >
              <div className="smwf-vertical-carousel flex flex-col gap-7 items-center">
                {carouselImages.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[270px] md:w-[330px] rounded-lg overflow-hidden border-[3px] border-white/90"
                  >
                    <img
                      src={src}
                      alt="SMWF event"
                      className="w-full aspect-[16/10] object-cover block"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Top diagonal banner — "18 April 2026" */}
            <div
              className="absolute z-20"
              style={{
                top: 35,
                left: -300,
                right: -300,
                transform: "rotate(18deg)",
                backgroundColor: "#DD613E",
                padding: "10px 0",
              }}
            >
              <div className="smwf-banner-top">
                <BannerStrip text="18 April 2026" />
              </div>
            </div>

            {/* Bottom diagonal banner — "Festival Day" */}
            <div
              className="absolute z-20"
              style={{
                bottom: 45,
                left: -300,
                right: -300,
                transform: "rotate(-18deg)",
                backgroundColor: "#4656CD",
                padding: "10px 0",
              }}
            >
              <div className="smwf-banner-bottom">
                <BannerStrip text="Festival Day" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
