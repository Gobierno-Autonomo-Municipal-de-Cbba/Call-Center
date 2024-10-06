import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FormsModule, CalendarModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() informationLabel: string = '';
  @Input() iconClass: string = '';
  @Input() date: Date | undefined;
  @Output() dateChange = new EventEmitter<Date>();

  onDateChange(event: Date) {
    this.dateChange.emit(event);
  }
}
