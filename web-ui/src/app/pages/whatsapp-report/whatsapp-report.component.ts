import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-whatsapp-report',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './whatsapp-report.component.html',
  styleUrl: './whatsapp-report.component.css'
})
export default class WhatsappReportComponent {

}
