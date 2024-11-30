import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Xolane from "./Components/Xolane/Xolane";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return(
    <div>
     <Navbar/>
     <Xolane/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App