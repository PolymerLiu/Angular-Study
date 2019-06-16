import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  // 组件被创建的时候，constructor和ngOnInit方法仅会执行一次
  private productId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    //通过查询参数传递数据
    // this.productId = this.routeInfo.snapshot.queryParams["id"];

    //通过路由传递参数
    this.productId = this.routeInfo.snapshot.params["id"];

    //通过路由订阅的方式来获取参数(适用于会在同一个组件间跳转的情况)
    this.routeInfo.params.subscribe((params: Params) => {
      this.productId = params["id"]
    })
  }

}
