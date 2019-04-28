import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
// Firebase Base
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// Auth Rules
import { AuthService } from "./shared/services/auth.service";
// NGXX Toastr for Alert
import { ToastrModule } from 'ngx-toastr';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Font Awesome Angular Component aka <fa-icon></fa-icon>
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // use this for single item imports instead of whole package
//^^^^^^ is better for build --prod
//import { MaterialMod } from './material';


// Components
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'; 
import { AuthGuard } from './shared/guard/auth.guard';

import { AzubiBerichteComponent } from './bha/azubi/berichte/berichte.component';
import { AzubiExportComponent } from './bha/azubi/export/export.component';
import { AzubiProfilComponent } from './bha/azubi/profil/profil.component';
import { AzubiEinstellungenComponent } from './bha/azubi/einstellungen/einstellungen.component';
import { AusbilderBerichteComponent } from './bha/ausbilder/berichte/berichte.component';
import { AusbilderAzubisComponent } from './bha/ausbilder/azubis/azubis.component';
import { AusbilderProfilComponent } from './bha/ausbilder/profil/profil.component';
import { AusbilderEinstellungenComponent } from './bha/ausbilder/einstellungen/einstellungen.component';

@NgModule({
  imports: [
    AppRoutingModule,  // Declare AppRoutingModule into imports array
    BrowserModule,
    //NgbModule, //bootstrap
    AngularFireModule.initializeApp(environment.firebaseConfig, 'NG-Firebase'),
    AngularFireDatabaseModule,  // Firebase realtime-database module 
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features
    // AngularFireStorageModule, // Only required for storage features
    BrowserAnimationsModule, // required animations module for toastr and materials
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule, // Reactive forms module
    NgxPaginationModule,  // Include it in imports array
    FontAwesomeModule, // NG-Fontawesome
   // MaterialMod,

  ],
  providers: [AuthService, AuthGuard],
  declarations: [AppComponent, DashboardComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent, AzubiBerichteComponent, AzubiExportComponent, AzubiProfilComponent, AzubiEinstellungenComponent,AusbilderBerichteComponent, AusbilderAzubisComponent,AusbilderProfilComponent,AusbilderEinstellungenComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
