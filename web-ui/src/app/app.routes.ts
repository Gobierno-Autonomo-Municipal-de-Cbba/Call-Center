import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'casos',
    loadChildren: () => import('@pages/cases/cases.routes').then(m => m.CASES_ROUTES)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('@pages/denunciation/denunciation.routes').then(m => m.DENUNCIATION_ROUTES)
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('@pages/whatsapp/whatsapp.routes').then(m => m.WHATSAPP_ROUTES)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('@pages/frequently-questions/frequently-questions.routes').then(m => m.FRECUENTRLY_QUESTIONS_ROUTES)
  },
  {
    path: 'bandeja-ciudadano',
    loadComponent: () => import('@pages/citizen-tray/citizen-tray.component')
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
    path: 'iniciar-sesion',
    loadComponent: () => import('@pages/login/login.component')
  },
  {
    path: 'perfil',
    loadComponent: () => import('@pages/profile/my-data.component')
  },
];
