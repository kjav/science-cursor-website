import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent implements OnInit {
  @Input() papers: number[];

  constructor() { }

  ngOnInit() {
  }
}
