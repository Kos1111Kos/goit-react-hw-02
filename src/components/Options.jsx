const Options = ({ updateFeedback, updateResetRating, amountRating }) => {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {amountRating > 0 ? (
        <button type="button" onClick={updateResetRating}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
