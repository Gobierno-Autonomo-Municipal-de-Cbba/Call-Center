import { Injectable } from '@angular/core';
import { PieChartData, BarChartData } from '@core/models/whatsapp/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private pieChartData(): PieChartData {
    return {
      // API
      data: [21000, 650, 1500, 700, 5000]
    };
  }

  private barChartData(): BarChartData {
    return {
      // API
      data: [2145, 686, 653, 2906, 13866, 406, 1852]
    };
  }

  public getPieChartData(): PieChartData {
    return this.pieChartData();
  }

  public getBarChartData(): BarChartData {
    return this.barChartData();
  }
}
