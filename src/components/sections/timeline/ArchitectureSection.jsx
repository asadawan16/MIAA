import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp } from "../../../lib/motion"

export default function ArchitectureSection() {
  return (
    <section className="py-16 md:py-24 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-primary tracking-tight leading-tight mb-12 max-w-2xl"
        >
          Architecture as Art
          <br />
          and Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column */}
          <motion.div
            {...fadeInLeft}
            className="flex flex-col gap-4 text-sm md:text-[15px] text-primary leading-relaxed"
          >
            <p>
              MIAA officially launched the Architect Design Competition on
              18&nbsp;August&nbsp;2025. Read the MIAA Architectural Design
              Brief here.
            </p>
            <p>
              The Museum of Islamic Art Australia will be a unique
              architecturally designed space for showcasing the beauty,
              intricacy and innovation of Islamic art over the centuries.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
              >
                Learn More
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            {...fadeInRight}
            className="flex flex-col gap-4 text-sm md:text-[15px] text-primary leading-relaxed"
          >
            <p>
              The architectural design forms part of the museum&apos;s story
              and will be incorporated into the multilayered learning
              experience for visitors. The intended visitor journey will
              connect with multiple senses and prompt a contemplative
              experience, but will also allow for the visual and joyful
              celebration of the museum&apos;s treasures.
            </p>
            <p>
              The museum galleries will be curated with multisensory
              experiences in mind. This unique experience will continue beyond
              the gallery walls to include taste, touch and scent &mdash;
              inviting visitors of all ages and backgrounds into an
              encompassing engagement with Islamic art and culture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
