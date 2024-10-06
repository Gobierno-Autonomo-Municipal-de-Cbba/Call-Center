import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';

@Component({
  selector: 'app-list-question',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.css'
})
export default class ListQuestionComponent {

}
