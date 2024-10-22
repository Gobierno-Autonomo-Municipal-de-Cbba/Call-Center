import { Injectable } from '@angular/core';
import { ChartModel } from '@core/models/whatsapp/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // API
  private piechartData: ChartModel = {
    data: [1500, 650, 21881, 5000]
  }

  // API
  private barchartData: ChartModel = {
    data: [2145, 686, 653, 2906, 13866, 406, 1852]
  }

  getPiechart(): ChartModel {
    return this.piechartData;
  }

  getBarchart(): ChartModel {
    return this.barchartData;
  }
}
