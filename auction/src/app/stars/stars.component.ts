import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 修饰符声明rating是通过父组件传递过来
  @Input()
  private rating = 0;
  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
