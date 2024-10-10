import { Injectable } from '@angular/core';
import { ProfileModel } from '@core/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // API
  private profileData: ProfileModel[] = [
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

  getProfile(): Promise<ProfileModel[]> {
    return Promise.resolve(this.profileData);
  }
};
