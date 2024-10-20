import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [ButtonModule, CommonModule, FormsModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionButtonComponent {
  @Input() informationLabel: string = '';
  @Input() iconClass: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
