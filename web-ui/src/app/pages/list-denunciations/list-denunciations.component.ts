import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'app-list-denunciations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './list-denunciations.component.html',
  styleUrl: './list-denunciations.component.css'
})
export default class ListDenunciationsComponent {

}
