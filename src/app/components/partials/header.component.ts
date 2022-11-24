import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
// import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  //The ? means this attribute accept null; The ! means accept undefined
  @Input() title?: string;

  //private router: Router : Mandatory to use the angular route
  constructor(private router: Router) { }

  // logout() {
  //   if (confirm('Are you sure?')) {
  //     this.auth.clear();
  //     this.router.navigateByUrl("/");
  //   }
  // }
}
