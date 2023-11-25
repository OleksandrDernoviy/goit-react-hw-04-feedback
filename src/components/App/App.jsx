// import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import css from './app.module.css';
import '../../index.css';

import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClick = option => {

    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1)
        break
      case 'bad':
        setBad(prevBad => prevBad + 1)
        break
      default:
        break
    
    }
}
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const options = ['good', 'neutral', 'bad']
  
    return (
      <div className={css.feedbackWidget}>
        <Section title="Please leave feedback !">
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>

        {countTotalFeedback() > 0 ? (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }

export default App
