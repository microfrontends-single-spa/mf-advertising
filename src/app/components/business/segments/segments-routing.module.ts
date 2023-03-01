import { Routes } from '@angular/router';
import { SegmentsComponent } from './segments.component';

export const SegmentsRoutes: Routes = [
    {
        path: 'segments',
        component: SegmentsComponent,
        data: {
            title: 'Advertising'
        }
    }
];