import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {}

  activeSubmenu: string | null = null;
  @Input() marginBottom: string = '60px';

  menus = [
    { id: 'cases', label: 'Casos', icon: 'icon-cases', submenu: true, items: [
      { label: 'Registrar Caso', icon: 'icon-register-case', route: '/registrar-caso' },
      { label: 'Ver Casos', icon: 'icon-see-cases', route: '/ver-casos' }
    ]},
    { label: 'Consulta Atlas', icon: 'icon-consult-atlas', route: '/consulta-atlas' },
    { label: 'Reporte General', icon: 'icon-report-general', route: '/reporte-general' },
    { id: 'questionsFrecuently', label: 'Preguntas Frecuentes', icon: 'icon-questions-frecuently', submenu: true, items: [
      { label: 'Registrar Pregunta', icon: 'icon-register-question', route: '/registrar-pregunta' },
      { label: 'Listar Pregunta', icon: 'icon-list-question', route: '/listar-pregunta' }
    ]},
    { id: 'whatsapp', label: 'Whatsapp', icon: 'icon-whatsapp', submenu: true, items: [
      { label: 'Importar', icon: 'icon-import', route: '/importar' },
      { label: 'Reporte Whatsapp', icon: 'icon-report-whatsapp', route: '/reporte-whatsapp' },
      { label: 'Conversaciones', icon: 'icon-conversations', route: '/conversaciones' }
    ]},
    { id: 'denunciations', label: 'Denuncias', icon: 'icon-denunciations', submenu: true, items: [
      { label: 'Listar Denuncias', icon: 'icon-list-denunciations', route: '/listar-denuncias' },
      { label: 'Registrar Denuncia', icon: 'icon-register-denunciation', route: '/registrar-denuncia' },
      { label: 'Reporte Denuncias', icon: 'icon-report-denunciations', route: '/reporte-denuncias' }
    ]},
    { label: 'Bandeja Ciudadano', icon: 'icon-tray-citizen', route: '/bandeja-ciudadano' },
    { id: 'profile', label: 'Perfil', icon: 'icon-profile', submenu: true, items: [
      { label: 'Pagina Principal', icon: 'icon-page-principal', route: '/reporte-general' },
      { label: 'Mis Datos', icon: 'icon-my-data', route: '/perfil' },
      { label: 'Cerrar Sesión', icon: 'icon-log-out', route: '/iniciar-sesion' }
    ]}
  ];

  toggleSubmenu(submenu: string) {
    this.activeSubmenu = this.activeSubmenu === submenu ? null : submenu;
  }

  navigateTo(route: string | undefined) {
    if (route) {
      this.router.navigate([route]);
    } else {
      console.warn('The provided route is undefined or null');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.p-button')) {
      this.activeSubmenu = null;
    }
  }
}
