import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitfordisappearComponent } from './waitfordisappear.component';

describe('WaitfordisappearComponent', () => {
  let component: WaitfordisappearComponent;
  let fixture: ComponentFixture<WaitfordisappearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitfordisappearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitfordisappearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
