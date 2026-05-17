import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"

const MILESTONES = [
  {
    year: 2024,
    date: "Q1 2024",
    title: "Project momentum builds",
    body:
      "Following the WestInvest grant, the ISRA-led MIAA team mobilises planning, governance and stakeholder engagement workstreams.",
  },
  {
    year: 2024,
    date: "Q2 2024",
    title: "Site investigation",
    body:
      "Preliminary site investigations across candidate locations in Western Sydney commence, with focus on Granville.",
  },
  {
    year: 2024,
    date: "Q4 2024",
    title: "Project Control Group formed",
    body:
      "MIAA convenes the Project Control Group bringing together museum, design, and infrastructure expertise to oversee delivery.",
  },
  {
    year: 2025,
    date: "Q1 2025",
    title: "Granville site secured",
    body:
      "The site for the Museum of Islamic Art Australia is formally secured in Granville &mdash; a nationally significant cultural milestone.",
  },
  {
    year: 2025,
    date: "18 Aug 2025",
    title: "Architect Design Competition launched",
    body:
      "MIAA officially launches the Architect Design Competition, inviting submissions guided by the Architectural Design Brief.",
  },
  {
    year: 2025,
    date: "Q4 2025",
    title: "Design shortlist",
    body:
      "Shortlisted architectural concepts undergo review against MIAA&apos;s vision for art, environment and spiritual symbolism.",
  },
]

const TABS = [
  { label: "2024", value: 2024 },
  { label: "2025", value: 2025 },
  { label: "View All", value: "all" },
]

export default function ProjectTimelineSection() {
  const [active, setActive] = useState("all")

  const visible = useMemo(() => {
    if (active === "all") return MILESTONES
    return MILESTONES.filter((m) => m.year === active)
  }, [active])

  return (
    <section className="py-16 md:py-24 bg-bg-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <motion.h2
          {...fadeInUp}
          className="text-2xl md:text-3xl lg:text-[36px] font-medium text-accent-cream tracking-tight leading-tight text-center mb-8"
        >
          Museum of Islamic Art Australia
          <br />
          Project Timeline
        </motion.h2>

        {/* Tabs */}
        <motion.div
          {...fadeInUp}
          className="flex items-center justify-center gap-2 mb-12 md:mb-16"
        >
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors ${
                active === tab.value
                  ? "bg-secondary-terra text-white"
                  : "bg-transparent text-accent-cream border border-accent-wheat/30 hover:border-accent-wheat/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid with dotted connecting line */}
        <div className="relative">
          {/* Horizontal dotted line behind cards (top row only on lg) */}
          <div
            className="hidden lg:block absolute top-[18px] left-[8%] right-[8%] h-px pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(215,184,147,0.5) 1.5px, transparent 1.5px)",
              backgroundSize: "10px 3px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              {...staggerContainer}
              initial="initial"
              animate="whileInView"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative"
            >
              {visible.map((m, i) => (
                <motion.div
                  key={`${m.year}-${m.date}-${i}`}
                  {...staggerItem}
                  className="relative bg-primary/30 border border-accent-wheat/20 p-5 md:p-6 flex flex-col gap-3"
                >
                  {/* Connector dot on the dotted line */}
                  <span className="hidden lg:block absolute -top-[24px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-wheat" />

                  <p className="text-[11px] tracking-[0.2em] uppercase text-accent-wheat">
                    {m.date}
                  </p>
                  <h3 className="text-accent-cream text-base md:text-[17px] font-semibold leading-tight">
                    {m.title}
                  </h3>
                  <p
                    className="text-accent-cream/75 text-[13px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: m.body }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Download PDF CTA */}
        <motion.div {...fadeInUp} className="flex justify-center mt-12 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
          >
            Download Timeline PDF
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
