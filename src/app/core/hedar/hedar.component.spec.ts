import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedarComponent } from './hedar.component';

describe('HedarComponent', () => {
  let component: HedarComponent;
  let fixture: ComponentFixture<HedarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HedarComponent]
    });
    fixture = TestBed.createComponent(HedarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
