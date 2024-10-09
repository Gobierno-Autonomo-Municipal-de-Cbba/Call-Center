import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component'
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { InformationButtonComponent } from "../../components/button/information/information.component";
import { InformationInputComponent } from '@components/input/information/information.component';
import { ActionButtonComponent } from '@components/button/action/action.component';

@Component({
  selector: 'app-consult-atlas',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, InformationButtonComponent, InformationInputComponent, ActionButtonComponent, DropdownModule],
  templateUrl: './consult-atlas.component.html',
  styleUrl: './consult-atlas.component.css'
})
export default class ConsultAtlasComponent implements OnInit {
  cities: any[] = [];
  selectedCity: undefined;

  ngOnInit() {
    this.cities = [
        { name: '2024', code: 'NY' },
        { name: '2023', code: 'RM' },
        { name: '2022', code: 'LDN' },
        { name: '2021', code: 'IST' }
    ];
  }
}
