import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '图书']),
      new Product(2, '第二个商品', 199, 1.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品']),
      new Product(3, '第三个商品', 189, 4.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '图书']),
      new Product(4, '第四个商品', 1699, 2.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '化妆品']),
      new Product(5, '第五个商品', 19, 3.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '手机']),
      new Product(6, '第六个商品', 99, 1.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '耳机'])
    ];

    this.products.push(new Product(7, '第七个商品', 99, 1.5, '这是第一个商品，是我在学习木可网Angular是创建的', ['电子产品', '耳机']));
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) {

  }
}
