import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { InformationButtonComponent } from '@components/information-button/information-button.component';
import { InformationInputComponent } from '@components/information-input/information-input.component';

import { Conversation } from '@core/models/whatsapp/conversations.model';
import { ConversationsService } from '@core/services/whatsapp/conversations.service';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule, TagComponent, CalendarComponent, InformationButtonComponent, InformationInputComponent, ToastModule, TableModule, DialogModule, ButtonModule, PaginatorModule],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.css',
  providers: [MessageService]
})
export default class ConversationsComponent implements OnInit {
  conversationDialog = false;
  conversations!: Conversation[];
  conversation!: Conversation;

  informationButtons = [
    { text: 'MOSTRAR 10 REGISTROS' },
    { text: 'EXPORTAR EXCEL' },
    { text: 'EXPORTAR PDF' },
    { text: 'COPIAR', onClick: true }
  ];

  constructor(
    private conversationsService: ConversationsService,
    private messageService: MessageService
  ) {}

  statusMessages() {
    this.messageService.add({
      severity: 'success',
      summary: '¡Éxito!',
      detail: 'Copiado correctamente.',
      life: 5000
    });
  }

  ngOnInit() {
    this.conversationsService.getConversations().then(data => {
      this.conversations = data;
    });
  }

  showConversation(conversation: Conversation) {
    this.conversation = { ...conversation };
    this.conversationDialog = true;
  }
}
