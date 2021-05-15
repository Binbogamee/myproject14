import { TestBed } from '@angular/core/testing';

import { HttpMynotesService } from './http-mynotes.service';

describe('HttpMynotesService', () => {
  let service: HttpMynotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMynotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
