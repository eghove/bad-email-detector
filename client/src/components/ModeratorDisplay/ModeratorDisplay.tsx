import React from "react";
import styles from "./ModeratorDisplay.module.css";
// importing types
import { ModeratorDisplayProps } from "../../types/ModeratorTypes";

const ModeratorDisplay = ({
  moderatorClassification,
  profaneTerms,
}: ModeratorDisplayProps) => {
  const {
    ExplicitAdult,
    ProfaneOffensive,
    ReviewRecommended,
    SuggestiveMature,
  } = moderatorClassification;

  // mini-component that will display appropriate review recommended text
  const parseReviewRecommended = (value: boolean) => {
    if (value === true) {
      return "Your Tweet may require additional review";
    } else {
      return "Your Tweet may not require additional review";
    }
  };

  return (
    <div className={styles.ModeratorDisplay}>
      {parseReviewRecommended(ReviewRecommended)}
    </div>
  );
};

export default ModeratorDisplay;
