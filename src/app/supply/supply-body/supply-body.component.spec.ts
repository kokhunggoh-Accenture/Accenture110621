import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyBodyComponent } from './supply-body.component';

describe('SupplyBodyComponent', () => {
  let component: SupplyBodyComponent;
  let fixture: ComponentFixture<SupplyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
