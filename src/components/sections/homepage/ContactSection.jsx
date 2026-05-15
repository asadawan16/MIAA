import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import connectImg from "../../../assets/images/Homepage/connectwithmuseum.png"

const TOPICS = [
  "General Inquiry",
  "Visitor Information",
  "Exhibition Information",
  "Partnership Opportunities",
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-16 md:py-24 bg-bg-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Content */}
          <motion.div {...fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-snug">
              Connect With the Museum
            </h2>
            <p className="mt-5 text-sm text-white leading-relaxed max-w-md">
              We&apos;d love to hear from you. Whether you&apos;d like to learn
              more about the Museum of Islamic Art Australia, explore partnership
              opportunities, or support our journey, our team is here to connect.
            </p>

            {/* Geometric icon */}
            <div className="mt-10 w-28 h-28 opacity-30">
              <img
                src={connectImg}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div {...fadeInRight}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center h-full"
              >
                <div className="text-center">
                  <p className="text-xl font-semibold text-white">Thank you!</p>
                  <p className="text-sm text-white/50 mt-2">
                    Your submission has been received!
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-2">
                    Topic
                  </label>
                  <select
                    defaultValue=""
                    required
                    className="w-full bg-transparent field-dotted-line text-sm text-white/30 focus:text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Topic
                    </option>
                    {TOPICS.map((topic) => (
                      <option key={topic} value={topic} className="bg-bg-deep text-white">
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={3}
                    required
                    className="w-full bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
                  >
                    Send Message
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
