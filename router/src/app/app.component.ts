import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'router';
  constructor(private router: Router) {

  }

  toProductDetail() {
    this.router.navigate(['/product']);
  }
}
