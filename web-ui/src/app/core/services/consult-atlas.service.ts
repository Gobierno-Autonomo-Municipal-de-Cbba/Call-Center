import { Injectable } from '@angular/core';
import { ConsultatlasModel } from '@core/models/consult-atlas.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultatlasssService {
  // API
  private consultatlasData: ConsultatlasModel[] = [
    {
      general: 1,
      office: 24,
      applicant: 'Alfonzo Fernandez',
      issue: 'Cómo registrar a un ciudadano en el sistema y darle la información que solicita',
      institution: 'DEPARTAMENTO DE REDES Y COMUNICACIONES'
    },
    {
      general: 2,
      office: 12,
      applicant: 'María López',
      issue: 'Problemas para validar la identidad del ciudadano en el sistema',
      institution: 'UNIDAD DE ATENCIÓN AL CIUDADANO'
    },
    {
      general: 3,
      office: 33,
      applicant: 'Carlos Pérez',
      issue: 'No se puede generar reporte de ciudadanos atendidos',
      institution: 'DEPARTAMENTO DE SISTEMAS'
    },
    {
      general: 4,
      office: 17,
      applicant: 'Juana García',
      issue: 'Inconvenientes al buscar historiales de atención de un ciudadano',
      institution: 'UNIDAD DE HISTORIAL Y DOCUMENTOS'
    },
    {
      general: 5,
      office: 28,
      applicant: 'Pedro Castillo',
      issue: 'No aparecen actualizados los datos del ciudadano en el sistema',
      institution: 'DEPARTAMENTO DE CATASTRO'
    },
    {
      general: 6,
      office: 45,
      applicant: 'Lucía Gómez',
      issue: 'Dificultades para transferir un caso a otra oficina',
      institution: 'DEPARTAMENTO DE RECURSOS HUMANOS'
    },
    {
      general: 7,
      office: 11,
      applicant: 'Jorge Ramírez',
      issue: 'El sistema no permite cerrar la consulta abierta por otro agente',
      institution: 'DEPARTAMENTO DE SEGURIDAD Y CONTROL'
    },
    {
      general: 8,
      office: 34,
      applicant: 'Ana Méndez',
      issue: 'Cómo agregar información adicional al expediente de un ciudadano',
      institution: 'DEPARTAMENTO DE LEGAL Y ASISTENCIA JURÍDICA'
    },
    {
      general: 9,
      office: 19,
      applicant: 'Fernando Sosa',
      issue: 'Problemas al acceder a la base de datos de ciudadanos',
      institution: 'UNIDAD DE BASE DE DATOS Y ANALÍTICA'
    },
    {
      general: 10,
      office: 30,
      applicant: 'Isabel Martínez',
      issue: 'Error al cargar documentos en el expediente digital',
      institution: 'UNIDAD DE DOCUMENTACIÓN Y ARCHIVO'
    },
    {
      general: 11,
      office: 22,
      applicant: 'Ricardo Varela',
      issue: 'Dificultad para gestionar consultas sobre servicios públicos',
      institution: 'DEPARTAMENTO DE SERVICIOS PÚBLICOS'
    },
    {
      general: 1,
      office: 24,
      applicant: 'Alfonzo Fernandez',
      issue: 'Cómo registrar a un ciudadano en el sistema y darle la información que solicita',
      institution: 'DEPARTAMENTO DE REDES Y COMUNICACIONES'
    },
    {
      general: 2,
      office: 12,
      applicant: 'María López',
      issue: 'Problemas para validar la identidad del ciudadano en el sistema',
      institution: 'UNIDAD DE ATENCIÓN AL CIUDADANO'
    },
    {
      general: 3,
      office: 33,
      applicant: 'Carlos Pérez',
      issue: 'No se puede generar reporte de ciudadanos atendidos',
      institution: 'DEPARTAMENTO DE SISTEMAS'
    },
    {
      general: 4,
      office: 17,
      applicant: 'Juana García',
      issue: 'Inconvenientes al buscar historiales de atención de un ciudadano',
      institution: 'UNIDAD DE HISTORIAL Y DOCUMENTOS'
    },
    {
      general: 5,
      office: 28,
      applicant: 'Pedro Castillo',
      issue: 'No aparecen actualizados los datos del ciudadano en el sistema',
      institution: 'DEPARTAMENTO DE CATASTRO'
    },
    {
      general: 6,
      office: 45,
      applicant: 'Lucía Gómez',
      issue: 'Dificultades para transferir un caso a otra oficina',
      institution: 'DEPARTAMENTO DE RECURSOS HUMANOS'
    },
    {
      general: 7,
      office: 11,
      applicant: 'Jorge Ramírez',
      issue: 'El sistema no permite cerrar la consulta abierta por otro agente',
      institution: 'DEPARTAMENTO DE SEGURIDAD Y CONTROL'
    },
    {
      general: 8,
      office: 34,
      applicant: 'Ana Méndez',
      issue: 'Cómo agregar información adicional al expediente de un ciudadano',
      institution: 'DEPARTAMENTO DE LEGAL Y ASISTENCIA JURÍDICA'
    },
    {
      general: 9,
      office: 19,
      applicant: 'Fernando Sosa',
      issue: 'Problemas al acceder a la base de datos de ciudadanos',
      institution: 'UNIDAD DE BASE DE DATOS Y ANALÍTICA'
    },
    {
      general: 10,
      office: 30,
      applicant: 'Isabel Martínez',
      issue: 'Error al cargar documentos en el expediente digital',
      institution: 'UNIDAD DE DOCUMENTACIÓN Y ARCHIVO'
    },
    {
      general: 11,
      office: 22,
      applicant: 'Ricardo Varela',
      issue: 'Dificultad para gestionar consultas sobre servicios públicos',
      institution: 'DEPARTAMENTO DE SERVICIOS PÚBLICOS'
    },
    {
      general: 1,
      office: 24,
      applicant: 'Alfonzo Fernandez',
      issue: 'Cómo registrar a un ciudadano en el sistema y darle la información que solicita',
      institution: 'DEPARTAMENTO DE REDES Y COMUNICACIONES'
    },
    {
      general: 2,
      office: 12,
      applicant: 'María López',
      issue: 'Problemas para validar la identidad del ciudadano en el sistema',
      institution: 'UNIDAD DE ATENCIÓN AL CIUDADANO'
    },
    {
      general: 3,
      office: 33,
      applicant: 'Carlos Pérez',
      issue: 'No se puede generar reporte de ciudadanos atendidos',
      institution: 'DEPARTAMENTO DE SISTEMAS'
    },
    {
      general: 4,
      office: 17,
      applicant: 'Juana García',
      issue: 'Inconvenientes al buscar historiales de atención de un ciudadano',
      institution: 'UNIDAD DE HISTORIAL Y DOCUMENTOS'
    },
    {
      general: 5,
      office: 28,
      applicant: 'Pedro Castillo',
      issue: 'No aparecen actualizados los datos del ciudadano en el sistema',
      institution: 'DEPARTAMENTO DE CATASTRO'
    },
    {
      general: 6,
      office: 45,
      applicant: 'Lucía Gómez',
      issue: 'Dificultades para transferir un caso a otra oficina',
      institution: 'DEPARTAMENTO DE RECURSOS HUMANOS'
    },
    {
      general: 7,
      office: 11,
      applicant: 'Jorge Ramírez',
      issue: 'El sistema no permite cerrar la consulta abierta por otro agente',
      institution: 'DEPARTAMENTO DE SEGURIDAD Y CONTROL'
    },
    {
      general: 8,
      office: 34,
      applicant: 'Ana Méndez',
      issue: 'Cómo agregar información adicional al expediente de un ciudadano',
      institution: 'DEPARTAMENTO DE LEGAL Y ASISTENCIA JURÍDICA'
    },
    {
      general: 9,
      office: 19,
      applicant: 'Fernando Sosa',
      issue: 'Problemas al acceder a la base de datos de ciudadanos',
      institution: 'UNIDAD DE BASE DE DATOS Y ANALÍTICA'
    },
    {
      general: 10,
      office: 30,
      applicant: 'Isabel Martínez',
      issue: 'Error al cargar documentos en el expediente digital',
      institution: 'UNIDAD DE DOCUMENTACIÓN Y ARCHIVO'
    },
    {
      general: 11,
      office: 22,
      applicant: 'Ricardo Varela',
      issue: 'Dificultad para gestionar consultas sobre servicios públicos',
      institution: 'DEPARTAMENTO DE SERVICIOS PÚBLICOS'
    },
    {
      general: 1,
      office: 24,
      applicant: 'Alfonzo Fernandez',
      issue: 'Cómo registrar a un ciudadano en el sistema y darle la información que solicita',
      institution: 'DEPARTAMENTO DE REDES Y COMUNICACIONES'
    },
    {
      general: 2,
      office: 12,
      applicant: 'María López',
      issue: 'Problemas para validar la identidad del ciudadano en el sistema',
      institution: 'UNIDAD DE ATENCIÓN AL CIUDADANO'
    },
    {
      general: 3,
      office: 33,
      applicant: 'Carlos Pérez',
      issue: 'No se puede generar reporte de ciudadanos atendidos',
      institution: 'DEPARTAMENTO DE SISTEMAS'
    },
    {
      general: 4,
      office: 17,
      applicant: 'Juana García',
      issue: 'Inconvenientes al buscar historiales de atención de un ciudadano',
      institution: 'UNIDAD DE HISTORIAL Y DOCUMENTOS'
    },
    {
      general: 5,
      office: 28,
      applicant: 'Pedro Castillo',
      issue: 'No aparecen actualizados los datos del ciudadano en el sistema',
      institution: 'DEPARTAMENTO DE CATASTRO'
    },
    {
      general: 6,
      office: 45,
      applicant: 'Lucía Gómez',
      issue: 'Dificultades para transferir un caso a otra oficina',
      institution: 'DEPARTAMENTO DE RECURSOS HUMANOS'
    },
    {
      general: 7,
      office: 11,
      applicant: 'Jorge Ramírez',
      issue: 'El sistema no permite cerrar la consulta abierta por otro agente',
      institution: 'DEPARTAMENTO DE SEGURIDAD Y CONTROL'
    },
    {
      general: 8,
      office: 34,
      applicant: 'Ana Méndez',
      issue: 'Cómo agregar información adicional al expediente de un ciudadano',
      institution: 'DEPARTAMENTO DE LEGAL Y ASISTENCIA JURÍDICA'
    },
    {
      general: 9,
      office: 19,
      applicant: 'Fernando Sosa',
      issue: 'Problemas al acceder a la base de datos de ciudadanos',
      institution: 'UNIDAD DE BASE DE DATOS Y ANALÍTICA'
    },
    {
      general: 10,
      office: 30,
      applicant: 'Isabel Martínez',
      issue: 'Error al cargar documentos en el expediente digital',
      institution: 'UNIDAD DE DOCUMENTACIÓN Y ARCHIVO'
    },
    {
      general: 11,
      office: 22,
      applicant: 'Ricardo Varela',
      issue: 'Dificultad para gestionar consultas sobre servicios públicos',
      institution: 'DEPARTAMENTO DE SERVICIOS PÚBLICOS'
    },
    {
      general: 1,
      office: 24,
      applicant: 'Alfonzo Fernandez',
      issue: 'Cómo registrar a un ciudadano en el sistema y darle la información que solicita',
      institution: 'DEPARTAMENTO DE REDES Y COMUNICACIONES'
    },
    {
      general: 2,
      office: 12,
      applicant: 'María López',
      issue: 'Problemas para validar la identidad del ciudadano en el sistema',
      institution: 'UNIDAD DE ATENCIÓN AL CIUDADANO'
    },
    {
      general: 3,
      office: 33,
      applicant: 'Carlos Pérez',
      issue: 'No se puede generar reporte de ciudadanos atendidos',
      institution: 'DEPARTAMENTO DE SISTEMAS'
    },
    {
      general: 4,
      office: 17,
      applicant: 'Juana García',
      issue: 'Inconvenientes al buscar historiales de atención de un ciudadano',
      institution: 'UNIDAD DE HISTORIAL Y DOCUMENTOS'
    },
    {
      general: 5,
      office: 28,
      applicant: 'Pedro Castillo',
      issue: 'No aparecen actualizados los datos del ciudadano en el sistema',
      institution: 'DEPARTAMENTO DE CATASTRO'
    },
    {
      general: 6,
      office: 45,
      applicant: 'Lucía Gómez',
      issue: 'Dificultades para transferir un caso a otra oficina',
      institution: 'DEPARTAMENTO DE RECURSOS HUMANOS'
    },
    {
      general: 7,
      office: 11,
      applicant: 'Jorge Ramírez',
      issue: 'El sistema no permite cerrar la consulta abierta por otro agente',
      institution: 'DEPARTAMENTO DE SEGURIDAD Y CONTROL'
    },
    {
      general: 8,
      office: 34,
      applicant: 'Ana Méndez',
      issue: 'Cómo agregar información adicional al expediente de un ciudadano',
      institution: 'DEPARTAMENTO DE LEGAL Y ASISTENCIA JURÍDICA'
    },
    {
      general: 9,
      office: 19,
      applicant: 'Fernando Sosa',
      issue: 'Problemas al acceder a la base de datos de ciudadanos',
      institution: 'UNIDAD DE BASE DE DATOS Y ANALÍTICA'
    },
    {
      general: 10,
      office: 30,
      applicant: 'Isabel Martínez',
      issue: 'Error al cargar documentos en el expediente digital',
      institution: 'UNIDAD DE DOCUMENTACIÓN Y ARCHIVO'
    },
    {
      general: 11,
      office: 22,
      applicant: 'Ricardo Varela',
      issue: 'Dificultad para gestionar consultas sobre servicios públicos',
      institution: 'DEPARTAMENTO DE SERVICIOS PÚBLICOS'
    }
  ];

  getConsultatlasss(): Promise<ConsultatlasModel[]> {
    return Promise.resolve(this.consultatlasData);
  }
};
