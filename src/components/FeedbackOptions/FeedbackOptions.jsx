import React from 'react';
import '../../index.css';
import css from './feedBckOpt.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOpt}>
      {options.map(option => (
        <button
          type="button"
          className={css.feedbackOptBtn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;


