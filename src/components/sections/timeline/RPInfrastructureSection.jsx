import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import teamImg from "../../../assets/images/Timeline/rp-infrastructure-team.png"

const RP_TEAM = [
  { name: "Chris Crick", role: "Executive Director" },
  { name: "Paul van der Plaat", role: "Project Director" },
  { name: "Russell Kosko", role: "Senior Project Manager" },
  { name: "Salma Malik", role: "Assistant Project Manager" },
]

export default function RPInfrastructureSection() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Photo placeholder */}
          <motion.div {...fadeInLeft}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={teamImg}
                alt="RP Infrastructure team reviewing construction plans"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Heading + body + team */}
          <motion.div {...fadeInRight}>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-medium text-primary tracking-tight leading-tight mb-6">
              About RP Infrastructure
            </h2>
            <p className="text-sm md:text-[15px] text-primary leading-relaxed mb-6">
              After a rigorous selection process, the project management
              contract was awarded to RP Infrastructure, a highly reputable and
              experienced project management team. Their expertise will help
              guide the MIAA project through each phase of design and delivery
              with rigour, transparency, and care for the cultural significance
              of the building.
            </p>

            <ul className="flex flex-col gap-2 border-t border-primary/10 pt-5">
              {RP_TEAM.map((person) => (
                <li
                  key={person.name}
                  className="flex items-baseline justify-between gap-4 text-sm text-primary"
                >
                  <span className="font-semibold">{person.name}</span>
                  <span className="text-primary/60 text-[13px] text-right">
                    {person.role}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
