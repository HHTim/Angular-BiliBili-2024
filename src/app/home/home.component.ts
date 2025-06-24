import { Component, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CardComponent } from '../component/card/card.component';
import { CountService } from '../services/count.service';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { CountPipe } from '../component/pipe/count.pipe';
import { Course } from '../component/card/course';

@Component({
  selector: 'app-home',
  imports: [
    NzCarouselModule,
    NzButtonModule,
    NzSegmentedModule,
    NzGridModule,
    FormsModule,
    NzCardModule,
    NzFlexModule,
    NzIconModule,
    CardComponent,
    CommonModule,
    CountPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {
  // @ViewChild(CardComponent) cardComponent!: CardComponent;
  // @ViewChild('card') child: any;
  // @ViewChildren('card') child!: QueryList<ElementRef>;


  array = [1, 2, 3, 4];

  list = [
    {
      src: '../../assets/images/carousel/01.jpg'
    },
    {
      src: '../../assets/images/carousel/02.jpg'
    },
    {
      src: '../../assets/images/carousel/03.jpg'
    },
    {
      src: '../../assets/images/carousel/04.jpg'
    },
    {
      src: '../../assets/images/carousel/05.png'
    },
    {
      src: '../../assets/images/carousel/06.jpg'
    },
    {
      src: '../../assets/images/carousel/07.png'
    },
  ];

  courseList: Course[] = [
    {
      type: '全部課程',
      children: [
        {
          name: `Unity最全最完整的零基础入门教程-Luna's Fantasy（露娜的大冒险)`,
          img: 'https://www.sikiedu.com/files/course/2023/08-02/142256046fe1999314.jpg',
          count: 8454,
          comments: 66,
          isFree: true
        },
        {
          name: 'Unity版植物大战僵尸：游戏制作完全指南',
          img: 'https://www.sikiedu.com/files/course/2023/12-22/1038113a58c4010564.png',
          count: 5678,
          comments: 89,
          isFree: false,
          price: 2999,
        },
        {
          name: '制作一个简单的RPG游戏-基于Unity2023',
          img: 'https://www.sikiedu.com/files/course/2023/12-15/150333596175964200.png',
          count: 12340,
          comments: 156,
          isFree: false,
          price: 1999,
        },
        {
          name: '2025年最新版MyBatis框架从入门到到源码分析-第一季',
          img: 'https://www.sikiedu.com/files/course/2025/05-26/181620431689136520.png',
          count: 9876,
          comments: 123,
          isFree: false,
          price: 499,
        }
      ]
    },
    {
      type: 'Unity',
      children: [
        {
          name: 'Unity6Shader零基础小白入门教程',
          img: 'https://www.sikiedu.com/files/course/2025/05-26/181620431689136520.png',
          count: 6543,
          comments: 78,
          isFree: true,
        },
        {
          name: 'Unity6零基础小白入门教程-2025最新版',
          img: 'https://www.sikiedu.com/files/course/2025/05-12/18115288e1d9397559.png',
          count: 4321,
          comments: 56,
          isFree: false,
          price: 799,
        }
      ]
    },
    {
      type: '虛幻',
      children: [
        {
          name: '虚幻5.3零基础入门视频教程（蓝图版）-宇宙最简单系列',
          img: 'https://www.sikiedu.com/files/course/2024/03-18/09120773f40f783731.png',
          count: 6543,
          comments: 78,
          isFree: true,
        },
      ]
    },
    {
      type: 'Cocos',
      children: [
        {
          name: 'Cocos Creator3.8零基础小白入门教程',
          img: 'https://www.sikiedu.com/files/course/2024/05-21/1202146e635a677592.png',
          count: 6543,
          comments: 78,
          isFree: true,
        },
      ]
    },
    {
      type: 'Java',
      children: [{
        name: '手把手带你撸一个毕设项目-学生宿舍管理系统-JavaWeb版本-赠送全套代码资料-第一季',
        img: 'https://www.sikiedu.com/files/course/2024/11-14/11490950a65e636992.jpg',
        count: 6543,
        comments: 78,
        isFree: true,
      },]
    },
    {
      type: 'Python人工智能',
      children: [{
        name: 'Python零基础入门学习2020最新版（SiKi）',
        img: 'https://www.sikiedu.com/files/course/2019/10-29/222358ee7884571304.png',
        count: 6543,
        comments: 78,
        isFree: true,
      },]
    },
    {
      type: '遊戲美術',
      children: [{
        name: '【Live2D 教程】宇宙最简单的Live2D快速入门教程',
        img: 'https://www.sikiedu.com/files/course/2020/12-09/195547334c4c387917.png',
        count: 6543,
        comments: 78,
        isFree: true,
      },]
    },
    {
      type: '前端',
      children: [{
        name: 'Angular零基础入门教程-2024最新版',
        img: 'https://www.sikiedu.com/files/course/2024/12-22/1302080a4be2364333.jpg',
        count: 6543,
        comments: 78,
        isFree: true,
      },]
    },
    {
      type: 'Linux運維',
      children: [{
        name: 'Linux操作系统零基础入门学习',
        img: 'https://www.sikiedu.com/files/default/2019/01-12/19141354172d506298.png',
        count: 6543,
        comments: 78,
        isFree: true,
      },]
    },

  ];

  selectIndex: number = 0;
  options = ['最新', '最熱', '推薦'];
  index: number = 1;
  courseInfoList: any[] | undefined = []

  constructor(
    private countService: CountService,
  ) {
  }
  ngOnInit(): void {
    this.courseInfoList = this.courseList[0].children;
  }
  ngAfterViewInit(): void {
  }

  handleSelect(index: number, array?: any[]): void {
    this.selectIndex = index;
    this.courseInfoList = array;
  }

  getMessage(e: any): void {
    console.log('Message from CardComponent:', e);
  }

  add() {
    // this.cardComponent.addCount();
    this.countService.addCount();
  }
}
