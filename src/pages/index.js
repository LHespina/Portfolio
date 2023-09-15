import React, { useState } from "react";
import Layout from "../components/layout";
import "../styles/home.css";
import School from "../images/school.png";
import Bullseye from "../images/bullseye.png";
import Gear from "../images/gear.png";
import Certificate from "../images/gear.png";
import Briefcase from "../images/briefcase.png";
import Lang from "../images/Language.png";

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [objectivesText, setObjectivesText] = useState("");

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null); 
    } else {
      setExpandedCard(index);
    }
  };




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
          school: "University of Cebu.",
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

        { skill: "Basic C Programming" },
        { skill: "Basic Java Programming" },
        { skill: "Basic Phython Programming" },
        { skill: "Basic Javascript Language" },
        { skill: "Basic HTML Language" },
        { skill: "Basic CSS language" },
        { skill: "Decision Making" },
        { skill: "Critical Thinking" },
        { skill: "Multi tasking" },
        { skill: "Adaptability" },
        { skill: "Computer Literate" },
        { skill: "Efficient" },
        { skill: "Able to work under Pressure" },
        { skill: "Teamwork" },
        { skill: "Written and Oral Communication" },
        { skill: "Fast Learner" },
      ],

    },
    {
      title: "Work Experience",
      icon: Briefcase,
      content: [
        {
         
          experienceDate: "2008-2013",
          experienceCompany: "catNmouse",
          experiencePosition: "Internet Cafe Manager",
          firstWork: "Assists customers when they have trouble or questions using computer software's.",
          secondWork: "Provide services such as encoding, printing, downloading and all other operations.",
          thirdWork: "Keep accurate records of logs and inventories of the shop.",
          fourthWork: "Time customers of the number of minutes or hours they will use the computer or internet.",
          fifthWork: "Provide excellent customer care.",
          sixthWork: "Answer telephone enquiries from students, attend to visitors and assist other staff in the organization with their enquiries.",
        },
        {
          
          experienceDate: "2018",
          experienceCompany: "CREOTEC Philippines Inc.",
          experiencePosition: "Human Resources(Work Immersion)",
          firstWork: "Monitor the activities of every other department.",
          secondWork: "Routine check of lockers and providing locker keys while ensuring its return by the end of the day.",
          thirdWork: "Verifying every department as they abide to the rules and regulations.",
          fourthWork: "Providing Employee Notice To Explain or ENTE to employees who has involvement in an alleged incident.",
          fifthWork: "Validating and collecting employee data.",
          sixthWork: "Providing Certificate of Completion for the attendees of different department. "
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
          description: "Excellent communication skills."
        },
        {
          language: "Tagalog",
          proficiency: "Proficiency: Intermediate",
          description: "Able to hold conversations and read/write in Tagalog."
        },
        {
          language: "English",
          proficiency: "Proficiency: Intermediate",
          description: "Able to hold conversations and read/write in Tagalog."
        }
      ],
    },
    {
      title: "Certifications",
      icon: Certificate,
      content: [

        {
          certificationTitle: "Entrepreneurship MOOC",

          date: "Date: 2022"
        },
        {
          certificationTitle: "Information Systems Auditing, Controls and Assurance Course",

          date: "Date: 2022"
        },
        {
          certificationTitle: "Information Systems and Business Processes Course",

          date: "Date: 2022"
        }

      ],
    },
  ];

  return (
    <Layout>
      <div className="container">

        <main className="main">
          <h2>DETAILS</h2>
          <div className="card-container">
            {cardData.map((card, index) => (

              <div
                key={index}
                className={`card ${expandedCard === index ? "expanded" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-inner">
                  {expandedCard !== index && (
                    <div className="card-front">
                      <img src={card.icon} /><p>My {card.title}</p>
                    </div>

                  )}

                  {expandedCard === index && (
                    <div
                      className={`card-back card-back-${index}`}
                    >



                      {card.content.map((item, i) => (

                        <div key={i} className={card.className || ""}>
                          <div className="Certification">
                            <h3>{item.certificationTitle}</h3>

                            <p> {item.date}</p>
                          </div>
                          <div className="Language">
                            <h3>{item.language}</h3>
                            <p>{item.proficiency}</p>
                            <p>{item.description}</p>
                          </div>

                          <div className="Educ">
                            <h4>{item.title}</h4>
                            <p>{item.school}</p>
                            <p>{item.dates}</p>
                          </div>

                          <div>
                            {card.title === "Skills and Qualifications" && (

                              <ul className="Skill">
                                <li >
                                  <strong>{item.skill}</strong>
                                </li>
                              </ul>
                            )}
                          </div>


                          <div className="Experience">
                            <p className="Experience1">{item.experienceDate}</p>
                            <strong><p className="Experience2">{item.experienceCompany}</p></strong>
                            <p className="Experience3">{item.experiencePosition}</p>
                            {card.title === "Work Experience" && (
                              <ul className="Worklist">
                                <li>{item.firstWork}</li>
                                <li>{item.secondWork}</li>
                                <li>{item.thirdWork}</li>
                                <li>{item.fourthWork}</li>
                                <li>{item.fifthWork}</li>
                                <li>{item.sixthWork}</li>
                              </ul>
                            )}
                          </div>

                          <div className="Objective"><strong>
                            <p className="Objective1">{item.objectiveLine1}</p>
                            <p className="Objective2">{item.objectiveLine2}</p>
                            <p className="Objective3">{item.objectiveLine3}</p>
                          </strong>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
