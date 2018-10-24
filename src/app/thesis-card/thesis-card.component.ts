import { Component, OnInit, Input } from '@angular/core';
import { ThesisModel } from '../models/thesis-model';

@Component({
  selector: 'app-thesis-card',
  templateUrl: './thesis-card.component.html',
  styleUrls: ['./thesis-card.component.css']
})
export class ThesisCardComponent implements OnInit {
  @Input() thesis: ThesisModel;

  constructor() { }

  ngOnInit() {  }
}
