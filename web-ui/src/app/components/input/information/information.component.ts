import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-information-input',
  standalone: true,
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationInputComponent {
  @Input() informationLabel: string = '';
  @Input() iconClass: string = '';
  @Input() inputWidth: string = '';
  @Input() inputValue: string = '';
  @Output() inputvalueChange = new EventEmitter<string>();

  onChange(event: any) {
    this.inputValue = event.target.value;
    this.inputvalueChange.emit(this.inputValue);
  }
}
