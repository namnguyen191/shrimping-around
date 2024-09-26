import {
  ApplicationConfig,
  inject,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { JS_RUNNER_WORKER } from '@dj-ui/core';
import { COMMON_SETUP_CONFIG, SetupConfigs } from '@dj-ui/common';
import { CarbonComponentLoader } from '@dj-ui/carbon-components';
import { DJUITemplatesService } from './dj-ui-templates.service';

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
      provide: COMMON_SETUP_CONFIG,
      useFactory: (): SetupConfigs => {
        const templatesSerivce = inject(DJUITemplatesService);

        return {
          templatesHandlers: {
            getLayoutTemplate: templatesSerivce.getLayoutTemplate,
            getUiElementTemplate: templatesSerivce.getUiElementTemplate,
            getRemoteResourceTemplate:
              templatesSerivce.getRemoteResourceTemplate,
          },
          componentLoadersMap: CarbonComponentLoader,
        };
      },
    },
  ],
};
