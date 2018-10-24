export class PaperModel {
  id: number;  // auto-generated unique identifier
  title: string; // the title as it appears in the publication
  abstract: string; // the abstract paragraph of the paper
  authors: string[]; // names of the people who wrote this paper
  publishedIn: string; // where the paper has been published
  publicationDate: Date; // the date when the paper has been published
  link: string; // an URL to the paper full version
  status: number; // moderation status: 0 -> published; 1 -> published with warnings; 2 -> blocked
  modComment: string; // moderation comment, linked to the status
  cursor: number; // computed value from all the ratings which represents the credibility factor of the paper
  createdBy: number; // the user who has submitted the paper
  creationDate: Date; // the date when the paper was submitted
  ratings: number[]; // the list of users' rating
}
