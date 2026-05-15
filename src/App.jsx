import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import IslamicArt from "./pages/IslamicArt"
import OffsiteEvents from "./pages/OffsiteEvents"
import Events from "./pages/Events"
import CommunityEngagement from "./pages/CommunityEngagement"
import Timeline from "./pages/Timeline"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import Volunteer from "./pages/Volunteer"
import SupportUs from "./pages/SupportUs"
import GalaDinner from "./pages/GalaDinner"
import GalaDinnerTicketing from "./pages/GalaDinnerTicketing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="islamic-art" element={<IslamicArt />} />
          <Route path="offsite-events" element={<OffsiteEvents />} />
          <Route path="events" element={<Events />} />
          <Route path="community-engagement" element={<CommunityEngagement />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="support-us" element={<SupportUs />} />
          <Route path="gala-dinner" element={<GalaDinner />} />
          <Route path="gala-dinner/tickets" element={<GalaDinnerTicketing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
