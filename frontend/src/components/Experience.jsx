import React, { useState, useEffect } from "react";
import axios from "axios";

function Experience() {
  let currentCard = 1;

  function showCard(direction) {
    if (direction === "left") {
      currentCard = 1;
    } else if (direction === "right") {
      currentCard = 2;
    }

    document.querySelector(".card1").style.display =
      currentCard === 1 ? "block" : "none";
    document.querySelector(".card2").style.display =
      currentCard === 2 ? "block" : "none";
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/experience"
        );
        const experiences = response.data;
        const data = experiences.map((experience) => ({
          companyName: experience.company_name,
          jobTitle: experience.job_title,
          startDate: experience.start_date,
          endDate: experience.end_date,
          accomplishments: experience.accomplishments,
        }));
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>EXPERIENCE</h1>

      <div className="left-right">
        <div className="arrow-container">
          <div className="left-arrow arrow" onClick={() => showCard("left")}>
            &lt;
          </div>
        </div>

        {data.map((experience, index) => (
          <div
            key={index}
            className={`card${index + 1}`}
            style={{ display: currentCard === index + 1 ? "block" : "none" }}
          >
            <div className="card">
              <div className="container">
                <div className="title-date">
                  <div className="title">
                    <h2>{experience.companyName} </h2>
                  </div>
                  <div className="date">
                    <h2>{experience.startDate}</h2>
                    <h2>{experience.endDate}</h2>
                  </div>
                </div>
                <p>{experience.accomplishments}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="arrow-container">
          <div className="right-arrow arrow" onClick={() => showCard("right")}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
