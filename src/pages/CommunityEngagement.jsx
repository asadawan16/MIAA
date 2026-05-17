import EducationHeroSection from "../components/sections/community/EducationHeroSection"
import CommunityCultureSection from "../components/sections/community/CommunityCultureSection"
import SectionDivider from "../components/ui/SectionDivider"

export default function CommunityEngagement() {
  return (
    <>
      <EducationHeroSection />

      <SectionDivider label="Community Engagement" bg="bg-bg" variant="light" />
      <CommunityCultureSection />
    </>
  )
}
