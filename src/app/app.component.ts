import { Component } from '@angular/core';

import { APP_PREFIX } from './constans/app.constant';

@Component({
  selector: 'mf-advertising',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-advertising';
  APP_PREFIX: string = APP_PREFIX;
}
