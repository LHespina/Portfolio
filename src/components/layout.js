import React, { useState } from "react";
import "../styles/home.css";
import profileImage from "../images/Lanz.png";
import Instagramicon from "../images/Instagram-Icon.png";
import Facebookicon from "../images/fb icon.png";
import styled from 'styled-components';

// Define a styled component for the navbar
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #171717;
  color: #73a580;
  font-size: 24px;
  padding: 20px;
`;

// Styled component for the navigation links
const Navbar = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: #ffff;
  }
`;


const GlowingText = styled.h2`
  font-family: "Helvetica";
  color: white;
  text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  animation: glowing 2s infinite;
  a {
    color: #fff; /* Text color */
    text-decoration: none; /* Remove underline */
  }
  @keyframes glowing {
    0% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
    50% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
  }
`;

const GlowingButton = styled.button`
  background-color: #3e363f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  animation: glowing 2s infinite;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #8b0000;
  }

  @keyframes glowing {
    0% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
    50% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
  }
`;

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
<<<<<<< HEAD
    const phoneNumber = "09324228682";
=======
    const phoneNumber = "09324228682"; 
>>>>>>> 5087d985e93faf7b8287e59d0553a40cca4fc229
    copyToClipboard(phoneNumber);
  };

  return (
    <div className={`page-container ${isSidebarHovered ? "sidebar-hovered" : ""}`}>
    <Header>
      <GlowingText>
        <a href="#home">Welcome to my Personal Portfolio</a>
      </GlowingText>
      <Navbar>
        <ul>
          <li>
            <GlowingText><a href="#personal-details">Personal Details</a></GlowingText>
          </li>
          <li>
          <GlowingText><a href="#ask-me">Ask me</a></GlowingText>
          </li>
          <li>
          <GlowingText> <a href="#comments">Comments</a></GlowingText>
          </li>
        </ul>
      </Navbar>
    </Header>
      <aside
        className={`sidebar ${isSidebarHovered ? "hovered" : ""}`}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      >
        <div className="front-content">
          <strong><GlowingText>CHECK ME OUT!</GlowingText></strong>
        </div>

        <div className={`back-content ${showBack ? "show" : ""}`}>
          <div className="profile-image-container">
            <img src={profileImage} alt="Lanz" className="profile-image" />
          </div>
          <div>
            <GlowingText>Lanz Harvee Espina</GlowingText>
            <GlowingText>Student/Intern</GlowingText>
          </div>
          <div>
            <GlowingButton className="side-button" onClick={toggleAboutOverlay}>
              About
            </GlowingButton>
          </div>
          <div>
            <GlowingButton className="side-button" onClick={toggleContactOverlay}>
              Contact
            </GlowingButton>
          </div>
        </div>
      </aside>

<<<<<<< HEAD
      <main className="mainLayout" style={{ backgroundColor: '#650000' }}>{children}</main>
      <footer className="footer" style={{ backgroundColor: '#171717' }}>
=======
      <main className="main">{children}</main>
      <footer className="footer">
>>>>>>> 5087d985e93faf7b8287e59d0553a40cca4fc229
        <div className="Footer-extras">{}</div>
        <div className="footer-content">
          <p style={{ color: 'white', fontFamily: "Helvetica" }}>&copy; {new Date().getFullYear()} Lanz Harvee Espina</p>
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
          <a href="https://www.google.com/maps/place/339+A.+Del+Rosario+St,+Mandaue+City,+6000+Cebu/" >
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
              <img src={Instagramicon} alt="Instagram" className="social-icon" />
            </a>
          </div>
          <button onClick={toggleContactOverlay}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Layout;
