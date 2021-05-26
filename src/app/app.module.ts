import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { MdbModule } from 'mdb-angular-ui-kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { TargoncaComponent } from './targonca/targonca.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReserveComponent } from './reserve/reserve.component';
import { SzervizComponent } from './szerviz/szerviz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KezdolapComponent,
    TargoncaComponent,
    RegistrationComponent,
    ReserveComponent,
    SzervizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
