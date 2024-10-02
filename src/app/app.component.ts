import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { setupDefault, UIElementRepositionEvent } from '@dj-ui/common';
import { EventsService } from '@dj-ui/core';
import { HeaderModule, ThemeModule } from 'carbon-components-angular';

@Component({
  standalone: true,
  imports: [RouterModule, ThemeModule, HeaderModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #eventsService = inject(EventsService);

  constructor() {
    setupDefault();
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
