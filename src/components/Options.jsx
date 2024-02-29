const Options = ({ updateFeedback }) => {
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
      <button type="button" onClick={() => updateFeedback("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Options;
