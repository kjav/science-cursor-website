export class ThesisModel {
  id: number; // auto-generated unique identifier
  title: string; // a statement which user can agree or disagree with
  desc: string; // a quick description of the thesis
  status: number; // moderation status: 0 -> published; 1 -> published with warnings; 2 -> blocked
  modComment: string; // moderation comment, linked to the status
  cursor: number; // computed value from all the ratings which represents the credibility factor of the thesis
  createdBy: number; // the user who has created the thesis
  creationDate: Date; // the date when the thesis was created
  validating: number[]; // the list of papers validating the thesis
  invalidating: number[]; // the list of papers invalidating the thesis
}
