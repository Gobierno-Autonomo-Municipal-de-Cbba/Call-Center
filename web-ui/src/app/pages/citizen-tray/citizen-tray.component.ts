import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-citizen-tray',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './citizen-tray.component.html',
  styleUrl: './citizen-tray.component.css'
})
export default class CitizenTrayComponent {

}
