import { Component, OnInit } from '@angular/core';
import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  theses: ThesisModel[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    this.getTheses();
  }

  getTheses(): void {
    this.thesisService.getTheses().subscribe(theses => this.theses = theses.slice(1, 5));
  }
}
