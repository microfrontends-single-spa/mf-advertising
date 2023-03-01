import { Routes } from '@angular/router';
import { NewTemplateComponent } from './new-template/new-template.component';
import { TemplatesComponent } from './templates.component';


export const TemplatesRoutes: Routes = [
    {
        path: 'templates',
        component: TemplatesComponent,
        data: {
            title: 'Templates'
        }
    },
    {
        path: 'templates/new',
        component: NewTemplateComponent,
        data: {
            title: 'NewTemplate'
        }
    },
];