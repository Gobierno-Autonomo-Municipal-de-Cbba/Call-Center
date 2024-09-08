import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-register-denunciation',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-denunciation.component.html',
  styleUrl: './register-denunciation.component.css'
})
export default class RegisterDenunciationComponent {

}
