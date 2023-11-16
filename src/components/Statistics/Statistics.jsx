import React from 'react';
import css from './statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.statisticsShowBox}>
        <p className={css.statisticsText}>Good : {good}</p>
        <p className={css.statisticsText}>Neutral : {neutral}</p>
        <p className={css.statisticsText}>Bad : {bad}</p>
        <p className={css.statisticsText}>Total : {total}</p>
        <p className={css.statisticsText}>
          Positive feedback : {positivePercentage}%
        </p>
      </div>
    </>
  );
};

export default Statistics