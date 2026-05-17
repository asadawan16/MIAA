import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import venueImg from "../../../assets/images/Ticketing/agnsw-exterior.jpg"

export default function LocationSection() {
  return (
    <section className="py-16 md:py-20 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — venue photo placeholder */}
          <motion.div {...fadeInLeft}>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={venueImg}
                alt="Art Gallery of New South Wales — exterior columns"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — address + CTA */}
          <motion.div {...fadeInRight}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
              Venue
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-medium text-primary tracking-tight leading-tight uppercase mb-5">
              How to Get Here
            </h2>
            <p className="text-sm md:text-[15px] text-primary/80 leading-relaxed mb-6">
              Please find below directions to the{" "}
              <a href="#" className="text-secondary-terra underline hover:text-secondary-rust">
                Kaldor Hall
              </a>{" "}
              at the Art Gallery of New South Wales.
            </p>

            <div className="bg-white border border-primary/10 p-5 md:p-6 mb-6">
              <p className="font-display text-xl text-primary tracking-wide uppercase leading-tight">
                Art Gallery of New South Wales
              </p>
              <p className="font-display text-lg text-primary/80 tracking-wide leading-tight">
                Kaldor Hall &middot; Naala Nura Building
              </p>
              <p className="text-sm text-primary/70 mt-3 leading-relaxed">
                Art Gallery Road, The Domain
                <br />
                Sydney NSW 2000, Australia
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
            >
              Plan a Route
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
