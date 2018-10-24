import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service';

@Component({
  selector: 'app-thesis-search',
  templateUrl: './thesis-search.component.html',
  styleUrls: ['./thesis-search.component.css']
})
export class ThesisSearchComponent implements OnInit {
  model: any;

  constructor(private thesisService: ThesisService, private router: Router) { }

  ngOnInit() { }

  search = (theses$: Observable<ThesisModel>) =>
    theses$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.thesisService.searchTheses(term)),
    );

  titleExtrator = (thesis: {title: string}) => thesis.title;

  itemSelected(item) {
    this.router.navigate(["/thesis", item.id], { replaceUrl: true });
  }
}
