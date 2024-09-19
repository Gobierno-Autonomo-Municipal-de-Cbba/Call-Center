import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { NavBarComponent } from '@shared/ui/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';
import { TagComponent } from '@components/tag/tag.component';

import { ProfileData, ProfileField } from '@domain/profile.domain';
import { ProfileService } from '@service/profile.service';

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TagComponent, TableModule, CommonModule],
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
})
export default class MyDataComponent implements OnInit {
  profileData: ProfileData[] = [];
  profileField: ProfileField[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.fetchProfile();
    this.profileField = this.profileService.getProfileField();
  }

  private fetchProfile() {
    this.profileService.getProfile().then(data => {
      this.profileData = data;
    });
  }
}
