import SMWFHeroSection from "../components/sections/smwf/SMWFHeroSection"
import SMWFMarqueeBanner from "../components/sections/smwf/SMWFMarqueeBanner"
import SMWFAboutSection from "../components/sections/smwf/SMWFAboutSection"
import SMWFFestivalDaySection from "../components/sections/smwf/SMWFFestivalDaySection"
import SMWFTicketsSection from "../components/sections/smwf/SMWFTicketsSection"
import SMWFSideEventsSection from "../components/sections/smwf/SMWFSideEventsSection"
import SMWFPanellistsSection from "../components/sections/smwf/SMWFPanellistsSection"
import SMWFCountdownSection from "../components/sections/smwf/SMWFCountdownSection"
import SMWFProgramHighlightsSection from "../components/sections/smwf/SMWFProgramHighlightsSection"
import SMWFTurquoiseMarquee from "../components/sections/smwf/SMWFTurquoiseMarquee"
import SMWFStoriesWeInheritSection from "../components/sections/smwf/SMWFStoriesWeInheritSection"
import SMWFPastFestivalsSection from "../components/sections/smwf/SMWFPastFestivalsSection"
import SMWFCommunitySection from "../components/sections/smwf/SMWFCommunitySection"
import SMWFJoinCommunitySection from "../components/sections/smwf/SMWFJoinCommunitySection"
import SMWFFooter from "../components/sections/smwf/SMWFFooter"

export default function SMWF() {
  return (
    <>
      <SMWFHeroSection />
      <SMWFMarqueeBanner />
      <SMWFAboutSection />
      <div className="px-6 md:px-10 lg:px-16 2xl:px-20 3xl:px-24" style={{ backgroundColor: "#F3EFEB" }}>
        <SMWFFestivalDaySection />
      </div>
      <div className="px-6 md:px-10 lg:px-16 2xl:px-20 3xl:px-24" style={{ backgroundColor: "#F3EFEB" }}>
        <SMWFTicketsSection />
      </div>
      <SMWFSideEventsSection />
      <SMWFPanellistsSection />
      <SMWFCountdownSection />
      <SMWFProgramHighlightsSection />
      <SMWFStoriesWeInheritSection />
      <div className="px-6 md:px-10 lg:px-16 2xl:px-20 3xl:px-24" style={{ backgroundColor: "#FFFFFF" }}>
        <SMWFPastFestivalsSection />
      </div>
      <SMWFTurquoiseMarquee />
      <SMWFCommunitySection />
      <SMWFJoinCommunitySection />
      <SMWFFooter />
    </>
  )
}
