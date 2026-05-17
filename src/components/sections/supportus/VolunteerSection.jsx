import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import volunteerImg from "../../../assets/images/Support/volunteer-group.png"

export default function VolunteerSection() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Left — volunteer group photo */}
          <motion.div {...fadeInLeft}>
            <div className="overflow-hidden">
              <img
                src={volunteerImg}
                alt="MIAA volunteers"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-primary/15" />

          {/* Right — text + CTA */}
          <motion.div {...fadeInRight} className="flex flex-col justify-between">
            <div>
              <p className="text-base md:text-lg text-secondary-sand font-medium mb-2">
                Coming Soon
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-medium text-primary tracking-tight leading-snug mb-6">
                Volunteer for MIAA
              </h2>
              <p className="text-base sm:text-lg text-primary leading-relaxed mb-4 max-w-md">
                Do you have a passion for art, literature, poetry, film or
                performance? Have you ever wondered what a museum does and how
                they do it? Do you enjoy contributing to your community, learning
                new skills and meeting new people?
              </p>
              <p className="text-base sm:text-lg text-primary leading-relaxed max-w-md">
                If you have answered yes to any of the above and you would like
                to join our growing team of dedicated volunteers, be sure to join
                our socials and mailing list to receive the Museum&rsquo;s
                volunteer call out.
              </p>
            </div>

            <a
              href="#volunteer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 mt-8 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200 self-start"
            >
              Join Volunteer
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
