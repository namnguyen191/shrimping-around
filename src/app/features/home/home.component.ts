import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DuiComponent, UIElementFactoryService } from '@namnguyen191/dui-core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DuiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  layoutId: WritableSignal<string> = signal('home_page');

  readonly #uiElementFactoryService = inject(UIElementFactoryService);
  constructor() {
    this.#uiElementFactoryService.registerUIElementLoader({
      type: 'CARBON_TEXT_CARD',
      loader: () =>
        import('@namnguyen191/dui-carbon-components/carbon-text-card').then(
          (m) => m.CarbonTextCardComponent
        ),
    });
  }
}
