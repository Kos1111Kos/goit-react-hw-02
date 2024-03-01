import { useEffect, useState } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from "./components/Description";
import Notification from "./components/Notification";

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

  // Деструктурируем состояние рейтинга для получения отдельных счетчиков отзывоd
  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;

  // useEffect для загрузки данных из localStorage при монтировании компонента.

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(`currentFeedback`)) === null) return;

    setRating({ ...JSON.parse(localStorage.getItem(`currentFeedback`)) }); // Устанавливаем состояние рейтинга из данных localStorage.
  }, []);

  //сохранении данных в localStorage при изменении рейтинга или общего количества отзывов.
  useEffect(() => {
    if (totalFeedback === 0) return;
    localStorage.setItem(`currentFeedback`, JSON.stringify(rating));
  }, [rating, totalFeedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        updateResetRating={updateResetRating}
        amountRating={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback rating={rating} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
