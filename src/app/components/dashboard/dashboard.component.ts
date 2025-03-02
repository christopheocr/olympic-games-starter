import { Component, Input, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  imports: [NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  dataList!:  { name: string; value: number }[];
  @Input() participants!: { name: string; value: number }[];

  view: [number,number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FFF000'],
    name: 'custom',
    selectable: false,
    group: ScaleType.Ordinal
  };

  ngOnInit(): void {
    this.dataList = this.participants;
  }

  customTooltip(data: any): string {
    return `<div class="custom-tooltip">
              <span class="tooltip-title">${data.data.label}</span><br>
              <span class="tooltip-value">🏅 ${data.data.value}</span>
            </div>`;
  }

  onSelect(event: {name: string,value: number,label: string}): void {
    console.log(event.name.trim().replace(/\s+/g, '').toLowerCase())
 }

}
