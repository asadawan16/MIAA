import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import { BLOG_ARTICLES } from "../../../lib/constants"
import { blogImages } from "./blogImages"

function ShareIcon({ children }) {
  return (
    <span className="w-8 h-8 flex items-center justify-center bg-primary/40 border border-accent-wheat/20 text-accent-cream hover:bg-secondary-terra hover:border-secondary-terra transition-colors cursor-pointer">
      {children}
    </span>
  )
}

const SHARE_ICONS = [
  // X
  <svg key="x" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>,
  // Facebook
  <svg key="fb" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>,
  // Instagram
  <svg key="ig" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>,
]

export default function BlogHeroSection() {
  const featured =
    BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[6]

  return (
    <section className="relative bg-bg-deep pt-28 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Left — page title */}
          <motion.div {...fadeInLeft}>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight">
              News, Stories, And
              <br />
              Updates From MIAA
            </h1>
          </motion.div>

          {/* Right — featured card */}
          <motion.article
            {...fadeInRight}
            className="group flex flex-col sm:flex-row gap-5 sm:gap-6 bg-primary/30 border border-accent-wheat/15 p-4 md:p-5"
          >
            <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden flex-shrink-0">
              <img
                src={blogImages[featured.image]}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <p className="text-[10px] tracking-[0.25em] uppercase text-accent-wheat mb-2">
                Featured
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-accent-cream leading-tight mb-2">
                {featured.title}
              </h2>
              <p className="text-[13px] text-accent-cream/75 leading-relaxed mb-4">
                {featured.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 flex-wrap">
                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary-terra hover:text-accent-wheat transition-colors"
                >
                  Read More
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>

                <div className="flex gap-1.5">
                  {SHARE_ICONS.map((icon, i) => (
                    <ShareIcon key={i}>{icon}</ShareIcon>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
