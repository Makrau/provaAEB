import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module'


@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule
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
