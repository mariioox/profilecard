import React, { useState } from "react";

function ProfileCard({ name, age, occupation, motto }) {
  const [showInfo, setShowInfo] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", width: "200px" }}>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{occupation}</p>

      {showInfo && (
        <div>
          <p>Hobbies: Coding, Basketball</p>
          <p>Location: Your city</p>
          <p>motto: {motto[currentIndex]}</p>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % motto.length)}
          >
            Next motto
          </button>
        </div>
      )}

      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
    </div>
  );
}

export default ProfileCard;
