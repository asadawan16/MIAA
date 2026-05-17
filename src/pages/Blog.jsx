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

      <SectionDivider label="MIAA Updates" bg="bg-bg" variant="light" />
      <BlogGridSection
        heading="MIAA Updates"
        intro="A look at the latest milestones, partnerships and behind-the-scenes progress as MIAA takes shape."
        articles={updates}
      />

      <SectionDivider label="MIAA Blog Posts" bg="bg-bg" variant="light" />
      <BlogGridSection
        heading="MIAA Blog Posts"
        intro="Stories, essays and reflections on Islamic art, artists and the culture being made today."
        articles={posts}
      />
    </>
  )
}
