import { Game } from "../../models/Game";
import "./GameBoard.scss";
import front from "../../assets/front.png";
import dog1 from "../../assets/dog1.png";
import dog2 from "../../assets/dog2.png";
import dog3 from "../../assets/dog3.png";
import dog4 from "../../assets/dog4.png";
import dog5 from "../../assets/dog5.png";
import dog6 from "../../assets/dog6.png";

export const GameBoard = () => {
  const frontCards: Game[] = [
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
    { img: front, name: "front", flipped: false },
  ];

  const backCards: Game[] = [
    { img: dog1, name: "dog1", flipped: false },
    { img: dog1, name: "dog1", flipped: false },
    { img: dog2, name: "dog2", flipped: false },
    { img: dog2, name: "dog2", flipped: false },
    { img: dog3, name: "dog3", flipped: false },
    { img: dog3, name: "dog3", flipped: false },
    { img: dog4, name: "dog4", flipped: false },
    { img: dog4, name: "dog4", flipped: false },
    { img: dog5, name: "dog5", flipped: false },
    { img: dog5, name: "dog5", flipped: false },
    { img: dog6, name: "dog5", flipped: false },
    { img: dog6, name: "dog5", flipped: false },
  ];

  return (
    <>
      <div className="game--wrapper">
        <h1>Dog memory</h1>
        <div className="stats">
          <h2>Poäng: 0</h2> <h2>Tid: 0 s</h2>
        </div>
        <div className="game">
          {frontCards.map((front) => (
            
            <img src={front.img} className="frontCard" />
          ))}
          {backCards.map((back) => (
            <img src={back.img} className="backCard" />
          ))}
        </div>
      </div>
    </>
  );
};
