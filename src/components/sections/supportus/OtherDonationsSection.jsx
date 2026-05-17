import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"
import donorImg from "../../../assets/images/Support/donor-event.png"
import programImg from "../../../assets/images/Support/volunteer-group.png"

const DONATION_OPTIONS = [
  {
    title: "Bequests and Gifts in Wills",
    body:
      "Leave a meaningful legacy by including MIAA in your will, ensuring future generations continue to benefit from Islamic art and culture.",
  },
  {
    title: "Planned Giving",
    body:
      "Structured giving programs that allow you to plan your contribution in a way that suits your circumstances and tax position.",
  },
  {
    title: "Memorial &amp; Tribute Giving",
    body:
      "Honour a loved one by making a gift in their memory or to celebrate a milestone, with a dedicated tribute in the museum.",
  },
  {
    title: "Corporate Partnerships",
    body:
      "Partner with MIAA through long-term sponsorships, in-kind support, and joint cultural programs.",
  },
  {
    title: "Patron Circle",
    body:
      "Join an inner circle of supporters whose regular giving sustains MIAA's exhibitions and education programs year-round.",
  },
]

export default function OtherDonationsSection() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — heading + list */}
          <motion.div {...fadeInLeft}>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight mb-8">
              Other Individual Donations
              <br />
              Arranged Through Our Team
            </h2>

            <motion.ul
              {...staggerContainer}
              className="flex flex-col divide-y divide-primary/10 border-y border-primary/10"
            >
              {DONATION_OPTIONS.map((opt) => (
                <motion.li
                  key={opt.title}
                  {...staggerItem}
                  className="py-4 flex gap-4"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary-terra flex-shrink-0" />
                  <div>
                    <h3
                      className="text-base font-semibold text-primary mb-1"
                      dangerouslySetInnerHTML={{ __html: opt.title }}
                    />
                    <p
                      className="text-[13px] text-primary/75 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: opt.body }}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
              >
                Contact Our Team
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInRight} className="flex flex-col gap-5">
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={donorImg}
                alt="MIAA donor event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={programImg}
                alt="MIAA community program"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
