import React from "react";
import "./About.css";
import profile_image from '../../assets/logo.svg'


const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_parten} alt="" />  */}
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
           <img src={profile_image} alt="" className="prof"/> 
        </div> */}
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I bring a blend of technical skills and creativity, with expertise
              in graphic design, 3D modeling, and video production, as well as
              web development. I'm also dedicated to continuous learning,
              keeping up with the latest trends and technologies to bring the
              most effective and innovative ideas to my clients.
            </p>
            <p>
              I'm passionate about empowering startups to establish a strong
              visual identity that captures their unique story and vision. I
              love using design, web development, and video to create compelling
              and memorable content that resonates with audiences and helps
              small businesses stand out in competitive markets.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C#</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>Unity</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Blender</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Photoshop</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Microsoft Suite</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About
