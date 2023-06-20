import { Game } from "../../models/Game";
import front from "../../assets/front.png";
import { useState } from "react";
import './Card.scss'

interface ICardProps {
  card: Game;
}

export const Card = ({ card }: ICardProps) => {
    const [flipped, setFlipped] = useState(false)

    const handleClick = (name: string) => {
        setFlipped(!flipped)
        console.log(`Du har klickat på ${name}`)
    }

  return (
    <>
      <div
        className="card"
        key={card.id}
        onClick={() => handleClick(card.name)}
      >
        <div className={flipped ? "flipped" : ""} >
        <img className="backCard" src={card.img}/>
        <img className="frontCard" src={front}/>
        </div>

      </div>
    </>
  );
};
