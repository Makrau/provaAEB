import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserFormComponent } from './user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'user/:id', component:UserDetailComponent },
  { path: 'users',     component: UserComponent },
 	{ path: 'register', component: UserFormComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}