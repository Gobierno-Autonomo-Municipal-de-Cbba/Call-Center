import { Routes } from '@angular/router';
import { ListQuestionComponent } from './list-question/list-question.component';
import { RegisterQuestionComponent } from './register-question/register-question.component';

export const FRECUENTRLY_QUESTIONS_ROUTES: Routes = [
    { path: 'listar-pregunta', component: ListQuestionComponent },
    { path: 'registrar-pregunta', component: RegisterQuestionComponent }
];
