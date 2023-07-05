import { useContext } from "react";
import "./Menu.css";
import { GamStateContext } from "../helpers/Context";

const Menu = () => {
  const { gameState, setgameState } = useContext(GamStateContext);
  console.log(gameState);
  return (
    <div className="Menu container">
      <label htmlFor="">Enter your Name</label>
      <input type="text" placeholder="Ex, Mukesh Kumar" />
      <button onClick={() => setgameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
