import { moderatorClassification } from "../../types/ModeratorTypes";

// helper variables TODO: Extract these helpders somewhere.
export const initModeratorScores: moderatorClassification = {
  ExplicitAdult: {},
  ProfaneOffensive: {},
  ReviewRecommended: false,
  SuggestiveMature: {},
};

export const apiCallStates = {
  initial: "initial",
  inProgress: "in_progress",
  complete: "complete",
};
