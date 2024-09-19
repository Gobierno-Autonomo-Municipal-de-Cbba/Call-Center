import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { ActionButtonComponent } from '@components/action-button/action-button.component';
import { TagComponent } from '@components/tag/tag.component';

import { PieChartData, BarChartData } from '@domain/whatsapp-report.domain';
import { WhatsappReportService } from '@service/whatsapp-report.service';

@Component({
  selector: 'app-whatsapp-report',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CalendarComponent, ActionButtonComponent, TagComponent, ChartModule],
  templateUrl: './whatsapp-report.component.html',
  styleUrls: ['./whatsapp-report.component.css'],
})
export default class WhatsappReportComponent implements OnInit {
  pieData: any;
  pieOptions: any;
  barData: any;
  barOptions: any;

  constructor(private whatsappReportService: WhatsappReportService) {}

  ngOnInit() {
    Chart.register(ChartDataLabels);

    const pieChartData: PieChartData = this.whatsappReportService.getPieChartData();
    const barChartData: BarChartData = this.whatsappReportService.getBarChartData();

    const joinLabels = pieChartData.labels.map((label, index) => `${label}: ${pieChartData.data[index]}`);

    this.pieData = {
      labels: joinLabels,
      datasets: [
        {
          data: pieChartData.data,
          backgroundColor: ['#4FB9A8', '#EA547C', '#4AC1E0', '#8A2BE2', '#F9B154'],
        }
      ]
    };

    this.pieOptions = {
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
            color: '#000'
          }
        },
        datalabels: false
      }
    };

    this.barData = {
      labels: barChartData.labels,
      datasets: [
        {
          data: barChartData.data,
          backgroundColor: ['#4AC1E090', '#EA547C90', '#3ADB7690', '#1779BA90', '#F1872190', '#AE185790', '#4FB9A890'],
          borderColor: ['#4AC1E0', '#EA547C', '#3ADB76', '#1779BA', '#F18721', '#AE1857', '#4FB9A8'],
          borderWidth: 2
        }
      ]
    };

    this.barOptions = {
      plugins: {
        tooltip: {
          enabled: false
        },
        datalabels: {
          color: '#000',
          anchor: 'left',
          align: 'left',
          formatter: (value: number) => value,
          font: {
            size: 30,
            weight: 'bold'
          },
          offset: -5
        },
        legend: {
          display: false,
        }
      },
      scales: {
        y: {
          ticks: {
            font: {
              size: 14
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Poppins, sans-serif',
              size: 14
            },
          }
        }
      }
    };
  }
}
