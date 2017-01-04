import { Injectable } from '@angular/core';
import { Monthly } from './monthly';

@Injectable()
export class MonthlyDataService {

  // Placeholder for monthly's
  monthlys: Monthly[] = [];

  constructor() {
  }

  // Simulate GET /monthlys
  getAllMonthlys(): Monthly[] {
    return this.monthlys;
  }

  // Simulate POST /monthlys
  addMonthly(monthly: Monthly): MonthlyDataService {
    this.monthlys.push(monthly);
    return this;
  }

}
