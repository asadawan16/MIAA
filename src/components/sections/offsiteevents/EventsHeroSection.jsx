import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "../../../lib/motion"

import hero1 from "../../../assets/images/MIAEvents/events-hero-1.png"
import hero2 from "../../../assets/images/MIAEvents/events-hero-2.png"
import hero3 from "../../../assets/images/MIAEvents/events-hero-3.png"

const HERO_PHOTOS = [
  { src: hero1, alt: "Meet the award-winning author book launch" },
  { src: hero2, alt: "MIAA community panel discussion" },
  { src: hero3, alt: "Visitors connecting at a MIAA event" },
]

export default function EventsHeroSection() {
  return (
    <section className="relative bg-bg-deep overflow-hidden">
      {/* Title */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight"
        >
          Events at MIAA
        </motion.h1>
      </div>

      {/* 3-photo strip */}
      <motion.div
        {...staggerContainer}
        className="w-full px-6 md:px-10 lg:px-16 pb-10 md:pb-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {HERO_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              {...staggerItem}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
