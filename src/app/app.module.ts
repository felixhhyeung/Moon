import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorktimerComponent } from './pages/worktimer/worktimer.component';
import { HomeComponent } from './pages/home/home.component';

import {FormsModule} from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { SigninComponent } from './components/signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WorktimerComponent,
    HomeComponent,
    SigninComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    CookieService,
    SigninComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
