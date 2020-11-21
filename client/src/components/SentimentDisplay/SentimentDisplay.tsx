import React, { FormEvent, useState } from "react";
import styles from "./SentimentDisplay.module.css";

// The component where user enters text. It will live inside BusinessLogic component

type SentimentDisplayProps = {
  sentimentScore: number;
};
const SentimentDisplay = ({ sentimentScore }: SentimentDisplayProps) => {
  const parseSentimentScore = (score: number) => {
    return (score * 100).toPrecision(3);
  };

  if (sentimentScore > 0) {
    return (
      <div className={styles.SentimentDisplay}>
        <p>
          There is a {parseSentimentScore(sentimentScore)}% chance your Tweet
          will be read positively.
        </p>
      </div>
    );
  } else return null;
};

export default SentimentDisplay;
