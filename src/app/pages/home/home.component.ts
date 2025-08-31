import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 constructor(private router: Router) {} 

  goSearch() {
    this.router.navigate(['/search'])
  }
}
