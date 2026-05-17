import { useParams, Link } from "react-router-dom"
import BlogDetailSection from "../components/sections/blog/BlogDetailSection"
import { BLOG_ARTICLES } from "../lib/constants"

export default function BlogDetail() {
  const { slug } = useParams()
  const article = BLOG_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-bg-deep px-6">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent-wheat mb-3">
            404
          </p>
          <h1 className="text-3xl md:text-4xl text-accent-cream mb-4">
            We couldn&apos;t find that post.
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return <BlogDetailSection article={article} />
}
