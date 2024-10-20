import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { InformationButtonComponent } from "@components/button/information/information.component";
import { InformationInputComponent } from '@components/input/information/information.component';
import { ActionButtonComponent } from '@components/button/action/action.component';
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { SearchInputComponent } from "@components/input/search/search.component";

import { ConsultatlasssService } from '@core/services/consult-atlas.service';

@Component({
  selector: 'app-consult-atlas',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, InformationButtonComponent, InformationInputComponent, ActionButtonComponent, DropdownComponent, SearchInputComponent, TableModule, DialogModule, ButtonModule, FormsModule, PaginatorModule, CommonModule, ToastModule],
  templateUrl: './consult-atlas.component.html',
  styleUrl: './consult-atlas.component.css',
  providers: [MessageService]
})
export default class ConsultAtlasComponent implements OnInit {
  consultatlasDialog = false;
  consultatlasss: any[] = [];
  consultatlas!: any;
  filteredConsultatlasss: any[] = [];
  searchTerm: string = '';
  rows: number = 15;
  subjectFilter: string = '';
  generalNumberFilter: string = '';
  applicantFilter: string = '';

  headerColumns = [
    { label: 'Nro General', sortableField: '' },
    { label: 'Nro de Oficina', sortableField: 'office' },
    { label: 'Solicitante', sortableField: 'applicant' },
    { label: 'Asunto', sortableField: 'issue' },
    { label: 'Institución', sortableField: 'institution' },
    { label: 'Opciones', sortableField: '' }
  ];
  bodyFields = [
    { key: 'general' },
    { key: 'office' },
    { key: 'applicant' },
    { key: 'issue' },
    { key: 'institution' }
  ];
  inputConfigs = [
    { label: 'Asunto', icon: 'icon-1', width: '234px', type: 'input', onChange: this.subjectStart.bind(this) },
    { label: 'Gestión', icon: 'icon-2', width: '115px', type: 'dropdown', dropdownType: 'years' as 'years' | 'quantities' },
    { label: 'N° General', icon: 'icon-3', width: '115px', type: 'input', onChange: this.generalnumberStart.bind(this) },
    { label: 'Solicitante', icon: 'icon-4', width: '234px', type: 'input', onChange: this.applicantStart.bind(this) },
    { label: 'Buscar', icon: 'icon-5', type: 'button' }
  ];

  constructor(
    private consultatlasssService: ConsultatlasssService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.consultatlasssService.getConsultatlasss().then(data => {
      this.consultatlasss = data;
      this.filteredConsultatlasss = [...data];
    });
  }

  subjectStart(value: string): void {
    this.subjectFilter = value;
  }

  generalnumberStart(value: string): void {
    this.generalNumberFilter = value;
  }

  applicantStart(value: string): void {
    this.applicantFilter = value;
  }

  filterRecords(): void {
    const validateData =
      this.subjectFilter.trim() !== '' ||
      this.generalNumberFilter.trim() !== '' ||
      this.applicantFilter.trim() !== '';

    this.configureMessages(validateData);


    if (!validateData) {
      const normalizeString = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
      const subjectFilterLower = normalizeString(this.subjectFilter);
      const generalNumberLower = normalizeString(this.generalNumberFilter);
      const applicantLower = normalizeString(this.applicantFilter);

      this.filteredConsultatlasss = this.consultatlasss.filter(consultatlas => {
        const normalizeValue = (value: any) => normalizeString(String(value));
        const matchesSubjectFilter = !subjectFilterLower || normalizeValue(consultatlas.issue).includes(subjectFilterLower);
        const matchesGeneralNumber = !generalNumberLower || normalizeValue(consultatlas.general).includes(generalNumberLower);
        const matchesApplicant = !applicantLower || normalizeValue(consultatlas.applicant).includes(applicantLower);

        return matchesSubjectFilter && matchesGeneralNumber && matchesApplicant;
      });
    } else {
      this.filteredConsultatlasss = [];
    }
  }

  configureMessages(validateData: boolean): void {
    if (!validateData) {
      this.showMessage('error', '¡Error!', 'Debe llenar al menos 1 campo.');
    } else {
      this.showMessage('success', '¡Éxito!', 'Campos filtrados correctamente.');
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

  showRecords(selectedOption: any): void {
    this.rows = selectedOption?.quantity === 'TODOS' ? 1000 : selectedOption.quantity || 15;
  }

  searchRecords(searchTerm: string): void {
    this.searchTerm = searchTerm;
    const normalizeString = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const searchTermLower = normalizeString(this.searchTerm);

    this.filteredConsultatlasss = !searchTermLower ? [...this.consultatlasss] : this.consultatlasss.filter(consultatlas => {
      return Object.keys(consultatlas).some(key => {
        const value = normalizeString(String(consultatlas[key]));
        return value.includes(searchTermLower);
      });
    });
  }

  openOption(consultatlas: any) {
    this.consultatlas = { ...consultatlas };
    this.consultatlasDialog = true;
  }
}
