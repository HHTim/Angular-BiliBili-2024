import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

interface menuInfo {
  name: string;
  list?: menuInfo[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: false,
})
export class HeaderComponent implements OnInit {

  menuList: menuInfo[] = [
    {
      name: '首頁'
    },
    {
      name: '全部課程',
      list: [
        {
          name: '所有課程'
        },
        {
          name: '課程投票 - Unity'
        },
        {
          name: '課程投票 - Unreal (虛幻)'
        }
      ]
    },
    {
      name: 'Unity',
      list: [
        {
          name: 'Unity 全部課程'
        },
        {
          name: 'Unity高薪就業班'
        },
        {
          name: 'Unity A計劃（永久）'
        },
        {
          name: 'Unity A計劃（一年）'
        }
      ]
    },
    {
      name: 'Unreal (虛幻)',
      list: [
        {
          name: 'Unreal 全部課程'
        },
        {
          name: 'Unreal入門教程'
        },
        {
          name: 'Unreal進階教程'
        }
      ]
    },
    {
      name: 'Java',
      list: [
        {
          name: 'Java 全部課程'
        },
        {
          name: 'JavaEE課程'
        },
        {
          name: 'Java基礎入門'
        }
      ]
    },
    {
      name: 'Python',
      list: [
        {
          name: 'Python 全部課程'
        },
        {
          name: 'Python基礎入門'
        },
        {
          name: 'Python人工智能'
        }
      ]
    },
    {
      name: '人工智能',
      list: [
        {
          name: '所有人工智能課程'
        },
        {
          name: '大語言模型開發'
        },
        {
          name: '機器學習教程'
        }
      ]
    },
    {
      name: '專題學習',
      list: [
        {
          name: '遊戲開發'
        },
        {
          name: '網絡通訊'
        },
        {
          name: '前端開發'
        },
        {
          name: '移動應用開發'
        }
      ]
    },
    {
      name: '聯絡我們'
    }
  ];

  isShow: boolean = false;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.themeService.change();
  }

}
