import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, DropdownModule, CommonModule, InputGroupModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit {
  @Input() informationLabel: string = '';
  @Input() placeholderLabel: string = '';
  @Input() dropdownWidth: string = '';
  @Input() iconClass: string = '';
  @Input() dropdownType: 'years' | 'quantities' = 'years';
  @Input() options: any[] = [];
  @Output() changeOption : EventEmitter<any> = new EventEmitter<any>();

  dropdownOptions: any[] = [];
  selectedOption: any;
  optionLabel: string = '';

  ngOnInit() {
    if (this.dropdownType === 'years') {
      this.optionYears();
    } else if (this.dropdownType === 'quantities') {
      this.optionQuantities();
    }
  }

  onHandle(event: any): void {
    this.changeOption.emit(event.value);
  }

  optionYears() {
    const currentYear = new Date().getFullYear();
    const initialYear: number = 2021;
    this.dropdownOptions = [];

    for (let year = currentYear; year >= initialYear; year--) {
      this.dropdownOptions.push({ year: year.toString() });
    }
    this.optionLabel = 'year';
  }

  optionQuantities() {
    this.dropdownOptions = [
      { quantity: 15 },
      { quantity: 30 },
      { quantity: 45 },
      { quantity: 'TODOS' }
    ];
    this.optionLabel = 'quantity';
  }
}
