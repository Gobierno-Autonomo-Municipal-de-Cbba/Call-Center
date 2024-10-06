import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';

@Component({
  selector: 'app-register-question',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-question.component.html',
  styleUrl: './register-question.component.css'
})
export default class RegisterQuestionComponent {

}
