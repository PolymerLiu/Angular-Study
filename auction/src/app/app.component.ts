import { Component } from '@angular/core';

// 组件装饰器（负责把元数据附加到TS的类，Angular即会把类变成一个Angular组件）
@Component({
  // 组件的元数据（装饰器里边的属性）
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 组件的控制器（包含与模板相关的所有属性和方法）
export class AppComponent {
  title = 'auction';
}
