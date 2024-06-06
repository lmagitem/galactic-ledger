import { TestBed } from '@angular/core/testing';

import { StarSystemService } from './star-system.service';

describe('StarSystemService', () => {
  let service: StarSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
