import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight } from "../../../lib/motion"
import { ArrowUpRight } from "lucide-react"


import visionPhoto from "../../../assets/images/Homepage/SMWF/vision-photo.jpg"
import bannerIcon from "../../../assets/images/Homepage/SMWF/banner-icon.svg"

const INNER_MARQUEE_WORDS = ["Our Words", "Our Story"]

function InnerMarqueeRow() {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-6 px-2 md:px-3 shrink-0">
          <span
            className="font-aeonik font-medium text-sm md:text-base 3xl:text-xl whitespace-nowrap"
            style={{ color: "#124039" }}
          >
            {INNER_MARQUEE_WORDS[i % 2]}
          </span>
          <span
            aria-hidden="true"
            className="w-3.5 h-3.5 md:w-4 md:h-4 3xl:w-6 3xl:h-6 shrink-0 inline-block"
            style={{
              backgroundColor: "#2A9E9B",
              WebkitMaskImage: `url(${bannerIcon})`,
              maskImage: `url(${bannerIcon})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default function SMWFAboutSection() {
  return (
    <section
      id="smwf-festival"
      className="py-20 md:py-28 lg:py-32 3xl:py-44"
      style={{ backgroundColor: "#F3EFEB" }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        {/* Two-column intro text */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-32 3xl:gap-48 max-w-5xl 3xl:max-w-7xl mx-auto mb-16 md:mb-20 lg:mb-24 3xl:mb-32"
        >
          <p
            className="font-barlow text-sm md:text-base 3xl:text-xl leading-relaxed"
            style={{ color: "#124039" }}
          >
            The Sydney Muslim Writers Festival is a unique platform that
            celebrates the diverse voices of Muslim writers, poets, and
            thinkers. Founded with the vision of showcasing authentic
            storytelling, SMWF offers a space for both emerging and established
            authors to share their narratives and explore various themes in
            literature.
          </p>
          <p
            className="font-barlow text-sm md:text-base 3xl:text-xl leading-relaxed"
            style={{ color: "#124039" }}
          >
            Our theme this year &lsquo;Beyond Noise&rsquo; is about filtering
            out the excess of opinions in modern discourse to amplify voices
            that are constructive, authentic, and rooted in knowledge.
          </p>
        </motion.div>

        {/* Two-column cards: group photo (2/3) + Vision card (1/3) */}
        <div
          id="smwf-vision"
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 md:gap-6 3xl:gap-9"
        >
          {/* Left — group photo */}
          <motion.div {...fadeInLeft} className="min-h-[22rem] md:min-h-[26rem] lg:min-h-[30rem] 3xl:min-h-[42rem]">
            <div className="overflow-hidden h-full w-full">
              <img
                src={visionPhoto}
                alt="Sydney Muslim Writers Festival community"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Vision card */}
          <motion.div
            {...fadeInRight}
            className="relative overflow-hidden p-8 md:p-10 lg:p-12 3xl:p-16 min-h-[22rem] md:min-h-[26rem] lg:min-h-[30rem] 3xl:min-h-[42rem]"
            style={{ backgroundColor: "#2A9E9B" }}
          >
            {/* Top — Our Vision heading + body */}
            <div className="relative z-10">
              <h3 className="font-aeonik text-white text-2xl md:text-3xl 3xl:text-5xl font-medium tracking-tight mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="font-barlow text-white/90 text-sm md:text-base 3xl:text-xl leading-relaxed max-w-md 3xl:max-w-2xl">
                To cultivate and foster a deeper understanding and appreciation
                of literature written by Muslims across diverse genres, for
                local and international audiences.
              </p>
            </div>

            {/* Tilted pink marquee — positioned ~62% down, bleeds out to the right */}
            <div className="absolute left-[-80px] right-[-600px] top-[62%]">
              <div
                className="py-3 md:py-3.5 3xl:py-5 overflow-hidden"
                style={{
                  backgroundColor: "#F4A8A1",
                  transform: "rotate(-3deg)",
                  transformOrigin: "center",
                }}
              >
                <div
                  className="flex smwf-banner-top w-max"
                  style={{ animationDuration: "60s" }}
                >
                  <InnerMarqueeRow />
                  <InnerMarqueeRow />
                </div>
              </div>
            </div>

            {/* Bottom — GET TICKETS button, anchored bottom-left */}
            <div className="absolute bottom-8 md:bottom-10 lg:bottom-12 3xl:bottom-16 left-8 md:left-10 lg:left-12 3xl:left-16 z-10">
              <motion.a
                href="https://www.miaaustralia.org/smwf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 md:px-7 3xl:px-10 py-3 md:py-3.5 3xl:py-5 font-aeonik text-xs md:text-sm 3xl:text-lg font-semibold tracking-[0.18em] uppercase rounded-md"
                style={{ backgroundColor: "#CBCE58", color: "#124039" }}
              >
                Get Tickets
                <ArrowUpRight
                  className="w-3.5 h-3.5 md:w-4 md:h-4 3xl:w-6 3xl:h-6"
                  strokeWidth={2.5}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
