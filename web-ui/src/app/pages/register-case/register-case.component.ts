import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-register-case',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './register-case.component.html',
  styleUrl: './register-case.component.css'
})
export default class RegisterCaseComponent {

}
