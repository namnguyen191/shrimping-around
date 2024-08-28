import { inject } from '@angular/core';
import {
  CarbonButtonComponent,
  CarbonTableComponent,
} from '@namnguyen191/dui-carbon-components';
import { DUISetupConfigs } from '@namnguyen191/dui-common';
import { DUITemplatesService } from './dui-templates.service';

export const getDUIConfigFactory = (): DUISetupConfigs => {
  const duiTemplatesSerivce = inject(DUITemplatesService);

  return {
    templatesHandlers: {
      getLayoutTemplate: duiTemplatesSerivce.getLayoutTemplate,
      getUiElementTemplate: duiTemplatesSerivce.getUiElementTemplate,
      getRemoteResourceTemplate: duiTemplatesSerivce.getRemoteResourceTemplate,
    },
    componentsMap: {
      [CarbonButtonComponent.ELEMENT_TYPE]: CarbonButtonComponent,
      [CarbonTableComponent.ELEMENT_TYPE]: CarbonTableComponent,
    },
  };
};
