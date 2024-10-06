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
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent {
  @Input() informationLabel: string = '';
  @Input() informationLabel2: string = '';
  @Input() iconClass?: string;

  constructor(private messageService: MessageService) {}

  statusMessages(fileUpload: any) {
    if (fileUpload.files.length === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No hay ningún archivo cargado.',
        life: 5000
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: '¡Éxito!',
        detail: 'Archivo fue cargado.',
        life: 5000
      });

      fileUpload.clear();
    }
  }
}
