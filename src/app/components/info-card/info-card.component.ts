import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent{

  @Input() text: string = 'Number of JOs';
  @Input() count: number = 0;


}
