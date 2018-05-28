import { TestBed, inject } from '@angular/core/testing';

import { CommentsDataService } from './comments-data.service';

describe('CommentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsDataService]
    });
  });

  it('should be created', inject([CommentsDataService], (service: CommentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
