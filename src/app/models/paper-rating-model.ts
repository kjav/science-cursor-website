export class PaperRatingModel {
  id: number; // auto-generated unique identifier
  status: number; // moderation status: 0 -> published; 1 -> published with warnings; 2 -> blocked
  modComment: string; // moderation comment, linked to the status
  createdBy: number; // the user who has wrote the rating
  creationDate: Date; // the date when the rating was wrote
  cursor: number; // the credibility the user gives
  comment: string; // the argument the user make to support the rating
  votes: number[]; // the list of users who voted for this rating
}
