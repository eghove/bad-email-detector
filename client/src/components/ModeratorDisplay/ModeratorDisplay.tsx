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
  const parseReviewRecommended = (value: boolean) => {
    if (value === true) {
      return <Typography>Your Tweet may require additional review</Typography>;
    } else {
      return (
        <Typography>Your Tweet may not require additional review</Typography>
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
      <Typography>
        There is a <b>{parseScore(value)}%</b> that your Tweet will be read as
        profane or offensive.
      </Typography>
    );
  };

  const listItems = (arr: Array<ProfaneTermsObject>) => {
    arr.map((value) => <li>{value.Term}</li>);
  };

  //mini-component for the profane terms
  const displayProfaneTerms = (value: Array<ProfaneTermsObject>) => {
    if (value.length > 0) {
      return (
        <Typography>
          These profane or offensive terms were found in your Tweet:
          {value.map((v) => (
            <li key={v.Index}>{v.Term}</li>
          ))}
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
    </div>
  );
};

export default ModeratorDisplay;
