import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';

@Component({
  selector: 'app-register-case',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-case.component.html',
  styleUrl: './register-case.component.css'
})
export default class RegisterCaseComponent {

}
