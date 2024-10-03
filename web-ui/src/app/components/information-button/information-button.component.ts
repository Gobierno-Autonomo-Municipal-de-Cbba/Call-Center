import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-information-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './information-button.component.html',
  styleUrl: './information-button.component.css'
})
export class InformationButtonComponent {
  @Input() informationText: string = '';
  @Output() buttonClick = new EventEmitter<void>();
  
  onClick() {
    this.buttonClick.emit();
  }
}
