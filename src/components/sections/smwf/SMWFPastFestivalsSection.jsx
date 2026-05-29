import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"

import g1 from "../../../assets/images/Homepage/SMWF/gallery/g1.jpg"
import g2 from "../../../assets/images/Homepage/SMWF/gallery/g2.jpg"
import g3 from "../../../assets/images/Homepage/SMWF/gallery/g3.jpg"
import g4 from "../../../assets/images/Homepage/SMWF/gallery/g4.jpg"
import g5 from "../../../assets/images/Homepage/SMWF/gallery/g5.jpg"
import g6 from "../../../assets/images/Homepage/SMWF/gallery/g6.jpg"
import g7 from "../../../assets/images/Homepage/SMWF/gallery/g7.jpg"
import g8 from "../../../assets/images/Homepage/SMWF/gallery/g8.jpg"
import g9 from "../../../assets/images/Homepage/SMWF/gallery/g9.jpg"
import g10 from "../../../assets/images/Homepage/SMWF/gallery/g10.jpg"
import g11 from "../../../assets/images/Homepage/SMWF/gallery/g11.jpg"
import g12 from "../../../assets/images/Homepage/SMWF/gallery/g12.jpg"

const SECTION_BG = "#FFFFFF"
const INK         = "#124039"

const VIMEO_EMBED = "https://player.vimeo.com/video/1156048878?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"

const GALLERY_IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12]

export default function SMWFPastFestivalsSection() {
  return (
    <section
      id="smwf-past-festivals"
      className="py-20 md:py-24 lg:py-28 desktop:py-32 3xl:py-40 4xl:py-56"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 desktop:gap-20 3xl:gap-24 4xl:gap-32 items-center mb-12 md:mb-16 desktop:mb-20 3xl:mb-24 4xl:mb-32 px-6 md:px-10 lg:px-14 desktop:px-20 3xl:px-20 4xl:px-32">
        {/* Left — title */}
        <motion.h2
          {...fadeInLeft}
          className="font-aeonik text-3xl md:text-4xl lg:text-5xl desktop:text-6xl 3xl:text-7xl 4xl:text-[6.5rem] font-medium tracking-tight leading-tight"
          style={{ color: INK }}
        >
          Highlights from Past<br />Festivals
        </motion.h2>

        {/* Right — Vimeo embedded video */}
        <motion.div
          {...fadeInRight}
          className="w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-black"
        >
          <iframe
            src={VIMEO_EMBED}
            title="Sydney Muslim Writers Festival highlights"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            className="block w-full h-full"
            frameBorder="0"
          />
        </motion.div>
      </div>

      {/* Gallery infinite marquee — extends full-bleed and scrolls horizontally */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-3 md:gap-4 desktop:gap-5 3xl:gap-6 4xl:gap-9 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 180, ease: "linear", repeat: Infinity }}
        >
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
            <div
              key={i}
              className="shrink-0 overflow-hidden rounded-md w-[320px] h-[220px] md:w-[400px] md:h-[260px] lg:w-[480px] lg:h-[300px] desktop:w-[560px] desktop:h-[350px] 3xl:w-[640px] 3xl:h-[400px] 4xl:w-[900px] 4xl:h-[560px]"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="block w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
