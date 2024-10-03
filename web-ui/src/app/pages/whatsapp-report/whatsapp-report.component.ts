import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { ActionButtonComponent } from '@components/action-button/action-button.component';
import { TagComponent } from '@components/tag/tag.component';

import { PieChartData, BarChartData } from '@core/models/whatsapp/report.model';
import { ReportService } from '@core/services/whatsapp/report.service';

@Component({
  selector: 'app-whatsapp-report',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CalendarComponent, ActionButtonComponent, TagComponent, ChartModule, ToastModule],
  templateUrl: './whatsapp-report.component.html',
  styleUrls: ['./whatsapp-report.component.css'],
  providers: [MessageService]
})
export default class WhatsappReportComponent implements OnInit {
  @ViewChild('startDate') startDate!: CalendarComponent;
  @ViewChild('endDate') endDate!: CalendarComponent;

  pieData: any;
  pieOptions: any;
  barData: any;
  barOptions: any;

  constructor(
    private messageService: MessageService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    Chart.register(ChartDataLabels);
    this.initializeCharts();
  }

  onFilterDates() {
    const start = this.startDate?.date;
    const end = this.endDate?.date;

    if (!start || !end) {
      this.showToast('error', '¡Error!', 'Debe seleccionar ambas fechas.');
    } else {
      this.showToast('success', '¡Éxito!', 'Fechas filtradas correctamente.');
    }
  }

  private initializeCharts() {
    const pieChartData: PieChartData = this.reportService.getPieChartData();
    const barChartData: BarChartData = this.reportService.getBarChartData();

    const pieChartLabels = ['CONSULTA', 'DENUNCIA', 'FELICITACIÓN', 'RECLAMO', 'SOLICITUD'];
    const barChartLabels = [
      'DIRECCIÓN DE GESTIÓN DE MOVILIDAD URBANA',
      'DIRECCIÓN DE INTENDENCIA',
      'DIRECCIÓN DE MEDIO AMBIENTE',
      'DIRECCIÓN DE RECAUDACIONES',
      'OTRA',
      'PLATAFORMA ATENCIÓN AL CONTRIBUYENTE',
      'SECRETARIA DE SALUD'
    ];

    this.pieData = this.createPieData(pieChartLabels, pieChartData);
    this.pieOptions = this.createPieOptions();
    this.barData = this.createBarData(barChartLabels, barChartData);
    this.barOptions = this.createBarOptions();
  }

  private createPieData(labels: string[], pieChartData: PieChartData) {
    return {
      labels: labels.map(
        (label, index) => `${label}: ${pieChartData.data[index]}`
      ),
      datasets: [
        {
          data: pieChartData.data,
          backgroundColor: ['#4FB9A8', '#EA547C', '#4AC1E0', '#8A2BE2', '#F9B154'],
        },
      ],
    };
  }

  private createBarData(labels: string[], barChartData: BarChartData) {
    const commonColors = ['#4AC1E0', '#EA547C', '#3ADB76', '#1779BA', '#F18721', '#AE1857', '#4FB9A8'];

    return {
      labels: labels,
      datasets: [
        {
          data: barChartData.data,
          backgroundColor: commonColors.map(color => `${color}90`),
          borderColor: commonColors,
          borderWidth: 2,
        },
      ],
    };
  }

  private createPieOptions() {
    return {
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          labels: {
            font: {
              family: 'Poppins, sans-serif',
              size: 15,
              weight: 'bold',
            },
            color: '#000',
          },
        },
        datalabels: false,
      },
    };
  }

  private createBarOptions() {
    return {
      plugins: {
        tooltip: { enabled: false },
        datalabels: {
          color: '#000',
          anchor: 'left',
          align: 'left',
          formatter: (value: number) => value,
          font: {
            size: 30,
            weight: 'bold',
          },
          offset: -5,
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: { font: { size: 14 } },
        },
        x: {
          ticks: {
            font: {
              family: 'Poppins, sans-serif',
              size: 14,
            },
          },
        },
      },
    };
  }

  private showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 5000,
    });
  }
}
