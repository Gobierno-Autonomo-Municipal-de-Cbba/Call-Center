import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-citizen-tray',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './citizen-tray.component.html',
  styleUrl: './citizen-tray.component.css'
})
export default class CitizenTrayComponent {

}
