import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'not-found',
    loadComponent: async () =>
      (await import('./not-found.component')).NotFoundComponent,
  },
]
