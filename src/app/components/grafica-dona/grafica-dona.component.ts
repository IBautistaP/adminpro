import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [],
})
export class GraficaDonaComponent implements OnInit {
  @Input() ChartLabels: Label[] = [];
  @Input() ChartData: number[] = [];
  @Input() ChartType: ChartType;

  constructor() {}

  ngOnInit() {}
}
