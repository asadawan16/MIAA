import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import founderImg from "../../../assets/images/Support/founder-portrait.jpg"

export default function FoundingMemberSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-16 md:py-24 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Left — intro text + photos */}
          <motion.div {...fadeInLeft} className="flex flex-col gap-6">
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine">
              Founding Members
            </p>
            <p className="text-sm md:text-[15px] text-primary leading-relaxed">
              Founding individuals and businesses contribute a meaningful gift
              to MIAA. Our valued and renowned founders will join us in
              welcoming, training and developing the museum.
            </p>

            <div className="overflow-hidden">
              <img
                src={founderImg}
                alt="MIAA member visiting a gallery"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right — heading + form */}
          <motion.div {...fadeInRight}>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-primary tracking-tight leading-tight">
              Become a founding member of
              <br />
              the Museum of Islamic Art Australia
            </h2>
            <p className="mt-4 text-sm md:text-[15px] text-primary/80 leading-relaxed">
              Express your interest below and a member of the MIAA team will be
              in touch.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 p-8 bg-primary/5 border border-primary/15 text-center"
              >
                <p className="text-lg font-semibold text-primary">
                  Thank you!
                </p>
                <p className="text-sm text-primary/70 mt-1">
                  Our team will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-primary/15 rounded-sm text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white border border-primary/15 rounded-sm text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border border-primary/15 rounded-sm text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Tell us about your interest"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-primary/15 rounded-sm text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
                >
                  Submit Interest
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
