import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DjuiComponent } from '@dj-ui/core';
import { map } from 'rxjs';
import { titlePrefix } from '../../app.routes';

@Component({
  selector: 'app-species-page',
  standalone: true,
  imports: [DjuiComponent, CommonModule],
  templateUrl: './species-page.component.html',
  styleUrl: './species-page.component.scss',
})
export class SpeciesPageComponent {
  readonly #titleService = inject(Title);

  speciesLayout$ = inject(ActivatedRoute).paramMap.pipe(
    map((params) => {
      const speciesId = params.get('speciesId');
      if (!speciesId) {
        console.error('Missing species id in url param');
        return 'no-species';
      }
      this.#titleService.setTitle(`${titlePrefix} - ${speciesId}`);
      return `${speciesId}_page.LAYOUT_TEMPLATE`;
    })
  );
}
