import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitforalertComponent } from './waitforalert.component';

describe('WaitforalertComponent', () => {
  let component: WaitforalertComponent;
  let fixture: ComponentFixture<WaitforalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitforalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitforalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
