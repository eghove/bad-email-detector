import React from "react";
import styles from "./ModeratorDisplay.module.css";
// importing types
import {
  ModeratorDisplayProps,
  ProfaneTermsObject,
} from "../../types/ModeratorTypes";
import { validateLocaleAndSetLanguage } from "typescript";

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

  // used to parse score throughout the component
  const parseScore = (score: number) => {
    return (score * 100).toPrecision(3);
  };

  // mini-component that will display appropriate review recommended text
  const parseReviewRecommended = (value: boolean) => {
    if (value === true) {
      return <p>Your Tweet may require additional review</p>;
    } else {
      return <p>Your Tweet may not require additional review</p>;
    }
  };

  // mini-component that will display ExplicitAdult
  const displayExplicitMature = (value: number) => {
    return (
      <p>
        The likelihood that your Tweet will be intepreted as sexually explicit
        or adult in certain situations: {parseScore(value)}%
      </p>
    );
  };

  // mini-component that will display SuggestiveMature
  const displaySuggestiveMature = (value: number) => {
    return (
      <p>
        The likelihood that your Tweet will be intepreted as sexually suggestive
        or mature in certain situations: {parseScore(value)}%
      </p>
    );
  };

  // mini-component that will display ProfaneOffensive
  const displayProfaneOffensive = (value: number) => {
    return (
      <p>
        The likelihood that your Tweet will be intepreted as profane or
        offensive in certain situations: {parseScore(value)}%
      </p>
    );
  };

  const listItems = (arr: Array<ProfaneTermsObject>) => {
    arr.map((value) => <li>{value.Term}</li>);
  };

  //mini-component for the profane terms
  const displayProfaneTerms = (value: Array<ProfaneTermsObject>) => {
    if (value.length > 0) {
      return (
        <p>
          These profane or offensive terms were found in your Tweet:
          {value.map((v) => (
            <li>{v.Term}</li>
          ))}
        </p>
      );
    } else return null;
  };

  return (
    <div className={styles.ModeratorDisplay}>
      {parseReviewRecommended(ReviewRecommended)}
      {displayExplicitMature(ExplicitAdult.Score)}
      {displaySuggestiveMature(SuggestiveMature.Score)}
      {displayProfaneOffensive(ProfaneOffensive.Score)}
      {displayProfaneTerms(profaneTerms)}
    </div>
  );
};

export default ModeratorDisplay;
