import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp } from "../../../lib/motion"

import h1 from "../../../assets/images/Homepage/SMWF/highlights/h5.avif"
import h2 from "../../../assets/images/Homepage/SMWF/highlights/h6.avif"
import h3 from "../../../assets/images/Homepage/SMWF/highlights/h1.avif"
import h4 from "../../../assets/images/Homepage/SMWF/highlights/h2.avif"
import h5 from "../../../assets/images/Homepage/SMWF/highlights/h4.avif"
import h6 from "../../../assets/images/Homepage/SMWF/highlights/h3.avif"

const SECTION_BG = "#F3EFEB"
const INK         = "#124039"

const HIGHLIGHTS = [
  {
    title: "Panel Discussions",
    body: "Thought-provoking conversations with writers, academics, and creatives exploring pressing ideas, stories, and perspectives.",
    image: h1,
  },
  {
    title: "Book Signings with Authors",
    body: "Meet your favourite authors in person and take home a signed copy as a treasured keepsake.",
    image: h2,
  },
  {
    title: "Hanging Poem Exhibition",
    body: "Experience poetry brought to life through a stunning visual display of words suspended in space.",
    image: h3,
  },
  {
    title: "Little Readers and Writers Corner",
    body: "A cosy space dedicated to children's love of books, brought to you by ISRA Children's Library.",
    image: h4,
  },
  {
    title: "Stalls",
    body: "Browse a vibrant marketplace of books, art, and community initiatives.",
    image: h5,
  },
  {
    title: "Teens with Pens",
    body: "A dynamic writing workshop for young creatives, guided by author George Green.",
    image: h6,
  },
]

export default function SMWFProgramHighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = HIGHLIGHTS[activeIndex].image

  return (
    <section
      id="smwf-highlights"
      className="py-20 md:py-24 lg:py-28 3xl:py-40"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight leading-tight mb-10 md:mb-14 3xl:mb-20"
          style={{ color: INK }}
        >
          Programme Highlights
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 3xl:gap-20 items-start">
          {/* Left — photo that changes with active accordion item */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={activeImage}
                alt={HIGHLIGHTS[activeIndex].title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 block w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right — accordion list */}
          <div className="lg:pt-2 3xl:pt-4">
            {HIGHLIGHTS.map((item, i) => {
              const isOpen = i === activeIndex
              return (
                <div
                  key={item.title}
                  className="border-t last:border-b"
                  style={{ borderColor: "rgba(18,64,57,0.18)" }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="w-full text-left py-5 md:py-6 3xl:py-9 transition-opacity hover:opacity-75"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className="font-aeonik text-lg md:text-xl 3xl:text-2xl font-semibold tracking-tight"
                      style={{ color: INK }}
                    >
                      {item.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p
                            className="font-barlow text-sm md:text-base 3xl:text-lg leading-relaxed pt-3 md:pt-4 3xl:pt-6 pr-2 md:pr-6"
                            style={{ color: "rgba(18,64,57,0.8)" }}
                          >
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
