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
        <Hero />
        <Divider />
        <About/>
        <Divider />
        <Tokenomics />
        <Divider />
        <RoadMap />
        <Divider />
        <FAQ />
        <Footer />
    </div>
  )
} 