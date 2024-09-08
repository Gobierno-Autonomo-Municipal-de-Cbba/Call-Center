import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-report-denunciations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './report-denunciations.component.html',
  styleUrl: './report-denunciations.component.css'
})
export default class ReportDenunciationsComponent {

}
