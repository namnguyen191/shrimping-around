import { Route } from '@angular/router';

export const titlePrefix = 'Shrimping around';

export const appRoutes: Route[] = [
  {
    path: 'home',
    title: `${titlePrefix} - Home`,
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'species/:speciesId',
    loadComponent: () =>
      import('./features/species-page/species-page.component').then(
        (m) => m.SpeciesPageComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
