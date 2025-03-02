import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InfoCardComponent } from "../info-card/info-card.component";

@Component({
  selector: 'app-info-bar',
  imports: [InfoCardComponent],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.scss'
})
export class InfoBarComponent implements OnChanges{

  elements!: { title: string, value: number}[];
  @Input() datas!: { title: string, value: number}[];

  ngOnChanges(changes: SimpleChanges): void {
    this.elements = this.datas;
  }

}
