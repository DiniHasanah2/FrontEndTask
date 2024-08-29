import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatImagesPage } from './cat-images.page';

describe('CatImagesPage', () => {
  let component: CatImagesPage;
  let fixture: ComponentFixture<CatImagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
