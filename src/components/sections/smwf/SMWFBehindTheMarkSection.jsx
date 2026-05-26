import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"

import smwfLogo from "../../../assets/images/Homepage/SMWF/smwf-green.svg"

const SECTION_BG = "#F3EFEB"
const INK         = "#124039"

// Vimeo embed URL — scraped from miaaustralia.org/smwf "Behind the Mark" section.
// Native Vimeo player handles play/pause/timeline/3-dot menu/Vimeo branding.
const VIMEO_SRC =
  "https://player.vimeo.com/video/1153891644?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"

export default function SMWFBehindTheMarkSection() {
  return (
    <section
      id="smwf-mark"
      className="py-20 md:py-24 lg:py-28 3xl:py-40"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 3xl:gap-24 items-center">
          {/* LEFT — vertical Vimeo video */}
          <motion.div {...fadeInLeft} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] 3xl:max-w-[420px]">
              {/* 264:432 aspect from the original iframe — set via padding-bottom so the iframe fills it */}
              <div className="relative w-full" style={{ paddingBottom: "163.6%" /* 432/264 */ }}>
                <iframe
                  src={VIMEO_SRC}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="The Meaning Behind the Mark"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — heading + body + logo */}
          <motion.div {...fadeInRight}>
            <h2
              className="font-aeonik text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight leading-tight"
              style={{ color: INK }}
            >
              The Meaning Behind the Mark
            </h2>
            <p
              className="mt-6 md:mt-7 3xl:mt-10 font-barlow text-base md:text-lg 3xl:text-2xl leading-relaxed max-w-lg 3xl:max-w-2xl"
              style={{ color: INK }}
            >
              The SMWF logo is more than an image — it&apos;s a story of voices,
              roots, and unity. Watch the video to see how its elements come
              together to reflect who we are and what we stand for.
            </p>

            <div className="mt-8 md:mt-10 3xl:mt-14">
              <img
                src={smwfLogo}
                alt="Sydney Muslim Writers Festival logo"
                className="h-20 md:h-24 lg:h-28 3xl:h-36 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
