import React from "react";
import './Xolane.css'
import my_resume from '../../assets/xolane_shabalala.pdf'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Xolane = () => {
  return(
    <div id='home' className="xolane">
        {/* <img src={profile_img} alt="" /> */}
        <h1><span>I'm Xolane Shabalala,</span> front-end developer based in SA.</h1>
        <p>I hold a N Dip IT: Multimedia from Tshwane University of Technology. Where I focused heavely in programming basics, design principal, web development & multimedia production. I am now seeking for Work Integrated Learning to finalize my qualification.</p>
        <div className="xolane-action">
            <div className="xolane-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="xolane-resume"><a href={my_resume} target="_blank" rel="noopener noreferrer" className="link">My resume</a></div>
        </div>
    </div>
  )
}

export default Xolane