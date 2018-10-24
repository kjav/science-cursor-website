import { Component, OnInit } from '@angular/core';
import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service'

@Component({
  selector: 'app-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.css']
})
export class ThesesComponent implements OnInit {
  theses: ThesisModel[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    this.getTheses();
  }

  getTheses(): void {
    this.thesisService.getTheses().subscribe(theses => this.theses = theses);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.thesisService.addThesis({ title } as ThesisModel).subscribe(thesis => { this.theses.push(thesis); });
  }

  delete(thesis: ThesisModel): void {
    this.theses = this.theses.filter(h => h !== thesis);
    this.thesisService.deleteThesis(thesis).subscribe();
  }
}
