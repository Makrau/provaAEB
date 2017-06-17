import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user.service';
import { UserFormComponent } from './user-form.component';
import { RegisterComponent} from './register.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [ 
  	AppComponent,
  	UserDetailComponent,
    UserComponent,
    DashboardComponent,
    UserFormComponent,
    RegisterComponent
  ],

  bootstrap: [ 
  	AppComponent
  ],

  providers: [UserService]
})



export class AppModule { }
