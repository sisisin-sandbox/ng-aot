import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../_tmp_aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
