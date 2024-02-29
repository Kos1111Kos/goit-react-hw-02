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

  const updateFeedback = (feedbackType) => {
    setRating((prevState) => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback rating={rating} />
    </div>
  );
}

export default App;
