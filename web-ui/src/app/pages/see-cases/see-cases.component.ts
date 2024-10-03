import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-see-cases',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './see-cases.component.html',
  styleUrl: './see-cases.component.css'
})
export default class SeeCasesComponent {

}
