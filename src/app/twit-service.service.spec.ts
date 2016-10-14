/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitServiceService } from './twit-service.service';

describe('Service: TwitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitServiceService]
    });
  });

  it('should ...', inject([TwitServiceService], (service: TwitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
