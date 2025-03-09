import { Component, Input, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-diagramme',
  imports: [NgxChartsModule],
  templateUrl: './diagramme.component.html',
  styleUrl: './diagramme.component.scss'
})
export class DiagrammeComponent implements OnInit{

  @Input() data!: {name:string,series: {name:string,value:number}[]} | null;
  multiLineData: [{name:string,series: {name:string,value:number}[]}] | null = null;

  view: [number, number] = [700, 400];
  colorScheme: Color = {
    domain: ['#000000'],
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Linear
  };

  ngOnInit(): void {
    if (this.data) {
      this.multiLineData = [{ name: this.data.name, series: this.data.series }];
    }
  }

}
