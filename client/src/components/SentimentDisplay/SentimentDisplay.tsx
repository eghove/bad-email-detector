import { Typography } from "@material-ui/core";
import React from "react";
// import type
import { SentimentDisplayProps } from "../../types/SentimentDisplayProps";

// The component where user enters text. It will live inside BusinessLogic component

const SentimentDisplay = ({ sentimentScore }: SentimentDisplayProps) => {
  const parseSentimentScore = (score: number) => {
    return (score * 100).toPrecision(3);
  };

  if (sentimentScore > 0) {
    return (
      <Typography gutterBottom>
        There is a <b>{parseSentimentScore(sentimentScore)}%</b> chance your
        Tweet will be read positively.
      </Typography>
    );
  } else return null;
};

export default SentimentDisplay;
