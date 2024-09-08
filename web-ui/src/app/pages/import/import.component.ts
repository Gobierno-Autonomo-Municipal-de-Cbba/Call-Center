import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export default class ImportComponent {

}
