import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"
import kidsImg from "../../../assets/images/Support/donor-event.png"

const BENEFITS = [
  "Founder recognition on the MIAA Children's Gallery donor wall",
  "Invitations to family preview events and behind-the-scenes tours",
  "Early access to MIAA Kids workshops and holiday programs",
  "Annual MIAA &amp; MIAA Kids 2029 impact report and stewardship update",
]

export default function MIAAKidsSection() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — heading + checklist */}
          <motion.div {...fadeInLeft}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
              Family Giving Circle
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight mb-6">
              My MIAA and MIAA Kids 2029
            </h2>
            <p className="text-sm md:text-[15px] text-primary/80 leading-relaxed mb-8 max-w-md">
              Support the first dedicated Islamic-arts children&apos;s gallery
              in the Southern hemisphere and help us inspire the next
              generation of artists, thinkers and storytellers.
            </p>

            <motion.ul {...staggerContainer} className="flex flex-col gap-3">
              {BENEFITS.map((b) => (
                <motion.li
                  key={b}
                  {...staggerItem}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-secondary-terra/15 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-secondary-terra" strokeWidth={3} />
                  </span>
                  <span
                    className="text-[13px] md:text-sm text-primary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: b }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div {...fadeInRight}>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={kidsImg}
                alt="MIAA Kids audience at a community event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
