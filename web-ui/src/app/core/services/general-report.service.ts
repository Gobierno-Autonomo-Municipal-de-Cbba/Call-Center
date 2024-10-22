import { Injectable } from '@angular/core';
import { GeneralreportModel } from '@core/models/general-report.model';

@Injectable({
  providedIn: 'root',
})
export class GeneralreportService {
  // API
  private typecaseData: GeneralreportModel = {
    data: [54287, 454, 439, 78, 11963, 67, 16, 1125]
  }

  // API
  private typeattentionData: GeneralreportModel = {
    data: [44459, 23623]
  }

  // API
  private registeredoperatorData: GeneralreportModel = {
    data: [
      /* Derivacion */
      [null, null, null, null, null, null, null, null, null, null],
      /* Otro */
      [null, null, null, null, null, null, null, null, null, null],
      /* Consulta */
      [3388, 4794, 2232, 901, 3431, 5288, 2278, 2227, 1409, 1018],
      /* Reclamo */
      [193, 1680, 1144, 408, 917, 2895, 693, 125, 693, 1144],
      /* Solicitud */
      [null, null, null, null, null, null, null, null, null, null],
      /* Sugerencia */
      [null, null, null, null, null, null, null, null, null, null],
      /* Denuncia */
      [null, null, null, null, null, null, null, null, null, null],
    ]
  }

  // API
  private registeredunitData: GeneralreportModel = {
    data: []
  }

  // API
  private perpersonData: GeneralreportModel = {
    data: [3388, 4794, 2232, 901, 3431, 5288, 2278, 2227, 1409, 1018]
  }

  // API
  private statuscaseData: GeneralreportModel = {
    data: [359, 47709, 700]
  }

  // API
  private callsoperatorData: GeneralreportModel = {
    data: [
      /* Finalizada */
      [3612, 6487, 3383, 1383, 4623, 1582, 8167, 2985, 3399, 1955],
      /* Pendiente */
      [null, 12, 7, 16, 45, null, 14, 585, null, 27],
      /* Derivado */
      [null, null, null, null, null, null, null, null, null, null],
    ]
  }

  getBartchart(): GeneralreportModel {
    return this.typecaseData;
  }

  getPiechart(): GeneralreportModel {
    return this.typeattentionData;
  }

  getBartchart2(): GeneralreportModel {
    return this.registeredoperatorData;
  }

  getBartchart3(): GeneralreportModel {
    return this.registeredunitData;
  }

  getBartchart4(): GeneralreportModel {
    return this.perpersonData;
  }

  getPiechart2(): GeneralreportModel {
    return this.statuscaseData;
  }

  getBartchart5(): GeneralreportModel {
    return this.callsoperatorData;
  }
};
