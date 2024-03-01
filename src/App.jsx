import { useState } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from "./components/Description";

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // обновление состояния и обработка типа отзыва
  const updateFeedback = (feedbackType) => {
    setRating((prevState) => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  // сброс состояния рейтинга и удаления данных из локал ст.

  const updateResetRating = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem(`currentFeedback`);
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        updateResetRating={updateResetRating}
      />
      <Feedback rating={rating} />
    </div>
  );
}

export default App;
