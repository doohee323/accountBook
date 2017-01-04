import { Component } from '@angular/core';
import { Monthly } from './monthly';
import { MonthlyDataService } from './monthlydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MonthlyDataService]
})
export class AppComponent {

  newMonthly: Monthly = new Monthly();
  mData: Monthly[] = [];

  constructor(private monthlyDataService: MonthlyDataService) {
  }

  addMonthly() {
    this.monthlyDataService.addMonthly(this.newMonthly);
    this.newMonthly = new Monthly();
  }

  get monthlys() {
    this.mData = this.monthlyDataService.getAllMonthlys();
    if (this.mData.length === 0) {
      let monthly1 = new Monthly({ row1: 'Hello1', row2: 'Hello2', row3: 'Hello3' });
      let monthly2 = new Monthly({ row1: 'Hello1', row2: 'Hello2', row3: 'Hello3' });
      this.monthlyDataService.addMonthly(monthly1);
      this.monthlyDataService.addMonthly(monthly2);
    }
    return this.mData;
  }

}
