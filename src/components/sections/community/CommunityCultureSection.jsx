import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, fadeInUp } from "../../../lib/motion"
import audienceImg from "../../../assets/images/Community Engagement/community-audience.png"
import workshopImg from "../../../assets/images/Community Engagement/workshop-program.png"

export default function CommunityCultureSection() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-primary tracking-tight leading-tight mb-4"
        >
          At the Heart of Community and Culture
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="text-sm md:text-[15px] text-primary leading-relaxed max-w-3xl mb-12"
        >
          Community engagement is at the heart of MIAA. The team behind the
          establishment of the Museum has welcomed thousands of community
          members over the course of more than 15 years.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — body text */}
          <motion.div
            {...fadeInLeft}
            className="flex flex-col gap-4 text-sm md:text-[14px] text-primary leading-relaxed"
          >
            <p>
              ISRA was established in 2009 as a product of community dialogue
              and service, quickly becoming a prime organisation for Muslim
              communities for integration into Australian society. ISRA has
              established itself as an institution renowned for its academic
              and Islamic education, diversified community work and interfaith
              engagement.
            </p>
            <p>
              ISRA continues to engage Muslims, Islamic organisations and
              communities from different orientations as well as other faith
              and cultural groups, schools, and faith-based organisations and
              institutions. We envision the Museum as a hub for community
              activities and engagement through the arts and education.
            </p>
            <p>
              MIAA is committed to enhancing audience experience through a
              thoughtfully curated selection of community engagement
              activities, public programs, events and community networking
              opportunities. Local communities will also enjoy the benefits of
              the Museum program which includes access to our facilities to
              hold events, meetings and celebrations. As MIAA&apos;s capacity
              grows, community based special interest groups such as art clubs
              and other creative groups will be supported to facilitate
              gatherings onsite at the museum through our Community Access
              Program (CAP).
            </p>
          </motion.div>

          {/* Right — two stacked image placeholders */}
          <motion.div {...fadeInRight} className="flex flex-col gap-5">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={audienceImg}
                alt="Community audience at MIAA gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={workshopImg}
                alt="Sydney Muslim Writers Festival workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
