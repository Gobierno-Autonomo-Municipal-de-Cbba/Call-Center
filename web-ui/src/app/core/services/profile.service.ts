import { Injectable } from '@angular/core';
import { ProfileData } from '@core/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileData: ProfileData[] = [
    // API
    {
      id: '1000',
      name: 'TEST TEST',
      ci: 5271556,
      position: 'CONSULTOR DE LINEA',
      item: '00000',
      unit: 'DEPARTAMENTO DE REDES Y TELECOMUNICACIONES',
      email: 'gamc@cochabamba.bo',
      role: 'CALLCENTER'
    }
  ];

  public getProfileData(): ProfileData[] {
    return this.profileData;
  }

  public getProfile(): Promise<ProfileData[]> {
    return Promise.resolve(this.getProfileData());
  }
};
