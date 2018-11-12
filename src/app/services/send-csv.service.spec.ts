import { TestBed } from '@angular/core/testing';

import { SendCsvService } from './send-csv.service';

describe('SendCsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendCsvService = TestBed.get(SendCsvService);
    expect(service).toBeTruthy();
  });
});
