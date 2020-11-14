export type moderatorClassification = {
  ExplicitAdult: object;
  ProfaneOffensive: object;
  ReviewRecommended: boolean;
  SuggestiveMature: object;
};

export type ModeratorDisplayProps = {
  moderatorClassification: moderatorClassification;
  profaneTerms: Array<object>;
};
