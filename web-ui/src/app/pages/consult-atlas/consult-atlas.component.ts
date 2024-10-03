import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-consult-atlas',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './consult-atlas.component.html',
  styleUrl: './consult-atlas.component.css'
})
export default class ConsultAtlasComponent {

}
