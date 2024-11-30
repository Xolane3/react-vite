import React, { useState, useRef } from "react";
import './Navbar.css'
import logo from '../../assets/media21twologo.svg'
import underline from "../../assets/underline-1437-svgrepo-com.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import collaps from "../../assets/menu-2-svgrepo-com.svg";
import close_menu from "../../assets/times-close-error-fail-failure-failed-x-cross-bad-svgrepo-com.svg"
const Navbar = () => {
  const [menu,setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return(
    <div className="navbar">
     <img src={logo} alt="" className="nav-logo"/> 
      <img src={collaps} alt="" onClick={openMenu} className="collaps"/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close_menu} alt="" onClick={closeMenu} className="close-menu" />
           <li><AnchorLink className="anchor-link"  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="" className="underline"/>:<></>}</li>
           <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="" className="underline"/>:<></>}</li>
           <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="" className="underline"/>:<></>}</li>
           <li><AnchorLink className="anchor-link" offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt="" className="underline"/>:<></>}</li>
           <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" className="underline"/>:<></>}</li> 
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar