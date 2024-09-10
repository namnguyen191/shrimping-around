import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import {
  setupDefaultDUI,
  UIElementRepositionEvent,
} from '@namnguyen191/dui-common';
import { EventsService } from '@namnguyen191/dui-core';
import { HeaderModule, ThemeModule } from 'carbon-components-angular';

@Component({
  standalone: true,
  imports: [RouterModule, ThemeModule, HeaderModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #eventsService = inject(EventsService);

  constructor() {
    setupDefaultDUI();
    this.#setupResizeListener();
  }

  #setupResizeListener() {
    this.#eventsService
      .getEvents()
      .pipe(UIElementRepositionEvent(), takeUntilDestroyed())
      .subscribe({
        next: (val) => console.log('Widget new positions', val),
      });
  }
}
