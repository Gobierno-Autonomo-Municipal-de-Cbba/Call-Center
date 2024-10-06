import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [InputIconModule, IconFieldModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchInputComponent {
  @Input() informationLabel: string = '';
  @Input() informationInput: string = '';
  @Input() iconClass: string = '';
  @Output() informationInputChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: any): void {
    this.informationInputChange.emit(event.target.value);
  }
}
