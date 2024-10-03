import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-register-question',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-question.component.html',
  styleUrl: './register-question.component.css'
})
export default class RegisterQuestionComponent {

}
