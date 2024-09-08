import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component'

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.css'
})
export default class MyDataComponent {

}
