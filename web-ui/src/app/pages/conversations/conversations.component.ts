import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.css'
})
export default class ConversationsComponent {

}
