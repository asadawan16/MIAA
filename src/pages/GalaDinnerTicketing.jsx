import TicketHeroSection from "../components/sections/galaticketing/TicketHeroSection"
import StageBannerSection from "../components/sections/galaticketing/StageBannerSection"
import LocationSection from "../components/sections/galaticketing/LocationSection"
import TransportSection from "../components/sections/galaticketing/TransportSection"
import ParkingSection from "../components/sections/galaticketing/ParkingSection"
import SectionDivider from "../components/ui/SectionDivider"

export default function GalaDinnerTicketing() {
  return (
    <>
      <TicketHeroSection />
      <StageBannerSection />

      <SectionDivider label="Venue" bg="bg-accent-cream" variant="light" />
      <LocationSection />

      <SectionDivider label="Getting Here" bg="bg-bg" variant="light" />
      <TransportSection />

      <SectionDivider label="Parking" bg="bg-accent-cream" variant="light" />
      <ParkingSection />
    </>
  )
}
