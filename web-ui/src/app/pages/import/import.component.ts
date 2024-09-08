import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export default class ImportComponent {

}
