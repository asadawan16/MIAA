import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { blogImages } from "./blogImages"

const PAGE_SIZE = 6

export default function BlogGridSection({
  heading,
  intro,
  articles,
}) {
  const [page, setPage] = useState(0)

  const pageCount = Math.max(1, Math.ceil(articles.length / PAGE_SIZE))
  const visible = useMemo(() => {
    const start = page * PAGE_SIZE
    return articles.slice(start, start + PAGE_SIZE)
  }, [articles, page])

  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading row */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-medium text-primary tracking-tight leading-tight">
            {heading}
          </h2>
          {intro && (
            <p className="md:max-w-md text-sm text-primary/75 leading-relaxed md:text-right">
              {intro}
            </p>
          )}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            {...staggerContainer}
            initial="initial"
            animate="whileInView"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
          >
            {visible.map((post) => (
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
        </AnimatePresence>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-8 h-8 flex items-center justify-center text-[11px] font-semibold tracking-wider rounded-sm transition-colors ${
                  i === page
                    ? "bg-secondary-terra text-white"
                    : "bg-transparent text-primary/60 border border-primary/20 hover:border-primary/50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
