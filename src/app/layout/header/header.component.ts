import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

interface menuInfo {
  name: string;
  path: string;
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
      name: '首頁',
      path: '/'
    },
    {
      name: '全部課程',
      path: '/class',
      list: [
        {
          name: '所有課程',
          path: '/class'
        },
        {
          name: '課程 A 計畫',
          path: '/plan/1/introduction'
        },
        {
          name: '課程 B 計畫 - Unreal (虛幻)',
          path: '/plan/2/introduction'
        }
      ]
    },
    {
      name: 'Unity',
      path: '/unity',
      list: [
        {
          name: 'Unity 全部課程',
          path: '/unity/all'
        },
        {
          name: 'Unity高薪就業班',
          path: '/unity/employment'
        },
        {
          name: 'Unity A計劃（永久）',
          path: '/unity/plan-a/permanent'
        },
        {
          name: 'Unity A計劃（一年）',
          path: '/unity/plan-a/annual'
        }
      ]
    },
    {
      name: 'Java',
      path: '/java',
      list: [
        {
          name: 'Java 全部課程',
          path: '/java/all'
        },
        {
          name: 'JavaEE課程',
          path: '/java/javaee'
        },
        {
          name: 'Java基礎入門',
          path: '/java/fundamentals'
        }
      ]
    },
    {
      name: 'Python',
      path: '/python',
      list: [
        {
          name: 'Python 全部課程',
          path: '/python/all'
        },
        {
          name: 'Python基礎入門',
          path: '/python/fundamentals'
        },
        {
          name: 'Python人工智能',
          path: '/python/ai'
        }
      ]
    },
    {
      name: '聯絡我們',
      path: '/contact'
    }
  ];

  isShow: boolean = false;

  constructor(
    private themeService: ThemeService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.themeService.change();
  }


  goToNextPage(path: string) {
    this.router.navigate([path]);
  }
}
