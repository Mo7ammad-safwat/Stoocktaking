import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagorComponent } from './mortgagor.component';

describe('MortgagorComponent', () => {
  let component: MortgagorComponent;
  let fixture: ComponentFixture<MortgagorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgagorComponent]
    });
    fixture = TestBed.createComponent(MortgagorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
