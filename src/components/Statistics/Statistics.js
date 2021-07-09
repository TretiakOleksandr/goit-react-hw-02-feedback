import React from "react";
import s from "../Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.results}>
    <span className="result">Good: {good}</span>
    <span className="result">Neutral: {neutral}</span>
    <span className="result">Bad: {bad}</span>
    <span className="result">Total: {total}</span>
    <span className="result">Positive feedback: {positivePercentage} %</span>
  </div>
);

export default Statistics;
