export type moderatorClassification = {
  ExplicitAdult: ExplicitAdult;
  ProfaneOffensive: ProfaneOffensive;
  ReviewRecommended: boolean;
  SuggestiveMature: SuggestiveMature;
};

export type ExplicitAdult = {
  Score: number;
};

export type ProfaneOffensive = {
  Score: number;
};

export type SuggestiveMature = {
  Score: number;
};

export type ModeratorDisplayProps = {
  moderatorClassification: moderatorClassification;
  profaneTerms: ProfaneTermsObject[];
};

export type ProfaneTermsObject = {
  Index: number;
  ListId: number;
  OriginalIndex: number;
  Term: string;
};
