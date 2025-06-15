import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  standalone: false
})
export class LayoutComponent implements OnInit {

  // 這裡的 @ViewChild('ref') ref!: TemplateRef<any>; 是用來獲取模板引用變量 ref 的
  // ref 是一個 TemplateRef，代表一個 Angular 模板，可以用來創建內嵌視圖。
  // 在 ngAfterViewInit 中使用這個 ref 來創建內嵌視圖，並將其插入到 DOM 中。
  // 在這個組件中，我們使用了 ngAfterViewInit 生命週期鉤子來確保組件的視圖已經渲染完成。
  // 在這個生命週期鉤子中，我們創建了一個內嵌視圖，並將其插入到 DOM 中。
  // 這樣做的目的是為了在組件創建好、視圖渲染好之後，將一些動態內容插入到 DOM 中。

  @ViewChild('ref') ref!: TemplateRef<any>;

  version: string = '1.0.0'; // 版本號


  // ViewContainerRef 是一個容器，用來管理視圖的插入和移除。
  // 在這裡，我們使用 ViewContainerRef 來創建內嵌視圖，並將其插入到 DOM 中。
  @ViewChild('ref', { read: ViewContainerRef }) refContainer!: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  // 組件創建好、視圖渲染好之後所觸發
  ngAfterViewInit() {
    // const view = this.ref.createEmbeddedView({}); // 創建內嵌視圖
    // const element = this.ref.elementRef.nativeElement; // 獲取元素引用
    // // 將元素放到視圖裡面(將元素插入到 DOM 中)
    // view.rootNodes.forEach(node => {
    //   // 確保節點是 HTMLElement
    //   if (node instanceof HTMLElement) {
    //     // 將節點插入到 ref 元素之後
    //     element.parentNode?.insertBefore(node, element.nextSibling);
    //   }
    // });
    const view = this.ref.createEmbeddedView({}); // 創建內嵌視圖
    this.refContainer.insert(view); // 將內嵌視圖插入到容器中

  }
}
