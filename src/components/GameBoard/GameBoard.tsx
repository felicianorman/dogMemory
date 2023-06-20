import { Game } from "../../models/Game";
import "./GameBoard.scss";
import dog1 from "../../assets/dog1.png";
import dog2 from "../../assets/dog2.png";
import dog3 from "../../assets/dog3.png";
import dog4 from "../../assets/dog4.png";
import dog5 from "../../assets/dog5.png";
import dog6 from "../../assets/dog6.png";
import { Card } from "../Card/Card";

export const GameBoard = () => {
  const cards: Game[] = [
    { img: dog1, name: "dog1", flipped: false, id: Math.random() },
    { img: dog1, name: "dog1", flipped: false, id: Math.random() },
    { img: dog2, name: "dog2", flipped: false, id: Math.random() },
    { img: dog2, name: "dog2", flipped: false, id: Math.random() },
    { img: dog3, name: "dog3", flipped: false, id: Math.random() },
    { img: dog3, name: "dog3", flipped: false, id: Math.random() },
    { img: dog4, name: "dog4", flipped: false, id: Math.random() },
    { img: dog4, name: "dog4", flipped: false, id: Math.random() },
    { img: dog5, name: "dog5", flipped: false, id: Math.random() },
    { img: dog5, name: "dog5", flipped: false, id: Math.random() },
    { img: dog6, name: "dog5", flipped: false, id: Math.random() },
    { img: dog6, name: "dog5", flipped: false, id: Math.random() },
  ];

  return (
    <>
      <div className="game--wrapper">
        <h1>Dog memory</h1>
        <div className="stats">
          <h2>Poäng: 0</h2> <h2>Tid: 0 s</h2>
        </div>
        
        <div className="game">
          {cards.map((card) => (
            <Card card={card}></Card>
          ))}
        </div>
      </div>
    </>
  );
};
