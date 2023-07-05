import { useContext, useState } from "react";
import Questions from "../helpers/Questions";
import { GamStateContext } from "../helpers/Context";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { setgameState, setScore } = useContext(GamStateContext);
  const [chosenOption, setChosenOption] = useState("");
  const question = Questions[currentQuestion];

  const chooseOption = (option) => {
    setChosenOption(option);
  };

  const nextQuestion = () => {
    const isCorrectAnswer = question.answer === chosenOption;

    if (isCorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("Wrong answer");
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  console.log(question.answer);

  const { prompt, optionA, optionB, optionC } = question;

  return (
    <div className="quiz">
      <h1>Question {currentQuestion + 1}</h1>
      <button>{prompt}</button>
      <button onClick={() => chooseOption("optionA")}>{optionA}</button>
      <button onClick={() => chooseOption("optionB")}>{optionB}</button>
      <button onClick={() => chooseOption("optionC")}>{optionC}</button>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={() => setgameState("finish")}>Finish quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
