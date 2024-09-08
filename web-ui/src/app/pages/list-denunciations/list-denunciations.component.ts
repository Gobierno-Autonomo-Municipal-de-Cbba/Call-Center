import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-list-denunciations',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './list-denunciations.component.html',
  styleUrl: './list-denunciations.component.css'
})
export default class ListDenunciationsComponent {

}
