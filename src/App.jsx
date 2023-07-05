import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { GamStateContext } from "./helpers/Context";
import Quix from "./components/Quix";

const App = () => {
  const [gameState, setgameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GamStateContext.Provider value={{ gameState, setgameState }}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quix />}
      </GamStateContext.Provider>
    </div>
  );
};

export default App;
