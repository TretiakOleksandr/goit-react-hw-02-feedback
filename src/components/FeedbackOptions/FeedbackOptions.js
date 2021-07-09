import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

const Controls = ({ goodClick, neutralClick, badClick }) => (
  <div className="controls">
    <button type="button" className={s.controlBtn} onClick={goodClick}>
      Good
    </button>
    <button type="button" className={s.controlBtn} onClick={neutralClick}>
      Neutral
    </button>
    <button type="button" className={s.controlBtn} onClick={badClick}>
      Bad
    </button>
  </div>
);

export default Controls;
