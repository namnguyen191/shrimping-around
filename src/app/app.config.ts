import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { JS_RUNNER_WORKER } from '@namnguyen191/dui-core';
import { DUI_SETUP_CONFIGS } from '@namnguyen191/dui-common';
import { getDUIConfigFactory } from './dui-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: JS_RUNNER_WORKER,
      useFactory: (): Worker => {
        const worker = new Worker(
          new URL('./js-runner.worker', import.meta.url),
          {
            name: 'CustomWorker',
            type: 'module',
          }
        );
        return worker;
      },
    },
    {
      provide: DUI_SETUP_CONFIGS,
      useFactory: getDUIConfigFactory,
    },
  ],
};
