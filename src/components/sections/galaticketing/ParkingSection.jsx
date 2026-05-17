import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import mapImg from "../../../assets/images/Ticketing/area-map.png"

const PARKING = [
  {
    name: "Wilson Parking &mdash; Domain Carpark",
    body:
      "Sir John Young Crescent entry, connected to the Art Gallery of NSW via The Domain. Open until late, suitable for evening events.",
  },
  {
    name: "Goulburn Street Parking",
    body:
      "Multiple commercial carparks in the Sydney CBD are within a 10&ndash;15 minute walk of the venue.",
  },
  {
    name: "Kerbside",
    body:
      "Limited timed kerbside parking is available on Art Gallery Road. Please check signage on arrival.",
  },
]

export default function ParkingSection() {
  return (
    <section className="py-16 md:py-20 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — Parking details */}
          <motion.div {...fadeInLeft}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
              Parking
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight mb-6">
              Parking near the venue
            </h2>

            <ul className="flex flex-col divide-y divide-primary/10 border-y border-primary/10">
              {PARKING.map((p) => (
                <li key={p.name} className="py-4">
                  <p
                    className="text-base font-semibold text-primary mb-1"
                    dangerouslySetInnerHTML={{ __html: p.name }}
                  />
                  <p
                    className="text-[13px] text-primary/75 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Map placeholder */}
          <motion.div {...fadeInRight}>
            <div className="aspect-[4/5] md:aspect-[1/1] overflow-hidden bg-white">
              <img
                src={mapImg}
                alt="Map of the area around Art Gallery of NSW with parking locations"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
