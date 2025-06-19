import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxAPlanComponent } from './wx-a-plan.component';

describe('WxAPlanComponent', () => {
  let component: WxAPlanComponent;
  let fixture: ComponentFixture<WxAPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WxAPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WxAPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
