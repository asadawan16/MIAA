import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { BLOG_ARTICLES, ARTICLE_PLACEHOLDER_BODY } from "../../../lib/constants"
import { blogImages } from "./blogImages"

const SHARE_BUTTONS = [
  {
    label: "Share on X",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Share on Facebook",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Share on Instagram",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
]

export default function BlogDetailSection({ article }) {
  const related = BLOG_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === "Blog"
  ).slice(0, 3)

  return (
    <>
      {/* Hero — teal */}
      <section className="relative bg-bg-deep pt-28 md:pt-32 pb-10 md:pb-14">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-accent-wheat mb-3"
          >
            News &amp; Stories at MIAA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight"
          >
            {article.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-sm md:text-[15px] text-accent-cream/80 leading-relaxed max-w-2xl mx-auto"
          >
            {article.description}
          </motion.p>
        </div>
      </section>

      {/* Featured image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-bg-deep"
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={blogImages[article.image]}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Body + Share */}
      <section className="bg-bg py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            {/* Body */}
            <motion.div
              {...fadeInUp}
              className="flex flex-col gap-5 text-[15px] text-primary leading-relaxed"
            >
              {ARTICLE_PLACEHOLDER_BODY.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            {/* Share sidebar */}
            <motion.div
              {...fadeInUp}
              className="lg:sticky lg:top-32 flex lg:flex-col items-start gap-3"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-primary/60 lg:mb-1">
                Share Post
              </p>
              <div className="flex lg:flex-col gap-2">
                {SHARE_BUTTONS.map((btn) => (
                  <button
                    key={btn.label}
                    aria-label={btn.label}
                    className="w-9 h-9 flex items-center justify-center bg-primary/10 border border-primary/15 text-primary hover:bg-secondary-terra hover:border-secondary-terra hover:text-white transition-colors"
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related — Other Blog Posts */}
      <section className="bg-accent-cream py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <motion.div {...fadeInUp} className="mb-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
              More
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-primary tracking-tight leading-tight">
              Other Blog Posts
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10"
          >
            {related.map((post) => (
              <motion.article
                key={post.slug}
                {...staggerItem}
                className="group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block mb-4 overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={blogImages[post.image]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <h3 className="text-base md:text-lg font-semibold text-primary leading-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-[13px] text-primary/75 leading-relaxed mb-3">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary-terra hover:text-secondary-rust transition-colors mt-auto"
                >
                  Read More
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
