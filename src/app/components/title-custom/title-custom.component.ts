import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-custom',
  imports: [],
  templateUrl: './title-custom.component.html',
  styleUrl: './title-custom.component.scss'
})
export class TitleCustomComponent implements OnInit{

  @Input() title!: string | null;

  ngOnInit(): void {
    if(!this.title){
      this.title = "Medals per Country";
    }
  }

}
