import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalSpaceComponent } from './informational-space.component';

describe('InformationalSpaceComponent', () => {
  let component: InformationalSpaceComponent;
  let fixture: ComponentFixture<InformationalSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationalSpaceComponent]
    });
    fixture = TestBed.createComponent(InformationalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
