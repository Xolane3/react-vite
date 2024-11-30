import React from "react";
import "./Contact.css";
import email_icon from "../../assets/mail-open-alt-svgrepo-com.svg";
import whatsapp_icon from "../../assets/whatsapp-business-svgrepo-com.svg";
import facebook_icon from "../../assets/facebook-svgrepo-com.svg";
import github_icon from "../../assets/github-142-svgrepo-com.svg";

const Contact = (props) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a700592e-6b71-4803-a076-f13023ca5849");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="" /> <p>xkingc93@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={whatsapp_icon} alt="" /> <p>076 198 1783</p>
            </div>
            <div className="contact-detail">
              <img src={facebook_icon} alt="" /> <p>mediatwenty1</p>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="" /> <p>github.com/Xolane3</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
