import { Component, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  setupDefaultDUI,
  UIElementRepositionEvent,
} from '@namnguyen191/dui-common';
import { DuiComponent, EventsService } from '@namnguyen191/dui-core';

@Component({
  standalone: true,
  imports: [DuiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  layoutId: WritableSignal<string> = signal('home_page');

  readonly #eventsService = inject(EventsService);
  constructor() {
    setupDefaultDUI();
    this.setupResizeListener();
  }

  setupResizeListener() {
    this.#eventsService
      .getEvents()
      .pipe(UIElementRepositionEvent(), takeUntilDestroyed())
      .subscribe({
        next: (val) => console.log('Widget new positions', val),
      });
  }
}
