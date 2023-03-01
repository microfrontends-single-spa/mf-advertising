import { Routes } from '@angular/router';
import { SegmentsComponent } from '../segments/segments.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { SummaryComponent } from './summary/summary.component';

export const AdvertisingRoutes: Routes = [
    {
        path: 'publicity',
        component: AdvertisingComponent,
        data: {
            title: 'Advertising'
        }
    },
    {
        path: 'publicity/segments',
        component: SegmentsComponent,
        data: {
            title: 'Segments'
        }
    },
    {
        //path: 'advertising/summary',
        path: 'publicity/summary',
        component: SummaryComponent,
        data: {
            title: 'SummaryAdvertising'
        }
    },
];