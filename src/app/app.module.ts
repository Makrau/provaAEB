import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user.service';


@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
    RouterModule.forRoot([
     {
       path: 'users',
       component: UserComponent,
     },
     {
       path: 'dashboard',
       component: DashboardComponent,
     },
     {
       path: '',
       redirectTo: '/dashboard',
       pathMatch: 'full'
     }
    ])
  ],

  declarations: [ 
  	AppComponent,
  	UserDetailComponent,
    UserComponent,
    DashboardComponent,
  ],

  bootstrap: [ 
  	AppComponent
  ],

  providers: [UserService]
})



export class AppModule { }
