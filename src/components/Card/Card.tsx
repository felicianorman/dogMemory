import { Game } from "../../models/Game";
import front from "../../assets/front.png";
import { useState } from "react";
import "./Card.scss";

interface ICardProps {
  card: Game;
  match: () => void;
}

export const Card = ({ card, match }: ICardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState(card);

  const handleClick = (clickedCard: string) => {
    setFlipped(!flipped);
    const flippedCard = document.querySelectorAll(".flipped");
    console.log(card);
    match();

    if (flippedCard.length === 2) {
      console.log("hej");

      if(flippedCard[0].getAttribute("name") === flippedCard[1].getAttribute("name")) {
        console.log('match')
      }
    }
  };

  return (
    <>
      <div
        className="card"
        key={card.id}
        onClick={() => handleClick}
      >
        <div className={flipped ? "flipped" : ""}>
          <img className="backCard" src={card.img} />
          <img className="frontCard" src={front} />
        </div>
      </div>
    </>
  );
};
