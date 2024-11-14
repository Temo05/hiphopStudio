import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogaleryComponent } from './photogalery.component';

describe('PhotogaleryComponent', () => {
  let component: PhotogaleryComponent;
  let fixture: ComponentFixture<PhotogaleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotogaleryComponent]
    });
    fixture = TestBed.createComponent(PhotogaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
