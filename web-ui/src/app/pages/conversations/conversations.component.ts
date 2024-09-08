import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.css'
})
export default class ConversationsComponent {

}
