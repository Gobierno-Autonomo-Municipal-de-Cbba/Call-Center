import { Routes } from '@angular/router';
import { ConversationsComponent } from './conversations/conversations.component';
import { ImportComponent } from './import/import.component';
import { WhatsappReportComponent } from './whatsapp-report/whatsapp-report.component';

export const WHATSAPP_ROUTES: Routes = [
    { path: 'conversaciones', component: ConversationsComponent },
    { path: 'importar', component: ImportComponent },
    { path: 'reportar-whatsapp', component: WhatsappReportComponent }
];
