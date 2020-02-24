import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitfortextchangeComponent } from './waitfortextchange.component';

describe('WaitfortextchangeComponent', () => {
  let component: WaitfortextchangeComponent;
  let fixture: ComponentFixture<WaitfortextchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitfortextchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitfortextchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
