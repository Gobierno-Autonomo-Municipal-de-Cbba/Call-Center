import { Routes } from '@angular/router';
import { ListDenunciationsComponent } from './list-denunciations/list-denunciations.component';
import { RegisterDenunciationComponent } from './register-denunciation/register-denunciation.component';
import { ReportDenunciationsComponent } from './report-denunciations/report-denunciations.component';

export const DENUNCIATION_ROUTES: Routes = [
    { path: 'listar-denuncias', component: ListDenunciationsComponent },
    { path: 'registrar-denuncia', component: RegisterDenunciationComponent },
    { path: 'reportar-denuncias', component: ReportDenunciationsComponent }
];
