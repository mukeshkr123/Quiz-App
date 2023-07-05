import { useState } from "react";
import Questions from "../helpers/Questions";

const Quix = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="quiz">
      <h1>Question {currentQuestion + 1}</h1>
      <button>{Questions[currentQuestion].prompt}</button>
      <button>{Questions[currentQuestion].optionA}</button>
      <button>{Questions[currentQuestion].optionB}</button>
      <button>{Questions[currentQuestion].optionC}</button>
      <button>Next</button>
    </div>
  );
};

export default Quix;
