import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"

import heroBgPattern from "../../../assets/images/GalaDinner/herobgpattern.png"

const DIETARY = [
  "No dietary requirements",
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Allergies (please specify in notes)",
]

export default function TicketHeroSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Brick / pattern background */}
      <div className="absolute inset-0">
        <img
          src={heroBgPattern}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          {/* Left — Merhaba + price */}
          <motion.div {...fadeInLeft}>
            <p className="font-display text-sm md:text-base tracking-[0.35em] uppercase text-accent-cream mb-2">
              Merhaba
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight leading-tight gala-heading-light mb-5 uppercase">
              We&apos;re Thrilled
              <br />
              At Your Interest
            </h1>
            <p className="text-sm md:text-[15px] text-accent-cream/85 leading-relaxed max-w-md mb-10">
              Please complete your booking below. Your attendance directly
              supports the building of the Museum of Islamic Art Australia.
            </p>

            <div className="border-t border-accent-wheat/25 pt-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-accent-wheat mb-2">
                Ticket Pricing
              </p>
              <div className="flex items-baseline gap-3">
                <p className="font-display text-4xl md:text-5xl font-medium tracking-tight gala-heading-light leading-none">
                  $200
                </p>
                <p className="text-sm text-accent-cream/70">/ Single Ticket</p>
              </div>
              <p className="text-[12px] text-accent-cream/60 mt-2">
                Group bookings and table-of-ten options available on request.
              </p>
            </div>
          </motion.div>

          {/* Right — Booking form */}
          <motion.div
            {...fadeInRight}
            className="bg-primary/60 border border-accent-wheat/20 rounded p-6 md:p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-xl font-semibold text-accent-cream">
                  Booking received
                </p>
                <p className="text-sm text-accent-cream/70 mt-2">
                  We&apos;ll be in touch with your confirmation shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-display text-xl md:text-2xl uppercase tracking-wide gala-heading-light mb-1">
                  Personal Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none"
                      placeholder="04xx xxx xxx"
                    />
                  </div>
                </div>

                <h2 className="font-display text-xl md:text-2xl uppercase tracking-wide gala-heading-light mt-4 mb-1">
                  Ticket Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      Number of Tickets
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      defaultValue={1}
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                      Dietary Requirements
                    </label>
                    <select
                      defaultValue=""
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white/50 focus:text-white focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select option
                      </option>
                      {DIETARY.map((d) => (
                        <option
                          key={d}
                          value={d}
                          className="bg-primary text-white"
                        >
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-accent-cream/70 mb-2 uppercase tracking-wider">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Anything we should know?"
                    className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary-terra text-white text-xs font-semibold tracking-[0.15em] uppercase rounded hover:bg-secondary-rust transition-colors"
                  >
                    Confirm Booking
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
