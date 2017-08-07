import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { Item1Component } from './home/item 1/index';
import { Item2Component } from './home/item 2/index';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'item1',
		component: Item1Component
	},
	{
		path: 'item2',
		component: Item2Component
	},
	{
		path: '**',
		redirectTo: ''
	}
];

export const routing = RouterModule.forRoot(appRoutes);