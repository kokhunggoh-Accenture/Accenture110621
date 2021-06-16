import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyHeadComponent } from './supply-head.component';

describe('SupplyHeadComponent', () => {
  let component: SupplyHeadComponent;
  let fixture: ComponentFixture<SupplyHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
