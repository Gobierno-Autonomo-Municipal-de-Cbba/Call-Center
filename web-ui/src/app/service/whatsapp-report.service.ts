import { Injectable } from '@angular/core';
import { PieChartData, BarChartData } from '@domain/whatsapp-report.domain';

@Injectable({
  providedIn: 'root',
})
export class WhatsappReportService {
  private pieChartData(): PieChartData {
    return {
      labels: ['CONSULTA', 'DENUNCIA', 'FELICITACIÓN', 'RECLAMO', 'SOLICITUD'],
      data: [21000, 650, 1500, 700, 5000]
    };
  }

  private barChartData(): BarChartData {
    return {
      labels: [
        'DIRECCIÓN DE GESTIÓN DE MOVILIDAD URBANA',
        'DIRECCIÓN DE INTENDENCIA',
        'DIRECCIÓN DE MEDIO AMBIENTE',
        'DIRECCIÓN DE RECAUDACIONES',
        'OTRA',
        'PLATAFORMA ATENCIÓN AL CONTRIBUYENTE',
        'SECRETARIA DE SALUD'
      ],
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
