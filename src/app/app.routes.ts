import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
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
