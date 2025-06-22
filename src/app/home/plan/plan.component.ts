import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, map, filter, tap, takeUntil } from 'rxjs';

interface ClassInfo {
  name?: string;
  type?: string;
}

@Component({
  selector: 'app-plan',
  imports: [RouterModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.less'
})
export class PlanComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  classInfo: ClassInfo = {};

  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {

    this.route.queryParams.pipe(
      // 1️⃣ 數據轉換
      map(params => ({ name: params['name'] || '', type: params['type'] || '' })),
      // 2️⃣ 過濾無效參數
      filter(params => params.name && params.type),
      // 3️⃣ 副作用處理（日誌、狀態更新）
      tap(params => {
        this.classInfo.name = params.name;
        this.classInfo.type = params.type;
        console.log('接收到的參數：', params);
      }
      ),
      // 4️⃣ 清理訂閱
      takeUntil(this.destroy$)
    ).subscribe(); // ✅ 空的 subscribe
  }


  ngOnDestroy() {
    // ✅ 清理訂閱，防止記憶體洩漏
    this.destroy$.next();
    this.destroy$.complete();
  }
}
