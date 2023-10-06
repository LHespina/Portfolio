import React, { useState } from "react";
import "../styles/home.css";
import School from "../images/school.png";
import Bullseye from "../images/bullseye.png";
import Gear from "../images/gear.png";
import Certificate from "../images/certificate.png";
import Briefcase from "../images/briefcase.png";
import Lang from "../images/Language.png";
import styled from 'styled-components';

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };
  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };
  const skillsListStyles = {
    marginTop: -35, 
    marginBottom: 0, 
  };
  const progressStyles = {
    backgroundColor: "#ddd",
    height: "10px",
    margin: "5px 0",
  };
  
  const progressBarStyles = {
    height: "100%",
    backgroundColor: "#650000", // You can change the color as needed
    transition: "width 1s ease-in-out",
  };
  
  const GlowingText = styled.h2`
  font-family: "Helvetica";
  color: white;
  text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  animation: glowing 2s infinite;
  
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
  const cardData = [
    {
      title: "Educational Background",
      icon: School,
      content: [
        {
          title: "Primary Education",
          school: "Colegio De La Inmaculada Concepcion.",
          dates: "2007 - 2012",
        },
        {
          title: "Secondary Education",
          school: "Colegio De La Inmaculada Concepcion.",
          dates: "2012 - 2017",
        },
        {
          title: "Upper Secondary Education",
          school: "Colegio De La Inmaculada Concepcion.",
          dates: "2017 - 2019",
        },
        {
          title: "Tertiary Education",
          school: "University of Cebu",
          dates: "2019 - Present",
        },
      ],
    },
    {
      title: "Objectives",
      icon: Bullseye,
      content: [
        {
          objectiveLine1:
            "Motivated and passionate college student with the intention of gaining admission",
          objectiveLine2:
            " into programs and organizations which could hone my knowledge and abilities ",
          objectiveLine3:
            "as I offer my service by being an asset to your company.",
        },
      ],
    },
    {
      title: "Skills and Qualifications",
      icon: Gear,
      content: [
        { skill: "Basic C Programming",  progressWidth: "90%"},
        { skill: "Basic Java Programming",   progressWidth: "90%"},
        { skill: "Basic Python Programming", progressWidth: "70%" },
        { skill: "Basic Javascript Language", progressWidth: "70%" },
        { skill: "Basic HTML Language", progressWidth: "70%"  },
        { skill: "Basic CSS language",  progressWidth: "60%" },
        { skill: "Decision Making", },
        { skill: "Critical Thinking",  },
        { skill: "Multi-tasking",  },
        { skill: "Adaptability",  },
        { skill: "Computer Literate", },
        { skill: "Efficient",  },
        { skill: "Able to work under Pressure",  },
        { skill: "Teamwork",  },
        { skill: "Written and Oral Communication",  },
        { skill: "Fast Learner",  },
      ],
      sectionClass: "skills-section",
    },
    {
      title: "Work Experience",
      icon: Briefcase,
      content: [
        {
          experienceDate: "2008-2013",
          experienceCompany: "catNmouse",
          experiencePosition: "Internet Cafe Manager",
          firstWork: "Assists customers when they have trouble or questions using computer software.",
          secondWork: "Provide services such as encoding, printing, downloading, and all other operations.",
          thirdWork: "Keep accurate records of logs and inventories of the shop.",
          fourthWork: "Time customers of the number of minutes or hours they will use the computer or internet.",
          fifthWork: "Provide excellent customer care.",
          sixthWork: "Answer telephone inquiries from students, attend to visitors and assist other staff in the organization with their inquiries.",
        },
        {
          experienceDate: "2018",
          experienceCompany: "CREOTEC Philippines Inc.",
          experiencePosition: "Human Resources (Work Immersion)",
          firstWork: "Monitor the activities of every other department.",
          secondWork: "Routine check of lockers and providing locker keys while ensuring its return by the end of the day.",
          thirdWork: "Verifying every department as they abide to the rules and regulations.",
          fourthWork: "Providing Employee Notice To Explain or ENTE to employees who have involvement in an alleged incident.",
          fifthWork: "Validating and collecting employee data.",
          sixthWork: "Providing Certificate of Completion for the attendees of different departments.",
        },
      ],
    },
    {
      title: "Language",
      icon: Lang,
      content: [
        {
          language: "Bisaya",
          proficiency: "Proficiency: Fluent",
          description: "Excellent communication skills.",
        },
        {
          language: "Tagalog",
          proficiency: "Proficiency: Intermediate",
          description: "Able to hold conversations and read/write in Tagalog.",
        },
        {
          language: "English",
          proficiency: "Proficiency: Intermediate",
          description: "Able to hold conversations and read/write in English.",
        },
      ],
    },
    {
      title: "Certifications",
      icon: Certificate,
      content: [
        {
          certificationTitle: "Entrepreneurship MOOC",
          date: "Date: 2022",
        },
        {
          certificationTitle: "Information Systems Auditing, Controls and Assurance Course",
          date: "Date: 2022",
        },
        {
          certificationTitle: "Information Systems and Business Processes Course",
          date: "Date: 2022",
        },
      ],
    },
  ];
  const cardFrontStyles = {
    backgroundColor: "#fff", // Change the background color here
    padding: "20px",
  };

  const cardContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Two columns
    maxWidth: "800px", // Adjust the maximum width as needed
    margin: "200px auto", // Center the container
    backgroundColor:'#171717',
    boxShadow: "0px 0px 10px 10px red",
    
  };
  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontFamily: "Helvetica",
  };

  const overlayContentStyles = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  };

  const expandedCardStyles = {
    transform: "rotate(540deg)",
  };

  const upsideDownCardStyles = {
    transform: "rotate(180deg)",
  };
  const cardStyles = {
    width: "200px",
    height: "200px",
    backgroundColor: "#fff",
    margin: "20px",
    display: "inline-block",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    boxShadow: "0px 0px 10px 10px rgba(139, 0, 0, 0.7)",
    transform: "scale(1)",
    cursor: "pointer",
    fontFamily: "Helvetica",
    position: "relative",
  };
  
  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    minHeight: "100vh", // Make sure it takes at least the full viewport height
    backgroundColor: "#0f0f0f",
  };

  return (
    <main style={{ backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
      <section id="personal-details" style={sectionStyles}>
        <GlowingText>My Personal Details</GlowingText>
        <div style={cardContainerStyles}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${
                expandedCard === index ? "expanded" : ""
              } ${index % 2 === 0 ? "upright" : "upside-down"}`}
              onClick={() => handleCardClick(index)}
              style={{
                ...cardStyles,
                ...(expandedCard === index
                  ? expandedCardStyles
                  : index % 2 === 0
                  ? {}
                  : upsideDownCardStyles),
              }}
            >
              <div className="card-inner">
                <div className="card-front" style={cardFrontStyles}>
                  <img
                    src={card.icon}
                    alt={`My ${card.title}`}
                    style={{
                      backgroundColor: '#fff',
                      width: '100px',
                      padding: '30px',
                      transform: index % 2 === 0 ? 'rotate(360deg)' : 'rotate(540deg)',
                    }}
                  />
                  <p>My {card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {expandedCard !== null && (
          <div style={overlayStyles} onClick={handleOverlayClick}>
            <div style={overlayContentStyles}>
              <button
                style={{
                  backgroundColor: "#3e363f",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedCard(null)}
              >
                Back
              </button>
              <h3 style={{ fontFamily: "Helvetica" }}>
                {cardData[expandedCard].title}
              </h3>
              {cardData[expandedCard].content.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {/* Render the content details here based on your data structure */}
                  {item.title && (
                    <p style={{ fontFamily: "Helvetica" }}>
                      Title: {item.title}
                    </p>
                  )}
                  {item.school && (
                    <p style={{ fontFamily: "Helvetica" }}>
                      School: {item.school}
                    </p>
                  )}
                  {item.dates && (
                    <p style={{ fontFamily: "Helvetica" }}>
                      Dates: {item.dates}
                    </p>
                  )}
                  {/* Add similar rendering for other content properties */}
                  <div className="Experience">
                    <p className="Experience1" style={{ fontFamily: "Helvetica" }}>
                      {item.experienceDate}
                    </p>
                    <strong>
                      <p className="Experience2" style={{ fontFamily: "Helvetica" }}>
                        {item.experienceCompany}
                      </p>
                    </strong>
                    <p className="Experience3" style={{ fontFamily: "Helvetica" }}>
                      {item.experiencePosition}
                    </p>

                    {expandedCard === 3 && (
                      <ul>
                        <li>{item.firstWork}</li>
                        <li>{item.secondWork}</li>
                        <li>{item.thirdWork}</li>
                        <li>{item.fourthWork}</li>
                        <li>{item.fifthWork}</li>
                        <li>{item.sixthWork}</li>
                      </ul>
                    )}
                  </div>
                  <div className="Objective">
                    <strong>
                      <p className="Objective1">{item.objectiveLine1}</p>
                      <p className="Objective2">{item.objectiveLine2}</p>
                      <p className="Objective3">{item.objectiveLine3}</p>
                    </strong>
                  </div>
                  <div>
  {expandedCard === 2 && (
    <ul className="skills-list" style={skillsListStyles}>
      {item.skill && (
        <li style={{ fontFamily: "Helvetica" }}>
          {item.skill}
          <div style={progressStyles}>
            <div
              style={{
                ...progressBarStyles,
                width: item.progressWidth || "100%", 
              }}
            >
              
            </div>
          </div>
        </li>
      )}
    </ul>
  )}
</div>
                  <div className="Certification">
                    <h3>{item.certificationTitle}</h3>
                    <p>{item.date}</p>
                  </div>
                  <div className="Language">
                    <h3>{item.language}</h3>
                    <p>{item.proficiency}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
