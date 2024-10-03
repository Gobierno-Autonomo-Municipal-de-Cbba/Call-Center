import { Component, Input } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-information-input',
  standalone: true,
  imports: [InputIconModule, IconFieldModule, InputTextModule, FormsModule],
  templateUrl: './information-input.component.html',
  styleUrl: './information-input.component.css'
})
export class InformationInputComponent {
  @Input() informationInput: string = '';
}
