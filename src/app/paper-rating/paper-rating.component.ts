import { Component, OnInit, Input } from '@angular/core';
import { PaperRatingModel } from '../models/paper-rating-model';
import { PaperRatingService } from '../services/paper-rating.service';

@Component({
  selector: 'app-paper-rating',
  templateUrl: './paper-rating.component.html',
  styleUrls: ['./paper-rating.component.css']
})
export class PaperRatingComponent implements OnInit {
  private _ratingId: number;
  @Input() rating: PaperRatingModel;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;

  constructor(private paperRatingService: PaperRatingService) { }

  ngOnInit() {
  }

  @Input()
  set ratingId(id: number) {
    this._ratingId = id;
    this.paperRatingService.getRating(id).subscribe(rating => this.rating = rating);
  }

  get ratingId(): number {
    return this._ratingId;
  }
}
