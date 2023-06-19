import { Game } from "../../models/Game";
import "./GameBoard.scss";
import front from '../../assets/front.png'

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


  return (
    <>
      <div className="game">
        <h1>Dog memory</h1>
        <div>
            {frontCards.map((front) => <div>
                <img src={front.img} className="frontCard"/>
            </div>)}
        </div>
      </div>
    </>
  );
};
