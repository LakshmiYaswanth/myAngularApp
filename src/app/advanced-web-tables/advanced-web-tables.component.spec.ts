import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWebTablesComponent } from './advanced-web-tables.component';

describe('AdvancedWebTablesComponent', () => {
  let component: AdvancedWebTablesComponent;
  let fixture: ComponentFixture<AdvancedWebTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedWebTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedWebTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
