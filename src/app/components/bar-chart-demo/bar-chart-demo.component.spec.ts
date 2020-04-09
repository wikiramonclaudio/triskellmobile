import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartDemoComponent } from '@src/app/components/bar-chart-demo/bar-chart-demo.component';

describe('BarChartDemoComponent', () => {
  let component: BarChartDemoComponent;
  let fixture: ComponentFixture<BarChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
