import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('@pages/login/login.component')
  },


  {
    path: 'registrar-caso',
    loadComponent: () => import('@pages/register-case/register-case.component')
  },
  {
    path: 'ver-casos',
    loadComponent: () => import('@pages/see-cases/see-cases.component')
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
    path: 'registrar-pregunta',
    loadComponent: () => import('@pages/register-question/register-question.component')
  },
  {
    path: 'listar-pregunta',
    loadComponent: () => import('@pages/list-question/list-question.component')
  },


  {
    path: 'importar',
    loadComponent: () => import('@pages/import/import.component')
  },
  {
    path: 'reporte-whatsapp',
    loadComponent: () => import('@pages/whatsapp-report/whatsapp-report.component')
  },
  {
    path: 'conversaciones',
    loadComponent: () => import('@pages/conversations/conversations.component')
  },


  {
    path: 'listar-denuncias',
    loadComponent: () => import('@pages/list-denunciations/list-denunciations.component')
  },
  {
    path: 'registrar-denuncia',
    loadComponent: () => import('@pages/register-denunciation/register-denunciation.component')
  },
  {
    path: 'reporte-denuncias',
    loadComponent: () => import('@pages/report-denunciations/report-denunciations.component')
  },


  {
    path: 'bandeja-ciudadano',
    loadComponent: () => import('@pages/citizen-tray/citizen-tray.component')
  },


  {
    path: 'perfil',
    loadComponent: () => import('@pages/profile/my-data.component')
  },
];
