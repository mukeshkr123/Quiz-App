import { useContext } from "react";
import "./Menu.css";
import { GamStateContext } from "../helpers/Context";

const Menu = () => {
  const { setName, setgameState } = useContext(GamStateContext);

  return (
    <div className="Menu container">
      <label htmlFor="">Enter your Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ex, Mukesh Kumar"
      />
      <button onClick={() => setgameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
