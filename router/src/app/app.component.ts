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
    //通过路由快照的方式来获取参数
    this.router.navigate(['/product']);

    //通过路由订阅的方式来获取参数(适用于会在同一个组件间跳转的情况)
    this.router.navigate(['/product',2]);
  }
}
