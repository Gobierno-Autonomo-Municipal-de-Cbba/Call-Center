import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { InformationButtonComponent } from '@components/button/information/information.component';
import { SearchInputComponent } from '@components/input/search/search.component';

import { ConversationModel } from '@core/models/whatsapp/conversations.model';
import { ConversationsService } from '@core/services/whatsapp/conversations.service';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule, TagComponent, CalendarComponent, InformationButtonComponent, SearchInputComponent, ToastModule, TableModule, DialogModule, ButtonModule, FormsModule, PaginatorModule],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.css',
  providers: [MessageService]
})
export default class ConversationsComponent implements OnInit {
  conversationDialog = false;
  conversations: any[] = [];
  conversation!: ConversationModel;
  filteredConversations: any[] = [];
  startDate: Date | undefined;
  endDate: Date | undefined;
  rowsToShow = 4;
  increment = 10;
  firstClick = true;
  searchTerm: string = '';

  informationButtons = [
    { text: 'MOSTRAR 10 REGISTROS', onClick: true },
    { text: 'EXPORTAR EXCEL', onClick: true },
    { text: 'EXPORTAR PDF', onClick: true },
    { text: 'COPIAR', onClick: true }
  ];

  headerColumns = [
    { label: '#', sortableField: '' },
    { label: 'Número de Whatsapp', sortableField: 'number' },
    { label: 'Agente que lo Atendió', sortableField: 'agent' },
    { label: 'Fecha Atendido', sortableField: 'date' },
    { label: 'Opciones', sortableField: '' }
  ];

  bodyFields = [
    { key: 'id', prefix: '' },
    { key: 'number', prefix: '+591 ' },
    { key: 'agent', prefix: '' },
    { key: 'date', prefix: '' }
  ];

  constructor(
    private conversationsService: ConversationsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.conversationsService.getConversations().then(data => {
      this.conversations = data;
      this.filteredConversations = [...data];
    });
  }

  onDateChange(): void {
    if (this.endDate) {
      this.endDate.setHours(23, 59, 59, 999);
    }

    this.filteredConversations = this.conversations.filter(conversation => {
      const conversationDate = new Date(conversation.date);
      return (
        (!this.startDate || conversationDate >= this.startDate) &&
        (!this.endDate || conversationDate <= this.endDate)
      );
    });
  }

  handleButtonClick(buttonText: string): void {
    switch (buttonText) {
      case 'MOSTRAR 10 REGISTROS':
        this.loadMoreRecords();
        break;
      case 'EXPORTAR EXCEL':
        this.exportToExcel();
        break;
      case 'EXPORTAR PDF':
        this.exportToPdf();
        break;
      case 'COPIAR':
        this.statusMessages();
        break;
      default:
        console.warn(`Acción no definida para el botón: ${buttonText}`);
    }
  }

  loadMoreRecords(): void {
    if (this.firstClick) {
      this.rowsToShow = 10;
      this.firstClick = false;
    } else {
      this.rowsToShow += this.increment;
    }

    this.rowsToShow = Math.min(this.rowsToShow, this.filteredConversations.length);
  }

  exportToExcel() {
    console.log('Exportando a Excel...');
  }

  exportToPdf() {
    console.log('Exportando a PDF...');
  }

  statusMessages() {
    this.messageService.add({
      severity: 'success',
      summary: '¡Éxito!',
      detail: 'Copiado correctamente.',
      life: 5000
    });
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterConversations();
  }
  filterConversations(): void {
    const searchTermLower = this.searchTerm.toLowerCase().trim();

    if (!searchTermLower) {
      this.filteredConversations = [...this.conversations];
    } else {
      this.filteredConversations = this.conversations.filter(conversation => {
        return Object.keys(conversation).some(key => {
          const value = String(conversation[key]).toLowerCase();
          return value.includes(searchTermLower);
        });
      });
    }
  }

  showConversation(conversation: ConversationModel) {
    this.conversation = { ...conversation };
    this.conversationDialog = true;
  }
}
