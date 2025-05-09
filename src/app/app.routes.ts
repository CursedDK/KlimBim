import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
  	{
		//lazy loading the home component
		path: '',
		loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
	},
	{
		
		path: 'dataSafety',
		loadComponent: () => import('./datenschutz/datenschutz.component').then(m => m.DatenschutzComponent)
	},
	{
		
		path: 'impressum',
		loadComponent: () => import('./impressum/impressum.component').then(m => m.ImpressumComponent)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
