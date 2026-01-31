import React, { useEffect, useState } from "react";

function ProfileCard({ name, age, occupation, motto }) {
  //   const [showInfo, setShowInfo] = useState(false);
  const savedShowInfo = JSON.parse(localStorage.getItem("showInfo")) || false;
  const [showInfo, setShowInfo] = useState(savedShowInfo);
  const [showSkills, setShowSkills] = useState(false);
  const [currentMottoIndex, setCurrentMottoIndex] = useState(0);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
    localStorage.setItem("showInfo", JSON.stringify(!showInfo));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMottoIndex((prevIndex) => (prevIndex + 1) % motto.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div style={{ border: "1px solid blue", padding: "10px", width: "200px" }}>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{occupation}</p>

      {showInfo && (
        <div>
          <p>Hobbies: Coding, Basketball, Anime</p>
          <p>Location: Your city</p>
          <p>motto: {motto[currentMottoIndex]}</p>
          <button
            onClick={() =>
              setCurrentMottoIndex((currentMottoIndex + 1) % motto.length)
            }
          >
            Next motto
          </button>
        </div>
      )}

      {showSkills && (
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Video editing</li>
            <li>Photography</li>
            <li>Chess</li>
          </ul>
        </div>
      )}

      <button onClick={toggleInfo}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
      <button onClick={() => setShowSkills(!showSkills)}>
        {showInfo ? "Hide Skills" : "Show Skills"}
      </button>
    </div>
  );
}

export default ProfileCard;
