import Header from "../Component/Header"
import Start from "../Component/Start"
import About from "../Component/About"
import Product from "../Component/Product"
import Footer from "../Component/Footer"

function LandingPage() {
  return (
    <div>
        <Header />
        <div id="home"><Start /></div>
        <div id="about"><About /></div>
        <div id="product"><Product /></div>
        <Footer />
    </div>
  )
}

export default LandingPage