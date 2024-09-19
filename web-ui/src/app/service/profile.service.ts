import { Injectable } from '@angular/core';
import { ProfileData, ProfileField } from '@domain/profile.domain';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileField: ProfileField[] = [
    { label: 'Nombre Completo', key: 'name' },
    { label: 'Documento de Identidad', key: 'ci' },
    { label: 'Cargo', key: 'position' },
    { label: 'Número de Ítem', key: 'item' },
    { label: 'Unidad Organizacional', key: 'unit' },
    { label: 'Correo Municipal', key: 'email' },
    { label: 'Rol', key: 'role' }
  ];

  private profileData: ProfileData[] = [
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

  public getProfileField(): ProfileField[] {
    return this.profileField;
  }

  public getProfileData(): ProfileData[] {
    return this.profileData;
  }

  public getProfile(): Promise<ProfileData[]> {
    return Promise.resolve(this.getProfileData());
  }
};
