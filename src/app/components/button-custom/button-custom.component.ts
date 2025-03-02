import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-custom',
  imports: [],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.scss'
})
export class ButtonCustomComponent {

  constructor(private router: Router){}

  goToDestination() {
    this.router.navigate(['']);
  }
}
