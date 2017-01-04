import { TestBed, async, inject } from '@angular/core/testing';
import { Monthly } from './monthly';
import { MonthlyDataService } from './monthlydata.service';

describe('MonthlyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthlyDataService]
    });
  });

  it('should ...', inject([MonthlyDataService], (service: MonthlyDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllMonthlys()', () => {

    it('should return an empty array by default', inject([MonthlyDataService], (service: MonthlyDataService) => {
      expect(service.getAllMonthlys()).toEqual([]);
    }));

    it('should return all monthlys', inject([MonthlyDataService], (service: MonthlyDataService) => {
      let monthly1 = new Monthly({ row1: 'Hello1', row2: 'Hello2', row3: 'Hello3' });
      let monthly2 = new Monthly({ row1: 'Hello1', row2: 'Hello2', row3: 'Hello3' });
      service.addMonthly(monthly1);
      service.addMonthly(monthly2);
      expect(service.getAllMonthlys()).toEqual([monthly1, monthly2]);
    }));

  });

});
