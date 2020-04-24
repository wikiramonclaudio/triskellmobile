import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkchatComponent } from '@src/app/pages/tkchat/tkchat.component';

describe('TkchatComponent', () => {
  let component: TkchatComponent;
  let fixture: ComponentFixture<TkchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
