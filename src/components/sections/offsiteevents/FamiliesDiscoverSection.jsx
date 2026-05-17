import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"

import artConnectionImg from "../../../assets/images/MIAEvents/families-art-connection.png"
import behindVisionImg from "../../../assets/images/MIAEvents/families-behind-vision.png"
import heritageDesignImg from "../../../assets/images/MIAEvents/families-heritage-design.png"

const FAMILY_EVENTS = [
  {
    date: "07.02.26",
    title: "The Art of Connection",
    description:
      "An intimate guided tour designed for families to share, reflect and connect through the language of Islamic art.",
    image: artConnectionImg,
  },
  {
    date: "07.02.26",
    title: "Behind the Vision",
    description:
      "Hear from the people who shape MIAA. A candid conversation with curators and artists about the museum's vision.",
    image: behindVisionImg,
  },
  {
    date: "07.02.26",
    title: "Heritage and Design",
    description:
      "Discover the architectural and cultural inspirations that shape MIAA's collection and exhibition design.",
    image: heritageDesignImg,
  },
]

export default function FamiliesDiscoverSection() {
  return (
    <section className="py-16 md:py-24 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeInUp} className="mb-12 md:mb-14 max-w-3xl">
          <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
            Discover More
          </p>
          <h2 className="text-3xl md:text-[42px] font-medium text-primary tracking-tight leading-tight">
            Where Families Discover
            <br />
            Art Together
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {FAMILY_EVENTS.map((event, i) => (
            <motion.article
              key={i}
              {...staggerItem}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] mb-5 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-primary leading-tight mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-sm text-primary/80 leading-relaxed mb-4 flex-1">
                {event.description}
              </p>

              {/* Date — wheat/gold, right-aligned */}
              <div className="text-right">
                <p className="text-2xl md:text-[28px] tracking-wide text-[#D0A270]">
                  {event.date}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
