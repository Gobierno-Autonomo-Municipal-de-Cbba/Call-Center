import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';

@Component({
  selector: 'app-general-report',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './general-report.component.html',
  styleUrl: './general-report.component.css'
})
export default class GeneralReportComponent {

}
