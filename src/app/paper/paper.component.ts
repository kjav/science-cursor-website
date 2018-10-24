import { Component, OnInit, Input } from '@angular/core';
import { PaperModel } from '../models/paper-model';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  private _paperId: number
  @Input() paper: PaperModel;
  isCollapsed: boolean = true;

  constructor(private paperService: PaperService) { }

  ngOnInit() {
  }

  @Input()
  set paperId(id: number) {
    this._paperId = id;
    this.paperService.getPaper(id).subscribe(paper => this.paper = paper);
  }

  get paperId(): number {
    return this._paperId;
  }
}
