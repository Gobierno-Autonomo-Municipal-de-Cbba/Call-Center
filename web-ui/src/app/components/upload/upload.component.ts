import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
  providers: [MessageService]
})
export class UploadComponent {
  @Input() informationLabel: string = '';
  @Input() informationLabel2: string = '';
  @Input() iconClass?: string;

  constructor(private messageService: MessageService) {}

  configureMessages(fileUpload: any) {
    if (fileUpload.files.length === 0) {
      this.showMessage('error', '¡Error!', 'No hay ningún archivo cargado.');
    } else {
      this.showMessage('success', '¡Éxito!', 'Archivo fue cargado.');
    }

    fileUpload.clear();
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 5000,
    });
  }
}
