import React, { useState } from "react";
import "../styles/home.css";
import profileImage from "../images/Lanz.png";
import Instagramicon from "../images/Instagram-Icon.png";
import Facebookicon from "../images/fb icon.png";


const Layout = ({ children }) => {
  const [isContactOverlayVisible, setContactOverlayVisible] = useState(false);
  const [isAboutOverlayVisible, setAboutOverlayVisible] = useState(false);
  const [isSidebarHovered, setSidebarHovered] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const toggleContactOverlay = () => {
    setContactOverlayVisible(!isContactOverlayVisible);
    setAboutOverlayVisible(false);
    setShowBack(false);
  };

  const toggleAboutOverlay = () => {
    setAboutOverlayVisible(!isAboutOverlayVisible);
    setContactOverlayVisible(false);
    setShowBack(false);
  };

  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied to clipboard: " + text);
  };

  const handlePhoneClick = () => {
    const phoneNumber = "09324228682"; // Replace with the actual phone number
    copyToClipboard(phoneNumber);
  };

  return (
    <div className={`page-container ${isSidebarHovered ? "sidebar-hovered" : ""}`}>
      <header className="header">
        <h1>My Portfolio</h1>
      </header>
      <aside
  className={`sidebar ${isSidebarHovered ? "hovered" : ""}`}
  onMouseEnter={() => setSidebarHovered(true)}
  onMouseLeave={() => setSidebarHovered(false)}
>
  <div className="front-content">
    <strong><p>CHECK ME OUT!</p></strong>
  </div>

  <div className={`back-content ${showBack ? "show" : ""}`}>
    <div className="profile-image-container">
      <img src={profileImage} alt="Lanz" className="profile-image" />
    </div>
    <div>
      <h1>Lanz Harvee Espina</h1>
      <p>Student/Intern</p>
    </div>
    <div>
    <button className="side-button" onClick={toggleAboutOverlay}>
      About
    </button>
    </div>
    <div>
    <button className="side-button" onClick={toggleContactOverlay}>
      Contact
    </button>
    </div>
  </div>
</aside>

      <main className="main">{children}</main>
      <footer className="footer">
        <div className="Footer-extras">{/* ... (your existing footer content) */}</div>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Lanz Harvee Espina</p>
        </div>
      </footer>
      {isAboutOverlayVisible && (
        <div className="about-overlay">
          <h2>About Me</h2>
          <p >Hello, I'm Lanz! 🌟

I'm a passionate student and intern based in Cebu Province. With a deep fascination for Programming, Management and Gaming, I thrive on the fact that I will face the real world soon.

My journey in Information System has been an incredible adventure, allowing me to acquire plenty of knowledge and experience in the world of Technology and Business. I constantly seek opportunities to expand my horizons, learn new things, and collaborate with like-minded individuals.

When I'm not working or studying, you can find me playing computer games and hanging out with friends. I believe in the saying that blessings come to those who persist in doing good, and I'm always eager to make a positive impact on the world around me.

Let's connect and explore the endless possibilities together! 🚀</p>
          <button onClick={toggleAboutOverlay}>Close</button>
        </div>
      )}
      {isContactOverlayVisible && (
        <div className="contact-overlay">
          <h2>Contact Me</h2>
          <div onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
            <p>Phone: 09324228682</p>
          </div>
          <p>Address:</p>
          <a href="https://www.google.com/maps/place/339+A.+Del+Rosario+St,+Mandaue+City,+6000+Cebu/">
            <p>339 A Del Rosario St. Guizo Mandaue City</p>
          </a>
          
          <p>Email: </p>
          <p onClick={() => copyToClipboard("lanzharveeespina@yahoo.com")} id="email">
            lanzharveeespina@yahoo.com
          </p>
          <div className="social-media-icons">
            <p>Socials:</p>
            <a href="https://www.facebook.com/lanz.espina.12">
              <img src={Facebookicon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/espina_lanz/">
              <img src={Instagramicon} alt="Instagram" className="social-icon"/>
            </a>
          </div>
          <button onClick={toggleContactOverlay}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Layout;