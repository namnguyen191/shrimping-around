import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  LayoutTemplate,
  RemoteResourceTemplate,
  UIElementTemplate,
} from '@namnguyen191/dui-core';

@Injectable({
  providedIn: 'root',
})
export class DUITemplatesService {
  readonly #httpClient = inject(HttpClient);

  getLayoutTemplate = (id: string) =>
    this.#httpClient.get<LayoutTemplate>(
      `/dui-assets/layout-templates/${id}.json`
    );

  getUiElementTemplate = (id: string) =>
    this.#httpClient.get<UIElementTemplate>(
      `/dui-assets/ui-element-templates/${id}.json`
    );

  getRemoteResourceTemplate = (id: string) =>
    this.#httpClient.get<RemoteResourceTemplate>(
      `/dui-assets/remote-resource-templates/${id}.json`
    );
}
