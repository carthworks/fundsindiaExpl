import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsexplorerComponent } from './fundsexplorer.component';

describe('FundsexplorerComponent', () => {
  let component: FundsexplorerComponent;
  let fixture: ComponentFixture<FundsexplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsexplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsexplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
