import { useEffect, useState } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from "./components/Description";
import Notification from "./components/Notification";

function App() {
  const [rating, setRating] = useState(() => {
    const storedRating = JSON.parse(localStorage.getItem("currentFeedback"));
    return storedRating || { good: 0, neutral: 0, bad: 0 };
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

  const updateResetRating = () => {
    setRating({ good: 0, neutral: 0, bad: 0 });
  };

  // Деструктурируем состояние рейтинга для получения отдельных счетчиков отзывоd
  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;
  const reviewsCalc = Math.round(
    ((rating.good + rating.neutral) / totalFeedback) * 100
  );
  // useEffect для загрузки данных из localStorage при монтировании компонента.

  useEffect(() => {
    localStorage.setItem("currentFeedback", JSON.stringify(rating));
  }, [rating]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        updateResetRating={updateResetRating}
        amountRating={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          reviewsCalc={reviewsCalc}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
