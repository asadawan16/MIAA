import { useRef, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import art1 from "../../../assets/images/Homepage/Art in Aus.png"
import art2 from "../../../assets/images/Homepage/Art in Aus-1.png"
import art3 from "../../../assets/images/Homepage/Art in Aus-2.png"
import art4 from "../../../assets/images/Homepage/Art in Aus-3.png"
import art5 from "../../../assets/images/Homepage/Art in Aus-4.png"

gsap.registerPlugin(ScrollTrigger)

const PARAGRAPHS = [
  "The influence of Islamic art on artisans and makers across the globe, is in of itself a great study in cross-cultural exchange, of trade routes and expeditions of the past.",
  "For centuries, Islamic art has been celebrated, even coveted by private collectors and museums alike. However, with that has come the modern day challenge of re/defining and understanding Islamic art in the contemporary era.",
  "In recent years there has been significant traction in the research of modern and contemporary art globally. We endeavor to not only contribute to the broader narrative of Islamic art, right here from Western Sydney, but to become important voices in that conversation.",
  "In Australia, we are experiencing an exciting and unique development of artistic practice, spanning diverse cultural backgrounds and Islamic heritage inspired by traditional techniques and motifs. Artists are reimagining the past and speaking to Islamic art through contemporary techniques, mediums and modes of storytelling.",
  "MIAA is proud to be part of this historical development, and aims to work alongside artists and other creative practitioners to enrich and educate our communities through art and creativity.",
  "As the Artistic Director of MIAA I look forward to the many conversations and collaborations ahead.",
]

const FRAMES = [
  { src: art5, alt: "Blue sphere artwork", credit: "", top: "8%", left: "4%", size: "w-24 md:w-32 lg:w-44" },
  { src: art2, alt: "Prayer mat", credit: "", top: "38%", left: "-2%", size: "w-24 md:w-32 lg:w-44" },
  { src: art3, alt: "Green figurine", credit: "", top: "70%", left: "12%", size: "w-24 md:w-32 lg:w-44" },
  { src: art1, alt: "Islamic metalwork", credit: "", top: "8%", right: "4%", size: "w-28 md:w-36 lg:w-48" },
  {
    src: art4,
    alt: "One Thousand and One and Counting",
    credit: "One Thousand and One and Counting (1004 and counting) —",
    creditAuthor: "Abdullah M Syed",
    top: "60%",
    right: "2%",
    size: "w-28 md:w-36 lg:w-48",
  },
]

export default function IslamicArtPageSection() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const wordsRef = useRef([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Flatten paragraphs into word tokens with paragraph index
  const wordTokens = useMemo(() => {
    const tokens = []
    PARAGRAPHS.forEach((para, pIdx) => {
      const words = para.split(/\s+/)
      words.forEach((w, wIdx) => {
        tokens.push({ word: w, paraIdx: pIdx, wordIdx: wIdx, last: wIdx === words.length - 1 })
      })
    })
    return tokens
  }, [])

  useGSAP(
    () => {
      const wordEls = wordsRef.current.filter(Boolean)
      if (!wordEls.length) return

      // Initial dim state
      gsap.set(wordEls, { opacity: 0.18 })

      // Pin the section and reveal words as we scroll past it
      const totalScroll = window.innerHeight * 2.5 // pin duration

      const trigger = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress
          // Progress goes 0 -> 1; map to revealing words within a 0.05 - 0.95 band
          const start = 0.05
          const end = 0.95
          const local = Math.min(1, Math.max(0, (progress - start) / (end - start)))
          const targetCount = Math.round(local * wordEls.length)
          wordEls.forEach((el, idx) => {
            el.style.opacity = idx < targetCount ? "1" : "0.18"
          })
        },
      })

      return () => {
        trigger.kill()
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-bg-deep">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden">
        {/* Title — top */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-28 md:pt-32 px-6 md:px-10 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-accent-cream tracking-tight leading-tight"
          >
            Islamic Art in Australia
          </motion.h1>
        </div>

        {/* Frames scattered — same animation pattern as homepage IslamicArtSection */}
        {FRAMES.map((piece, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 + 0.12 * i, ease: [0.25, 0.1, 0.25, 1] }}
            className={`${piece.size} absolute z-10 cursor-pointer`}
            style={{
              top: piece.top,
              left: piece.left,
              right: piece.right,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="border-[3px] md:border-[4px] border-secondary-terra bg-secondary-terra overflow-hidden">
              <img
                src={piece.src}
                alt={piece.alt}
                className="w-full h-auto block"
              />
            </div>
            <AnimatePresence>
              {piece.credit && hoveredIndex === i && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 text-[9px] text-accent-cream leading-tight text-center italic"
                >
                  {piece.credit}{" "}
                  <span className="font-medium not-italic">{piece.creditAuthor}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Center scrollable text — word-by-word reveal */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 pt-32 pb-20">
          <div className="max-w-md md:max-w-lg lg:max-w-xl w-full text-center">
            <div className="text-[15px] md:text-[16px] lg:text-[17px] text-accent-cream leading-[1.7] tracking-wide space-y-4">
              {PARAGRAPHS.map((para, pIdx) => {
                const words = para.split(/\s+/)
                return (
                  <p key={pIdx}>
                    {words.map((w, wIdx) => {
                      const flatIdx = wordTokens.findIndex(
                        (t) => t.paraIdx === pIdx && t.wordIdx === wIdx
                      )
                      return (
                        <span
                          key={`${pIdx}-${wIdx}`}
                          ref={(el) => (wordsRef.current[flatIdx] = el)}
                          className="transition-opacity duration-200"
                          style={{ opacity: 0.18 }}
                        >
                          {w}{" "}
                        </span>
                      )
                    })}
                  </p>
                )
              })}
            </div>

            {/* Signature */}
            <p className="mt-8 font-display italic text-accent-wheat text-2xl md:text-3xl tracking-wide">
              Dr Nur Shkembi OAM
            </p>
          </div>
        </div>
      </div>

      {/* Acknowledgement strip — appears after the pinned section ends */}
      <div className="bg-bg-deep py-12 md:py-16 px-6 md:px-10 lg:px-16">
        <p className="max-w-3xl mx-auto text-center text-xs md:text-[13px] text-accent-cream/70 leading-relaxed italic">
          MIAA is proudly located on beautiful Dharug country in Granville,
          Western Sydney. The Museum of Islamic Art Australia (MIAA)
          respectfully acknowledges the Burramattagal people of the Dharug
          Nation as the Traditional Owners of the land on which the museum will
          be located. We pay our respects to Elders past, present and emerging.
          Sovereignty has never been ceded.
        </p>
      </div>
    </section>
  )
}
