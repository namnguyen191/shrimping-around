import { inject } from '@angular/core';
import { DUISetupConfigs } from '@namnguyen191/dui-common';
import { DUITemplatesService } from './dui-templates.service';
import { DuiCarbonComponentLoader } from '@namnguyen191/dui-carbon-components';

export const getDUIConfigFactory = (): DUISetupConfigs => {
  const duiTemplatesSerivce = inject(DUITemplatesService);

  return {
    templatesHandlers: {
      getLayoutTemplate: duiTemplatesSerivce.getLayoutTemplate,
      getUiElementTemplate: duiTemplatesSerivce.getUiElementTemplate,
      getRemoteResourceTemplate: duiTemplatesSerivce.getRemoteResourceTemplate,
    },
    componentLoadersMap: DuiCarbonComponentLoader,
  };
};
