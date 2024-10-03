import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';

import { ProfileData } from '@core/models/profile.model';
import { ProfileService } from '@core/services/profile.service';

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, TableModule, CommonModule],
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
})
export default class MyDataComponent implements OnInit {
  profileData: ProfileData[] = [];
  profileField = [
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
    this.fetchProfile();
  }

  private fetchProfile() {
    this.profileService.getProfile().then(data => {
      this.profileData = data;
    });
  }
}
