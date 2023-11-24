import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorComponent } from './creditor.component';

describe('CreditorComponent', () => {
  let component: CreditorComponent;
  let fixture: ComponentFixture<CreditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditorComponent]
    });
    fixture = TestBed.createComponent(CreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
