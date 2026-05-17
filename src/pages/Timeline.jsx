import TimelineHeroSection from "../components/sections/timeline/TimelineHeroSection"
import ArchitectureSection from "../components/sections/timeline/ArchitectureSection"
import RPInfrastructureSection from "../components/sections/timeline/RPInfrastructureSection"
import ProjectTimelineSection from "../components/sections/timeline/ProjectTimelineSection"
import SectionDivider from "../components/ui/SectionDivider"

export default function Timeline() {
  return (
    <>
      <TimelineHeroSection />

      <SectionDivider label="Architectural Vision" bg="bg-accent-cream" variant="light" />
      <ArchitectureSection />

      <SectionDivider label="Project Management" bg="bg-bg" variant="light" />
      <RPInfrastructureSection />

      <SectionDivider label="Timeline" bg="bg-bg-deep" variant="dark" />
      <ProjectTimelineSection />
    </>
  )
}
