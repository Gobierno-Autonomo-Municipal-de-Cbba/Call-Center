import { Injectable } from '@angular/core';
import { ChartModel } from '@core/models/whatsapp/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // API
  private piechartData: ChartModel = {
    data: [21000, 650, 1500, 700, 5000]
  }

  // API
  private barchartData: ChartModel = {
    data: [2145, 686, 653, 2906, 13866, 1852]
  }

  getPiechart(): ChartModel {
    return this.piechartData;
  }

  getBarchart(): ChartModel {
    return this.barchartData;
  }
}
