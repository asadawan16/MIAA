import { motion } from "framer-motion"
import { Footprints, Car, Train } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"

const OPTIONS = [
  {
    Icon: Footprints,
    title: "Walk",
    body:
      "A scenic ~10-minute walk from Martin Place Station, through the Royal Botanic Garden and across The Domain.",
  },
  {
    Icon: Car,
    title: "Taxi / Rideshare",
    body:
      "Drop-off and pick-up is available kerbside on Art Gallery Road, directly in front of the Naala Nura entrance.",
  },
  {
    Icon: Train,
    title: "Train",
    body:
      "St James and Martin Place stations are the closest, each a short walk to the Art Gallery of NSW.",
  },
]

export default function TransportSection() {
  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeInUp} className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
            Getting Here
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight">
            Public Transport Options
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {OPTIONS.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              {...staggerItem}
              className="bg-accent-cream/60 border border-primary/10 p-6 flex flex-col gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-secondary-terra/15 text-secondary-terra flex items-center justify-center">
                <Icon size={18} strokeWidth={2} />
              </span>
              <h3 className="text-base font-semibold text-primary">{title}</h3>
              <p className="text-[13px] text-primary/75 leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
