import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';

@Component({
  selector: 'app-register-denunciation',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-denunciation.component.html',
  styleUrl: './register-denunciation.component.css'
})
export default class RegisterDenunciationComponent {

}
