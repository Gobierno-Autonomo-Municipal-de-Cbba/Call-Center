import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/iniciar-sesion',
    pathMatch: 'full'
  },

  {
    path: 'iniciar-sesion',
    loadComponent: () => import('@pages/auth/login.component')
  },

  {
    path: 'consulta-atlas',
    loadComponent: () => import('@pages/consult-atlas/consult-atlas.component')
  },

  {
    path: 'reporte-general',
    loadComponent: () => import('@pages/general-report/general-report.component')
  },

  {
    path: 'bandeja-ciudadano',
    loadComponent: () => import('@pages/citizen-tray/citizen-tray.component')
  },

  {
    path: 'perfil',
    loadComponent: () => import('@pages/profile/profile.component')
  },

  {
    path: 'registrar-caso',
    loadComponent: () => import('@pages/cases/register-case/register-case.component')
  },

  {
    path: 'ver-casos',
    loadComponent: () => import('@pages/cases/see-cases/see-cases.component')
  },

  {
    path: 'registrar-pregunta',
    loadComponent: () => import('@pages/frequently-questions/register-question/register-question.component')
  },

  {
    path: 'listar-pregunta',
    loadComponent: () => import('@pages/frequently-questions/list-question/list-question.component')
  },

  {
    path: 'importar',
    loadComponent: () => import('@pages/whatsapp/import/import.component')
  },

  {
    path: 'reporte-whatsapp',
    loadComponent: () => import('@pages/whatsapp/whatsapp-report/whatsapp-report.component')
  },

  {
    path: 'conversaciones',
    loadComponent: () => import('@pages/whatsapp/conversations/conversations.component')
  },

  {
    path: 'listar-denuncias',
    loadComponent: () => import('@pages/denunciations/list-denunciations/list-denunciations.component')
  },

  {
    path: 'registrar-denuncia',
    loadComponent: () => import('@pages/denunciations/register-denunciation/register-denunciation.component')
  },

  {
    path: 'reporte-denuncias',
    loadComponent: () => import('@pages/denunciations/report-denunciations/report-denunciations.component')
  },
];
