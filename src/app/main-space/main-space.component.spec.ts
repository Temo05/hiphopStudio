import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpaceComponent } from './main-space.component';

describe('MainSpaceComponent', () => {
  let component: MainSpaceComponent;
  let fixture: ComponentFixture<MainSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSpaceComponent]
    });
    fixture = TestBed.createComponent(MainSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
