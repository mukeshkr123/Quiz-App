import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { GamStateContext } from "./helpers/Context";
import Quiz from "./components/Quiz";
import Finished from "./components/Finished";

const App = () => {
  const [gameState, setgameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GamStateContext.Provider
        value={{ gameState, score, setgameState, name, setName, setScore }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finish" && <Finished />}
      </GamStateContext.Provider>
    </div>
  );
};

export default App;
