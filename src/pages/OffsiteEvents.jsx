import EventsHeroSection from "../components/sections/offsiteevents/EventsHeroSection"
import OffsiteProgramsSection from "../components/sections/offsiteevents/OffsiteProgramsSection"
import FamiliesDiscoverSection from "../components/sections/offsiteevents/FamiliesDiscoverSection"
import PreviousEventsSection from "../components/sections/offsiteevents/PreviousEventsSection"
import SectionDivider from "../components/ui/SectionDivider"

export default function OffsiteEvents() {
  return (
    <>
      <EventsHeroSection />

      <SectionDivider label="Upcoming Events" bg="bg-bg-deep" variant="dark" />
      <OffsiteProgramsSection />

      <SectionDivider label="Discover More" bg="bg-accent-cream" variant="light" />
      <FamiliesDiscoverSection />

      <SectionDivider label="Past Events" bg="bg-bg" variant="light" />
      <PreviousEventsSection />
    </>
  )
}
