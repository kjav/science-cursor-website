import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {
  private _cursor: number;
  private _status: number;

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
  cursorConf = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: "Probailities",
          data: [0, 0, 0],
          backgroundColor: [
            '#497f2a',
            '#7f2a2a',
            '#b1690e'
          ]
        }
      ],
      labels: [
        'Probaility of being true',
        'Probaility of being false',
        'Ignore'
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: true
    }
  };

  constructor() { }

  ngOnInit() { }

  @Input() set cursor(cursor: number) {
    if(cursor == this._cursor) return;
    this._cursor = cursor;
    this.updateData();
  }

  get cursor(): number {
    return this._cursor;
  }

  @Input() set status(status: number) {
    if(status == this._status) return;
    this._status = status;
    this.updateData();
  }

  get status(): number {
    return this._status;
  }

  private updateData() {
    if(this._status === 1 || this._status === 2) {
      this.cursorConf.data.datasets[0].data = [0, 0, 100];
    } else {
      this.cursorConf.data.datasets[0].data =
        [+Number(this._cursor*100).toFixed(2), +Number((1-this._cursor)*100).toFixed(2), 0];
    }

    if(this.chartComponent.chart) {
      this.chartComponent.chart.update();
    }
  }
}
