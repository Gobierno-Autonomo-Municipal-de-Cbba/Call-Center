import { Routes } from '@angular/router';
import { RegisterCaseComponent } from './register-case/register-case.component';
import { SeeCasesComponent } from './see-cases/see-cases.component';

export const CASES_ROUTES: Routes = [
    { path: 'registrar-caso', component: RegisterCaseComponent },
    { path: 'ver-casos', component: SeeCasesComponent }
];
