import React from "react";
import styles from "./ModeratorDisplay.module.css";
// importing types
import {
  ModeratorDisplayProps,
  ProfaneTermsObject,
} from "../../types/ModeratorTypes";
import { Typography } from "@material-ui/core";

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
  const displayReviewRecommended = (value: boolean) => {
    if (value === true) {
      return (
        <Typography>
          <b>Your may want to revise your Tweet.</b>
        </Typography>
      );
    } else {
      return (
        <Typography>
          <b>Your Tweet is probably fine.</b>
        </Typography>
      );
    }
  };

  // mini-component that will display ExplicitAdult
  const displayExplicitMature = (value: number) => {
    return (
      <Typography gutterBottom>
        There is a <b>{parseScore(value)}%</b> that your Tweet will be read as
        sexually explicit or adult.
      </Typography>
    );
  };

  // mini-component that will display SuggestiveMature
  const displaySuggestiveMature = (value: number) => {
    return (
      <Typography gutterBottom>
        There is a <b>{parseScore(value)}%</b> that your Tweet will be read as
        sexually suggestive or mature.
      </Typography>
    );
  };

  // mini-component that will display ProfaneOffensive
  const displayProfaneOffensive = (value: number) => {
    return (
      <Typography gutterBottom>
        There is a <b>{parseScore(value)}%</b> that your Tweet will be read as
        profane or offensive.
      </Typography>
    );
  };

  // helper function to return uniqueProfaneTerms
  const uniqueProfaneTerms = (value: Array<ProfaneTermsObject>) => {
    let uniqueTerms: string[] = [];
    value.forEach((element) => {
      if (!uniqueTerms.includes(element.Term)) {
        uniqueTerms.push(element.Term);
      }
    });
    return uniqueTerms;
  };

  //mini-component for the profane terms
  const displayProfaneTerms = (value: Array<ProfaneTermsObject>) => {
    if (value.length > 0) {
      let uniqueTerms = uniqueProfaneTerms(value);
      return (
        <Typography gutterBottom>
          These profane or offensive terms were found in your Tweet:
          {uniqueTerms.map((v, index) => {
            return <li key={index}>{v}</li>;
          })}
        </Typography>
      );
    } else return null;
  };

  return (
    <div className={styles.ModeratorDisplay}>
      {displayExplicitMature(ExplicitAdult.Score)}
      {displaySuggestiveMature(SuggestiveMature.Score)}
      {displayProfaneOffensive(ProfaneOffensive.Score)}
      {displayProfaneTerms(profaneTerms)}
      {displayReviewRecommended(ReviewRecommended)}
    </div>
  );
};

export default ModeratorDisplay;
