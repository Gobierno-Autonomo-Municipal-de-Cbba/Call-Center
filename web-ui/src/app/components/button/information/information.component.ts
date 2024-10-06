import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-information-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationButtonComponent {
  @Input() informationLabel: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
