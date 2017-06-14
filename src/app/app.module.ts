import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule
  ],

  declarations: [ 
  	AppComponent,
  	UserDetailComponent,
    UserComponent,
  ],

  bootstrap: [ 
  	AppComponent
  ],

  providers: [UserService]
})
export class AppModule { }
