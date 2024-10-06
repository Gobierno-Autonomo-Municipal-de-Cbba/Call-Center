import { Injectable } from '@angular/core';
import { PieChartModel, BarChartModel } from '@core/models/whatsapp/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private pieChartData(): PieChartModel {
    return {
      // API
      data: [21000, 650, 1500, 700, 5000]
    };
  } 

  private barChartData(): BarChartModel {
    return {
      // API
      data: [2145, 686, 653, 2906, 13866, 406, 1852]
    };
  }

  public getPieChartData(): PieChartModel {
    return this.pieChartData();
  }

  public getBarChartData(): BarChartModel {
    return this.barChartData();
  }
}
