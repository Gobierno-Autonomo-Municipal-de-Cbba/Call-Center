import { Component } from '@angular/core';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { InformationButtonComponent } from "../../components/button/information/information.component";
import { InformationInputComponent } from '@components/input/information/information.component';

@Component({
  selector: 'app-consult-atlas',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, InformationButtonComponent, InformationInputComponent],
  templateUrl: './consult-atlas.component.html',
  styleUrl: './consult-atlas.component.css'
})
export default class ConsultAtlasComponent {

}
