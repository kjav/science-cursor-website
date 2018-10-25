import { Component, OnInit, Input } from '@angular/core';
import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.css']
})
export class ThesesComponent implements OnInit {
  theses: ThesisModel[];
  private _page: number = 1;
  pageSize:number = 3;

  constructor(private route: ActivatedRoute, private router: Router, private thesisService: ThesisService) { }

  ngOnInit() {
    // Allows the automatic switch to another thesis if already looking at another thesis
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if(page != "") this._page = +page;
      this.updateTheses();
    });
  }

  updateTheses(): void {
    this.thesisService.getTheses().subscribe(
      theses => {
        let start = (this._page-1)*this.pageSize;
        let end = start+this.pageSize;
        this.theses = theses.slice(start, end);
      });
  }

  @Input()
  set page(page: number) {
    this._page = page;
    this.router.navigate(['theses', this._page]);
  }

  get page(): number {
    return this._page;
  }
}
