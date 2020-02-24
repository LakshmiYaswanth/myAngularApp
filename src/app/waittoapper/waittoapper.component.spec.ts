import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaittoapperComponent } from './waittoapper.component';

describe('WaittoapperComponent', () => {
  let component: WaittoapperComponent;
  let fixture: ComponentFixture<WaittoapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaittoapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaittoapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
