import { Component } from '@angular/core';
import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { Profile } from '@domain/profile';
import { ProfileService } from '@service/profileservice';

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, TableModule, CommonModule],
  providers: [ProfileService],
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
})
export default class MyDataComponent {
  profiles: Profile[] = [];

  displayedFields = [
    { label: 'Nombre Completo', key: 'name' },
    { label: 'Documento de Identidad', key: 'ci' },
    { label: 'Cargo', key: 'position' },
    { label: 'Número de Ítem', key: 'item' },
    { label: 'Unidad Organizacional', key: 'unit' },
    { label: 'Correo Municipal', key: 'email' },
    { label: 'Rol', key: 'role' }
  ];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.fetchProfiles();
  }

  private fetchProfiles() {
    this.profileService.getProfiles().then(data => {
      this.profiles = data;
    });
  }
}
