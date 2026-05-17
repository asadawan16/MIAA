import { useMemo } from "react"
import BlogHeroSection from "../components/sections/blog/BlogHeroSection"
import BlogGridSection from "../components/sections/blog/BlogGridSection"
import SectionDivider from "../components/ui/SectionDivider"
import { BLOG_ARTICLES } from "../lib/constants"

export default function Blog() {
  const updates = useMemo(
    () => BLOG_ARTICLES.filter((a) => a.category === "Update"),
    []
  )
  const posts = useMemo(
    () => BLOG_ARTICLES.filter((a) => a.category === "Blog"),
    []
  )

  return (
    <>
      <BlogHeroSection />

      <SectionDivider label="Updates" bg="bg-accent-cream" variant="light" />
      <BlogGridSection
        heading="MIAA Updates"
        intro="Check in to read about our latest news, reviews and happenings.
For up to the minute news and updates remember to follow us on our socials."
        articles={updates}
      />

      <SectionDivider label="Blog" bg="bg-bg" variant="light" />
      <BlogGridSection
        heading="MIAA Blog Posts"
        intro="Check in to hear from the MIAA team about all things Islamic art, literature and creative communities."
        articles={posts}
        bg="bg-bg"
      />
    </>
  )
}
