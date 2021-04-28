import dice1 from "./dice1.svg";
import dice2 from "./dice2.svg";
import dice3 from "./dice3.svg";
import dice4 from "./dice4.svg";
import dice5 from "./dice5.svg";
import dice6 from "./dice6.svg";

const images = { dice1, dice2, dice3, dice4, dice5, dice6 };

function DiceRoller(props) {
  const src = images["dice" + props.diceNumber];
  const alt = `Dice ${props.diceNumber}`;
  return (
    <div>
      <div className="d-inline-flex flex-row align-items-center">
        <h1 className="p-2 h3">
          Dice Game{" "}
          <button
            className="ml-2 mr-2 btn btn-primary btn-sm"
            onClick={props.rollDice}
          >
            Roll
          </button>{" "}
          {props.diceNumber && (
            <img src={src} alt={alt} width="45" height="45" />
          )}
        </h1>
      </div>
    </div>
  );
}

export default DiceRoller;
