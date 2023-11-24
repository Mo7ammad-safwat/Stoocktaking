import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepadgComponent } from './homepadg.component';

describe('HomepadgComponent', () => {
  let component: HomepadgComponent;
  let fixture: ComponentFixture<HomepadgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepadgComponent]
    });
    fixture = TestBed.createComponent(HomepadgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
