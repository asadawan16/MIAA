import SupportHeroSection from "../components/sections/supportus/SupportHeroSection"
import FoundingMemberSection from "../components/sections/supportus/FoundingMemberSection"
import OtherDonationsSection from "../components/sections/supportus/OtherDonationsSection"
import MIAAKidsSection from "../components/sections/supportus/MIAAKidsSection"
import VolunteerSection from "../components/sections/supportus/VolunteerSection"
import VolunteerFAQSection from "../components/sections/supportus/VolunteerFAQSection"
import SectionDivider from "../components/ui/SectionDivider"

export default function SupportUs() {
  return (
    <>
      <SupportHeroSection />

      <SectionDivider label="Founding Members" bg="bg-accent-cream" variant="light" />
      <FoundingMemberSection />

      <SectionDivider label="Other Ways to Give" bg="bg-bg" variant="light" />
      <OtherDonationsSection />

      <SectionDivider label="MIAA Kids" bg="bg-bg" variant="light" />
      <MIAAKidsSection />

      <SectionDivider label="Volunteer" bg="bg-accent-cream" variant="light" />
      <VolunteerSection />

      <SectionDivider label="Volunteer FAQ" bg="bg-bg" variant="light" />
      <VolunteerFAQSection />
    </>
  )
}
