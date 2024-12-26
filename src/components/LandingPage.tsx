import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Divider from "./Divider"
import Tokenomics from "./Tokenomics"
import RoadMap from "./RoadMap"
import FAQ from "./FAQ"
import Footer from "./Footer"

export default function LandingPage() {
  return (
    <div className="relative">
      <div className="absolute md:relative top-0 right-2 z-50">
        <Navbar />
      </div>
      <div id="home"><Hero /></div>
      <Divider />
      <div id="about"><About /></div>
      <Divider />
      <div id="tokenomics"><Tokenomics /></div>
      <Divider />
      <div id="roadmap"><RoadMap /></div>
      <Divider />
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  )
}