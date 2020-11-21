import { moderatorClassification } from "../../types/ModeratorTypes";

export const initModeratorScores: moderatorClassification = {
  ExplicitAdult: { Score: 0 },
  ProfaneOffensive: { Score: 0 },
  ReviewRecommended: false,
  SuggestiveMature: { Score: 0 },
};
