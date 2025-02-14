import { TestBed } from '@angular/core/testing';

import { CategoriesSliderService } from './categories-slider.service';

describe('CategoriesSliderService', () => {
  let service: CategoriesSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
