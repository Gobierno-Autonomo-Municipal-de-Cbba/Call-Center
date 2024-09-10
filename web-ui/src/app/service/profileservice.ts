import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  getProfilesData() {
    return [
      {
        id: '1000',
        name: 'CONDORI LIMA SHIRLEY',
        ci: 5271556,
        position: 'CONSULTOR DE LINEA',
        item: '00000',
        unit: 'DEPARTAMENTO DE REDES Y TELECOMUNICACIONES',
        email: 'gamc@cochabamba.bo',
        role: 'CALLCENTER'
      }
    ];
  }

  getProfiles() {
    return Promise.resolve(this.getProfilesData());
  }
};
