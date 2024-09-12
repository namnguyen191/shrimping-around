import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuiComponent } from '@namnguyen191/dui-core';
import { map } from 'rxjs';

@Component({
  selector: 'app-species-page',
  standalone: true,
  imports: [DuiComponent, CommonModule],
  templateUrl: './species-page.component.html',
  styleUrl: './species-page.component.scss',
})
export class SpeciesPageComponent {
  speciesLayout$ = inject(ActivatedRoute).paramMap.pipe(
    map((params) => {
      const speciesId = params.get('speciesId');
      if (!speciesId) {
        console.error('Missing species id in url param');
        return 'no-species';
      }

      return `${speciesId}_page`;
    })
  );
}
