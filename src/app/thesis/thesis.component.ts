import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThesisModel } from '../models/thesis-model';
import { ThesisService } from '../services/thesis.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  thesis: ThesisModel;

  constructor(private route: ActivatedRoute, private thesisService: ThesisService) {  }

  ngOnInit() {
    // Allows the automatic switch to another thesis if already looking at another thesis
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.thesisService.getThesis(id).subscribe(thesis => {
        this.thesis = thesis;
      });
    });
  }
}
