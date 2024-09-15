import { APP_BASE_HREF } from '@angular/common';
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
  readonly #appBaseHref = inject(APP_BASE_HREF, { optional: true }) ?? '';

  getLayoutTemplate = (id: string) =>
    this.#httpClient.get<LayoutTemplate>(
      `${this.#appBaseHref}dui-assets/layout-templates/${id}.json`
    );

  getUiElementTemplate = (id: string) =>
    this.#httpClient.get<UIElementTemplate>(
      `${this.#appBaseHref}dui-assets/ui-element-templates/${id}.json`
    );

  getRemoteResourceTemplate = (id: string) =>
    this.#httpClient.get<RemoteResourceTemplate>(
      `${this.#appBaseHref}dui-assets/remote-resource-templates/${id}.json`
    );
}
