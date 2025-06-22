import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
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

  courseList = [
    {
      type: '全部課程',
      children: [
        {
          name: `Unity最全最完整的零基础入门教程-Luna's Fantasy（露娜的大冒险)`,
          img: 'https://www.sikiedu.com/files/course/2023/08-02/142256046fe1999314.jpg',
          count: '8454',
          comment: '66',
          isFree: true
        },
        {
          name: 'Unity版植物大战僵尸：游戏制作完全指南',
          img: 'https://www.sikiedu.com/files/course/2023/12-22/1038113a58c4010564.png',
          count: '5678',
          comment: '89',
          isFree: false,
          price: 2999,
        },
        {
          name: '制作一个简单的RPG游戏-基于Unity2023',
          img: 'https://www.sikiedu.com/files/course/2023/12-15/150333596175964200.png',
          instructor: 'Java架構師',
          count: '12340',
          comment: '156',
          isFree: false,
          price: 1999,
        },
        {
          name: '2025年最新版MyBatis框架从入门到到源码分析-第一季',
          img: 'https://www.sikiedu.com/files/course/2025/05-26/181620431689136520.png',
          count: '9876',
          comment: '123',
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
          count: '6543',
          comment: '78',
          isFree: true,
        },
        {
          name: 'Unity6零基础小白入门教程-2025最新版',
          img: 'https://www.sikiedu.com/files/course/2025/05-12/18115288e1d9397559.png',
          count: '4321',
          comment: '56',
          isFree: false,
          price: 799,
        }
      ]
    },
    {
      type: '虛幻',
      icon: 'thunderbolt',
      children: [
        {
          name: '虚幻5.3零基础入门视频教程（蓝图版）-宇宙最简单系列',
          img: 'https://www.sikiedu.com/files/course/2024/03-18/09120773f40f783731.png',
          count: '6543',
          comment: '78',
          isFree: true,
        },
      ]
    },
    {
      type: 'Cocos',
      icon: 'code',
      children: [
        {
          name: 'Cocos Creator3.8零基础小白入门教程',
          img: 'https://www.sikiedu.com/files/course/2024/05-21/1202146e635a677592.png',
          count: '6543',
          comment: '78',
          isFree: true,
        },
      ]
    },
    {
      type: 'Java',
      icon: 'coffee',
      children: [{
        name: '手把手带你撸一个毕设项目-学生宿舍管理系统-JavaWeb版本-赠送全套代码资料-第一季',
        img: 'https://www.sikiedu.com/files/course/2024/11-14/11490950a65e636992.jpg',
        count: '6543',
        comment: '78',
        isFree: true,
      },]
    },
    {
      type: 'Python人工智能',
      icon: 'robot',
      children: [{
        name: 'Python零基础入门学习2020最新版（SiKi）',
        img: 'https://www.sikiedu.com/files/course/2019/10-29/222358ee7884571304.png',
        count: '6543',
        comment: '78',
        isFree: true,
      },]
    },
    {
      type: '遊戲美術',
      icon: 'picture',
      children: [{
        name: '【Live2D 教程】宇宙最简单的Live2D快速入门教程',
        img: 'https://www.sikiedu.com/files/course/2020/12-09/195547334c4c387917.png',
        count: '6543',
        comment: '78',
        isFree: true,
      },]
    },
    {
      type: '前端',
      icon: 'laptop',
      children: [{
        name: 'Angular零基础入门教程-2024最新版',
        img: 'https://www.sikiedu.com/files/course/2024/12-22/1302080a4be2364333.jpg',
        count: '6543',
        comment: '78',
        isFree: true,
      },]
    },
    {
      type: 'Linux運維',
      icon: 'cloud',
      children: [{
        name: 'Linux操作系统零基础入门学习',
        img: 'https://www.sikiedu.com/files/default/2019/01-12/19141354172d506298.png',
        count: '6543',
        comment: '78',
        isFree: true,
      },]
    },

  ];

  selectIndex: number = 0;
  options = ['最新', '最熱', '推薦'];
  index: number = 1;
  courseInfoList: any[] | undefined = []

  constructor() {
    console.log('1. Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called', changes);
  }
  ngOnDestroy(): void {
    console.log('4. ngOnDestroy called');
    // Perform any necessary cleanup here
  }
  ngOnInit(): void {
    console.log('3. ngOnInit called');
    this.courseInfoList = this.courseList[0].children;
  }

  handleSelect(index: number, array?: any[]): void {
    this.selectIndex = index;
    this.courseInfoList = array;
  }
}
