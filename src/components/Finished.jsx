import { useContext } from "react";
import { GamStateContext } from "../helpers/Context";
import Questions from "../helpers/Questions";

const Finished = () => {
  const { score, name, setgameState } = useContext(GamStateContext);
  const totalQuestions = Questions.length;

  const restartQuiz = () => {
    setgameState("menu");
  };

  return (
    <div>
      <h1>Quiz Finished</h1>
      <h1>
        Total Score: {score}/{totalQuestions}
      </h1>
      <h1>{name}</h1>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  );
};

export default Finished;
