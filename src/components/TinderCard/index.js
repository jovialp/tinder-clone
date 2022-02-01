import React, { useState } from "react";
import "./tinderCard.css";

import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Jeff Bezos",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: ", nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name, "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person, id) => (
          <TinderCard
            className="swipe"
            key={id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imageUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
