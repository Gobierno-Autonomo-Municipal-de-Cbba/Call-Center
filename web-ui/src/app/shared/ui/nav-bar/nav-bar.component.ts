import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  activeSubmenu: string | null = null;
  constructor(private router: Router) {}

  casesItems = [
    { label: 'Registrar Caso', icon: 'icon-register-case',  route: '/registrar-caso' },
    { label: 'Ver Casos', icon: 'icon-see-cases', route: '/ver-casos' }
  ];

  questionsFrecuentlyItems = [
    { label: 'Registrar Pregunta', icon: 'icon-register-question',  route: '/registrar-pregunta' },
    { label: 'Listar Pregunta', icon: 'icon-list-question',  route: '/listar-pregunta' }
  ];

  whatsappItems = [
    { label: 'Importar', icon: 'icon-import',  route: '/importar' },
    { label: 'Reporte Whatsapp', icon: 'icon-report-whatsapp',  route: '/reporte-whatsapp' },
    { label: 'Conversaciones', icon: 'icon-conversations',  route: '/conversaciones' }
  ];

  denunciationsItems = [
    { label: 'Listar Denuncias', icon: 'icon-list-denunciations',  route: '/listar-denuncias' },
    { label: 'Registrar Denuncia', icon: 'icon-register-denunciation',  route: '/registrar-denuncia' },
    { label: 'Reporte Denuncias', icon: 'icon-report-denunciations',  route: '/reporte-denuncias' }
  ];

  profileItems = [
    { label: 'Pagina Principal', icon: 'icon-page-principal',  route: '/reporte-general' },
    { label: 'Mis Datos', icon: 'icon-my-data',  route: '/perfil' },
    { label: 'Cerrar Sesión', icon: 'icon-log-out',  route: '/iniciar-sesion' }
  ];

  toggleSubmenu(submenu: string) {
    this.activeSubmenu = this.activeSubmenu === submenu ? null : submenu;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.p-button')) {
      this.activeSubmenu = null;
    }
  }
}
