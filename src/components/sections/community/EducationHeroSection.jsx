import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import heroImg from "../../../assets/images/Community Engagement/education-hero.png"

const accordionItems = [
  {
    title: "Teachers, Educators and Students",
    content:
      "The Museum of Islamic Art Australia (MIAA) will deliver substantial education links for school-aged visitors through a bespoke education matrix which engages with both the Australian National curriculum and NSW curriculum. Dr Eeqbal Hassim, an education consultant specialising in intercultural education, international education, and global competencies development is currently working in collaboration with MIAA to deliver a dedicated suite of education programs. The museum education program will ensure meaningful engagement, tours, and specialised programs for school-aged visitors.",
  },
  {
    title: "Children and Families",
    content:
      "As part of our aim to enhance engagement with young people, the Museum will feature a Children's Gallery — the first dedicated Islamic arts focussed children's gallery in the Southern hemisphere. It will include hands-on and interactive displays, accessible contemporary and decorative Islamic art and literature for young children, and a curated series of educational programs with a focus on kinder and primary aged children. The space will also offer parents and bubs' reading groups and other age-appropriate art focussed activities.",
  },
]

export default function EducationHeroSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative bg-bg-deep overflow-hidden">
      {/* Page title */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.4rem] font-medium text-accent-cream tracking-tight leading-tight"
        >
          Education &amp; Community Engagement
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1px_1fr] gap-10 lg:gap-12 items-start">
          {/* Left — Image placeholder */}
          <motion.div {...fadeInLeft}>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={heroImg}
                alt="Community members at MIAA event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px h-3/4 bg-accent-wheat/20 self-center" />

          {/* Right — Heading + accordion */}
          <motion.div {...fadeInRight} className="pt-2">
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-accent-cream tracking-tight leading-snug">
              Educating the Next
              <br />
              Generation of Thinkers
            </h2>

            <div className="mt-8 flex flex-col">
              {accordionItems.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-accent-wheat/15"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center gap-3 py-5 text-left group"
                  >
                    <span className="w-6 h-6 rounded-full border border-accent-wheat/60 flex items-center justify-center flex-shrink-0 group-hover:border-accent-wheat transition-colors">
                      {openIndex === i ? (
                        <Minus size={12} className="text-accent-wheat" />
                      ) : (
                        <Plus size={12} className="text-accent-wheat" />
                      )}
                    </span>
                    <span
                      className={`text-base font-medium transition-colors ${
                        openIndex === i
                          ? "text-accent-cream"
                          : "text-accent-cream/60"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pl-9 pb-5 text-sm text-accent-cream/85 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
