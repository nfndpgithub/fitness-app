import { TestBed } from '@angular/core/testing';

import { FitMealsService } from './fit-meals.service';

describe('FitMealsService', () => {
  let service: FitMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
