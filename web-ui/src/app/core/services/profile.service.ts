import { Injectable } from '@angular/core';
import { ProfileModel } from '@core/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileData: ProfileModel[] = [
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

  public getProfileData(): ProfileModel[] {
    return this.profileData;
  }

  public getProfile(): Promise<ProfileModel[]> {
    return Promise.resolve(this.getProfileData());
  }
};
