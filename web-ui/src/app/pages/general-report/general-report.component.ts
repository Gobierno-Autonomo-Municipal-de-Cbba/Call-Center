import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { ActionButtonComponent } from '@components/button/action/action.component';
import { TagComponent } from '@components/tag/tag.component';

import { GeneralreportService } from '@core/services/general-report.service';

@Component({
  selector: 'app-general-report',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, ToastModule, CalendarComponent, ActionButtonComponent, TagComponent, ChartModule, CommonModule],
  templateUrl: './general-report.component.html',
  styleUrl: './general-report.component.css',
  providers: [MessageService]
})
export default class GeneralReportComponent implements OnInit {
  @ViewChild('startDate') startDate!: CalendarComponent;
  @ViewChild('endDate') endDate!: CalendarComponent;

  llamadasAtendidas = 44459;
  mensajesWhatsappAtendidos = 23623;
  totalCasosRegistrados = 68082;
  typecaseData: any;
  typecaseOptions: any;
  typeattentionData: any;
  typeattentionOptions: any;
  registeredoperatorData: any;
  registeredoperatorOptions: any;
  registeredunitData: any;
  registeredunitOptions: any;
  perpersonData: any;
  perpersonOptions: any;
  statuscaseData: any;
  statuscaseOptions: any;
  callsoperatorData: any;
  callsoperatorOptions: any;

  typecaseLabels = [
    'CONSULTA',
    'DENUNCIA',
    'DERIVACION',
    'OTRO',
    'RECLAMO',
    'SOLICITUD',
    'SUGERENCIA',
    'NO REGISTRADO'
  ];
  typeattentionLabels = ['ATENCION WHATSAPP', 'LLAMADA TELEFONICA'];
  registeredunitLabels = [
    ''
  ];
  registeredunitLegends = [
    'Registros de Casos por Unidad'
  ];
  statuacaseLabels = ['DERIVADO', 'FINALIZADA', 'PENDIENTE'];
  commonOperators = [
    'ALVARADO ALBARRACIN YOSELIN NEIVE',
    'ARIAS VEIZAGA FABIOLA',
    'BAUTISTA MARIA DEL CARMEN',
    'BELTRAN OROSCO SONIA MARIBEL',
    'CAMACHO VEIZAGA CARALA',
    'CONDORI LIMA SHIRLEY',
    'FUENTES ZAMBRANA ANA CARMEN',
    'ZETRO BOLIVAR JANETH LEONOR',
    'ELVIRA MONTAÑO ROJAS',
    'PEREZ ESPINOZA ANDREA VERONICA'
  ];
  commonLegends = [
    'DERIVACION',
    'OTRO',
    'CONSULTA',
    'RECLAMO',
    'SOLICITUD',
    'SUGERENCIA',
    'DENUNCIA',
  ];
  commonLegends2 = [
    'FINALIZADA',
    'PENDIENTE',
    'DERIVADO'
  ];
  commonColors = {
    typecase: ['#4AC1E0', '#FF69B4', '#3ADB76', '#FFD700', '#8B0000', '#006400', '#800080', '#808080'],
    typeattention: ['#800080', '#4AC1E0'],
    registeredoperator: ['#3ADB76', '#FFD700', '#4AC1E0', '#8B0000', '#006400', '#800080', '#FF69B4'],
    registeredunit: ['#4AC1E0'],
    perperson: ['#4AC1E0', '#FF69B4', '#3ADB76', '#FFD700', '#8B0000', '#006400', '#800080', '#808080', '#3ADB76', '#FFD700'],
    statuscase: ['#006400', '#4AC1E0', '#8B0000'],
    callsoperator: ['#4AC1E0', '#8B0000', '#006400']
  };

  constructor(
    private messageService: MessageService,
    private generalreportService: GeneralreportService
  ) {}

  ngOnInit() {
    Chart.register(ChartDataLabels);
    this.loadGraphics()
  }

  loadGraphics(){
    const typecaseData = this.generalreportService.getBartchart();
    const typeattentionData = this.generalreportService.getPiechart();
    const registeredoperatorData = this.generalreportService.getBartchart2();
    const registeredunitData = this.generalreportService.getBartchart3();
    const perpersonData = this.generalreportService.getBartchart4();
    const statuscaseData = this.generalreportService.getPiechart2();
    const callsoperatorData = this.generalreportService.getBartchart5();

    this.typecaseData = this.typecaseCreate(this.typecaseLabels, typecaseData);
    this.typecaseOptions = this.typecaseConfiguration();
    this.typeattentionData = this.typeattentionCreate(this.typeattentionLabels, typeattentionData);
    this.typeattentionOptions = this.sharedConfiguration();
    this.registeredoperatorData = this.registeredoperatorCreate(this.commonOperators, registeredoperatorData, this.commonLegends)
    this.registeredoperatorOptions = this.sharedConfiguration2()
    this.registeredunitData = this.registeredunitCreate(this.registeredunitLabels, registeredunitData, this.registeredunitLegends);
    this.registeredunitOptions = this.sharedConfiguration2();
    this.perpersonData = this.perpersonCreate(this.commonOperators, perpersonData);
    this.perpersonOptions = this.perpersonConfiguration();
    this.statuscaseData = this.statuscaseCreate(this.statuacaseLabels, statuscaseData);
    this.statuscaseOptions = this.sharedConfiguration();
    this.callsoperatorData = this.callsoperatorCreate(this.commonOperators, callsoperatorData, this.commonLegends2)
    this.callsoperatorOptions = this.sharedConfiguration2()
  }

