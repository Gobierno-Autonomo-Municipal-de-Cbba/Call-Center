import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionButtonComponent {
  @Input() informationLabel: string = '';
  @Input() iconClass: string = '';
  @Output() onFilter = new EventEmitter<void>();

  handleState() {
    this.onFilter.emit();
  }
}
