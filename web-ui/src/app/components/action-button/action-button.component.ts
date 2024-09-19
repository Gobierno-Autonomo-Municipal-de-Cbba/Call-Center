import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {

}
