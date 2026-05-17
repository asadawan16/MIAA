import AboutHeroSection from "../components/sections/about/AboutHeroSection"
import DirectorMessageSection from "../components/sections/about/DirectorMessageSection"
import JourneySection from "../components/sections/about/JourneySection"
import WesternSydneySection from "../components/sections/about/WesternSydneySection"
import GuidedSection from "../components/sections/about/GuidedSection"
import StrategicDirectionSection from "../components/sections/about/StrategicDirectionSection"
import PeopleSection from "../components/sections/about/PeopleSection"
import ContactSection from "../components/sections/homepage/ContactSection"

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <DirectorMessageSection />
      <JourneySection />
      <WesternSydneySection />
      <GuidedSection />
      <StrategicDirectionSection />
      <PeopleSection />
      <ContactSection />
    </>
  )
}
