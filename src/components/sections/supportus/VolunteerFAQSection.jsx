import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInUp } from "../../../lib/motion"

const FAQS = [
  {
    q: "How is volunteer at MIAA different from any other role?",
    a:
      "MIAA volunteers play a direct role in shaping Australia's first dedicated Museum of Islamic Art. You'll be welcomed into a thoughtful community, supported by training, and trusted with meaningful work across events, education and visitor experience.",
  },
  {
    q: "Do I need to have a background in art or museums?",
    a:
      "Not at all. We welcome volunteers from all backgrounds and walks of life. What we look for is care, reliability and a willingness to learn. Training is provided for each role.",
  },
  {
    q: "What kinds of volunteer roles are available?",
    a:
      "Roles include event support, hospitality, education program assistance, community outreach, administration, and behind-the-scenes project work. Roles will expand as the museum opens.",
  },
  {
    q: "How much time will I need to commit?",
    a:
      "Time commitments are flexible. Some volunteers help at one-off events; others contribute a few hours each week or month. We'll work with you to find a rhythm that fits your life.",
  },
  {
    q: "How do I apply?",
    a:
      "Register your interest using the form above. A member of our volunteer team will be in touch to discuss roles that suit your interests and availability.",
  },
]

export default function VolunteerFAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="volunteer-form" className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeInUp} className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight max-w-2xl">
            General Information for Volunteers
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-primary/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center gap-3 py-5 text-left group"
              >
                <span className="w-6 h-6 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                  {openIndex === i ? (
                    <Minus size={12} className="text-primary" />
                  ) : (
                    <Plus size={12} className="text-primary" />
                  )}
                </span>
                <span
                  className={`text-base font-medium transition-colors ${
                    openIndex === i ? "text-primary" : "text-primary/70"
                  }`}
                >
                  {item.q}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pl-9 pb-5 text-sm text-primary/80 leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
