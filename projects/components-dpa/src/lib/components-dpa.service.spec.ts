import { TestBed } from '@angular/core/testing';

import { ComponentsDpaService } from './components-dpa.service';

describe('ComponentsDpaService', () => {
  let service: ComponentsDpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsDpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
