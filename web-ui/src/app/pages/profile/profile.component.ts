import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { NavBarComponent } from '@shared/pages/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/pages/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';

import { ProfileService } from '@core/services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, TableModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export default class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  profileData: any[] = [];

  profileField = [
    { label: 'Nombre Completo', key: 'name' },
    { label: 'Documento de Identidad', key: 'ci' },
    { label: 'Cargo', key: 'position' },
    { label: 'Número de Ítem', key: 'item' },
    { label: 'Unidad Organizacional', key: 'unit' },
    { label: 'Correo Municipal', key: 'email' },
    { label: 'Rol', key: 'role' }
  ];

  ngOnInit() {
    this.profileService.getProfile().then(data => {
      this.profileData = data;
    });
  }
}
