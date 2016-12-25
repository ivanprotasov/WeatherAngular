import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HomeModule } from './app/home/home.module';
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HomeModule);
