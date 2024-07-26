import { Rating, State } from 'ts-fsrs';

export type ReviewLog = {
  id: string;
  rating: Rating; // Rating of the review (Again, Hard, Good, Easy)
  state: State; // State of the review (New, Learning, Review, Relearning)
  due: Date; // Date of the last scheduling
  stability: number; // Stability of the card before the review
  difficulty: number; // Difficulty of the card before the review
  elapsed_days: number; // Number of days elapsed since the last review
  last_elapsed_days: number; // Number of days between the last two reviews
  scheduled_days: number; // Number of days until the next review
  review: Date; // Date of the review
};

export type Card = {
  id: string;
  due: Date; // Date when the card is next due for review
  stability: number; // A measure of how well the information is retained
  difficulty: number; // Reflects the inherent difficulty of the card content
  elapsed_days: number; // Days since the card was last reviewed
  scheduled_days: number; // The interval at which the card is next scheduled
  reps: number; // Total number of times the card has been reviewed
  lapses: number; // Times the card was forgotten or remembered incorrectly
  state: State; // The current state of the card (New, Learning, Review, Relearning)
  last_review?: Date; // The most recent review date, if applicable
  logs: ReviewLog[];
};

export type Parameters = {
  request_retention: number;
  maximum_interval: number;
  enable_fuzz: boolean;
  card_limit: number;
  lapses: number;
};

export type Deck = {
  id: string;
  cards: Card[];
  params: Parameters;
};
