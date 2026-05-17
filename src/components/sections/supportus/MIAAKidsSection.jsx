import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"
import kidsImg from "../../../assets/images/Support/donor-event.png"

const BENEFITS = [
  "Free Museum entry all year round*",
  "Members only previews and exclusive guided tours",
  "Early release tickets for Museum events",
  "Early release tickets for the MIAA Annual Gala Dinner",
  "Enjoy discounts in the gift shop and cafe",
  "Memberships directly support the museum operations",
]

export default function MIAAKidsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading + checklist + button */}
          <motion.div {...fadeInLeft}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-medium text-accent-cream tracking-tight leading-snug mb-6">
              My MIAA and MIAA Kids 2029
            </h2>
            <p className="text-base text-accent-cream leading-relaxed mb-6 max-w-md">
              Stay in touch and be the first to join My MIAA and MIAA Kids prior
              to the Museum&rsquo;s grand opening in early 2029. Benefits of
              becoming a MIAA Member:
            </p>

            <motion.ul {...staggerContainer} className="flex flex-col gap-2.5 mb-6">
              {BENEFITS.map((b) => (
                <motion.li
                  key={b}
                  {...staggerItem}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cream flex-shrink-0" />
                  <span className="text-base text-accent-cream leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-sm md:text-[15px] text-accent-wheat italic mb-8">
              *Excludes ticketed events
            </p>

            <a
              href="#join"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
            >
              Join Membership
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Right — image */}
          <motion.div {...fadeInRight}>
            <div className="overflow-hidden">
              <img
                src={kidsImg}
                alt="MIAA community audience at an event"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
