import { Routes } from '@angular/router'
export const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('./modules/homepage')).routes,
    // canMatch: [authGuard({ requiresAuthentication: false })],
  },
  {
    path: 'users',
    loadChildren: async () => (await import('./modules/users')).routes,
    // canMatch: [authGuard({ requiresAuthentication: false })],
  },
  {
    path: '**',
    loadChildren: async () => (await import('./modules/not-found')).routes,
    // canMatch: [authGuard({ requiresAuthentication: false })],
  },
]
