import { ApplicationModule } from './application/application.module';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(ApplicationModule).catch(err => console.error(err));
