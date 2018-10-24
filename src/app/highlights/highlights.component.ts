import { Component, OnInit, Input } from '@angular/core';
import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  @Input() itemCount = 3
  theses: ThesisModel[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    this.getTheses();
  }

  getTheses(): void {
    this.thesisService.getHighlightedTheses().subscribe(theses => this.theses = theses);
  }
}
