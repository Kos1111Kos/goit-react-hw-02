export default function Feedback({ rating, totalFeedback, reviewsCalc }) {
  return (
    <div>
      <p>Good: {rating.good}</p>
      <p>Neutral: {rating.neutral}</p>
      <p>Bad: {rating.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive:{reviewsCalc}%</p>
    </div>
  );
}
