import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-list-question',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.css'
})
export default class ListQuestionComponent {

}