  configureMessages() {
    const start = this.startDate?.date;
    const end = this.endDate?.date;

    if (!start || !end) {
      this.showMessage('error', '¡Error!', 'Debe seleccionar ambas fechas.');
    } else {
      this.showMessage('success', '¡Éxito!', 'Fechas filtradas correctamente.');
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 5000,
    });
  }

  typecaseCreate(labels: string[], barChartData: any) {
    return {
      labels: labels,
      datasets: [
        {
          data: barChartData.data,
          backgroundColor: this.commonColors.typecase.map(color => `${color}90`),
          borderColor: this.commonColors.typecase,
          borderWidth: 2,
        },
      ],
    };
  }

  typeattentionCreate(labels: string[], pieChartData: any) {
    return {
      labels: labels.map(
        (label, index) => `${label}: ${pieChartData.data[index]}`
      ),
      datasets: [
        {
          data: pieChartData.data,
          backgroundColor: this.commonColors.typeattention,
        },
      ],
    };
  }

  registeredoperatorCreate(labels: string[], barChartData: any, legendLabels: string[]) {
    return {
      labels: labels,
      datasets: barChartData.data.map((dataSet: number[], index: number) => ({
        label: legendLabels[index],
        data: dataSet,
        backgroundColor: `${this.commonColors.registeredoperator[index]}90`,
        borderColor: this.commonColors.registeredoperator[index],
        borderWidth: 2,
      })),
    };
  }

  registeredunitCreate(labels: string[], barChartData: any, legendLabels: string[]) {
    return {
      labels: labels,
      datasets: [
        {
          label: legendLabels,
          data: barChartData.data,
          backgroundColor: this.commonColors.registeredunit.map(color => `${color}90`),
          borderColor: this.commonColors.registeredunit,
          borderWidth: 2,
        },
      ],
    };
  }

  perpersonCreate(labels: string[], barChartData: any) {
    return {
      labels: labels,
      datasets: [
        {
          data: barChartData.data,
          backgroundColor: this.commonColors.perperson.map(color => `${color}90`),
          borderColor: this.commonColors.perperson,
          borderWidth: 2,
        },
      ],
    };
  }

  statuscaseCreate(labels: string[], pieChartData: any) {
    return {
      labels: labels.map(
        (label, index) => `${label}: ${pieChartData.data[index]}`
      ),
      datasets: [
        {
          data: pieChartData.data,
          backgroundColor: this.commonColors.statuscase,
        },
      ],
    };
  }

  callsoperatorCreate(labels: string[], barChartData: any, legendLabels2: string[]) {
    return {
      labels: labels,
      datasets: barChartData.data.map((dataSet: number[], index: number) => ({
        label: legendLabels2[index],
        data: dataSet,
        backgroundColor: `${this.commonColors.callsoperator[index]}90`,
        borderColor: this.commonColors.callsoperator[index],
        borderWidth: 2,
      })),
    };
  }

  typecaseConfiguration() {
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

  sharedConfiguration() {
    return {
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          labels: {
            font: {
              family: 'Poppins, sans-serif',
              size: 14,
              weight: 'bold',
            },
            color: '#000',
          },
        },
        datalabels: false,
      },
    };
  }

  sharedConfiguration2() {
    return {
      plugins: {
        tooltip: { enabled: false },
        datalabels: {
          color: '#000',
          anchor: 'left',
          align: 'left',
          formatter: (value: number) => value,
          font: {
            size: 20,
            weight: 'bold',
          },
          offset: 4,
        },
        legend: {
          labels: {
            font: {
              family: 'Poppins, sans-serif',
              size: 14,
              weight: 'bold',
            },
            color: '#000',
          },
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

  perpersonConfiguration() {
    return {
      plugins: {
        tooltip: { enabled: false },
        datalabels: {
          color: '#000',
          anchor: 'left',
          align: 'left',
          formatter: (value: number) => value,
          font: {
            size: 20,
            weight: 'bold',
          },
          offset: 4,
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
}
