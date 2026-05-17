import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import volunteerImg from "../../../assets/images/Support/volunteer-group.png"

export default function VolunteerSection() {
  return (
    <section className="py-16 md:py-24 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — volunteer group photo */}
          <motion.div {...fadeInLeft}>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={volunteerImg}
                alt="MIAA volunteers at the Sydney Muslim Writers Festival"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — heading + CTA */}
          <motion.div {...fadeInRight}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
              Get Involved
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight mb-5">
              Volunteer for MIAA
            </h2>
            <p className="text-sm md:text-[15px] text-primary/85 leading-relaxed mb-6">
              Volunteer at MIAA and become part of a passionate community
              shaping a nationally significant cultural project. Whether you
              help at events, support visitor experience, or contribute
              behind the scenes, your time helps bring the Museum to life.
            </p>
            <a
              href="#volunteer-form"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
            >
              Register Your Interest
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
