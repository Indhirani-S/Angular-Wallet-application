import { TestBed } from '@angular/core/testing';

import { WalletBackEndServiceService } from './wallet-back-end-service.service';

describe('WalletBackEndServiceService', () => {
  let service: WalletBackEndServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletBackEndServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
