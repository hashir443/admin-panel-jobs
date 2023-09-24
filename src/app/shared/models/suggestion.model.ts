interface Suggestion {
  id: number;
  title: string;
  description: string;
  url?: string;
  memberCount?: number;
  suggestionType?: number;
  imageURL?: string;
  postInADayCount?: number;
}

export { Suggestion }
