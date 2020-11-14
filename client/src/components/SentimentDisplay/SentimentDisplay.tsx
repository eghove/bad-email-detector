import React, { FormEvent, useState } from "react";
import styles from "./SentimentDisplay.module.css";

// The component where user enters text. It will live inside BusinessLogic component
// TODO: Figure out how to handle props without 'any' type.
const SentimentDisplay = (props: any) => {
  const parseSentimentScore = (score: number) => {
    return (score * 100).toPrecision(3);
  };

  if (props.sentimentScore > 0) {
    return (
      <div className={styles.SentimentDisplay}>
        <p>
          There is a {parseSentimentScore(props.sentimentScore)}% chance your
          Tweet will be read positively.
        </p>
      </div>
    );
  } else return null;
};

export default SentimentDisplay;
