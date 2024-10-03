import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {
  @Input() buttonText: string = '';
  @Output() onFilter = new EventEmitter<void>();

  handleState() {
    this.onFilter.emit();
  }
}
