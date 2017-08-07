import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { Item1Component } from './home/item 1/index';
import { Item2Component } from './home/item 2/index';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Item1Component,
    Item2Component,
    // Review
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // Review
  ],
  providers: [
  	AuthGuard,
  	AlertService,
  	AuthenticationService,
  	UserService,
  	fakeBackendProvider,
  	MockBackend,
  	BaseRequestOptions,
    // Review
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
