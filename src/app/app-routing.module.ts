import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { Routes, RouterModule } from '@angular/router';

// Include Authentification Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// Firebase Auth Rule Services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
// Azubi
import { AzubiBerichteComponent } from './bha/azubi/berichte/berichte.component';
import { AzubiExportComponent } from './bha/azubi/export/export.component';
import { AzubiProfilComponent } from './bha/azubi/profil/profil.component';
import { AzubiEinstellungenComponent } from './bha/azubi/einstellungen/einstellungen.component';
// Ausbilder
import { AusbilderBerichteComponent } from './bha/ausbilder/berichte/berichte.component';
import { AusbilderAzubisComponent } from './bha/ausbilder/azubis/azubis.component';
import { AusbilderProfilComponent } from './bha/ausbilder/profil/profil.component';
import { AusbilderEinstellungenComponent } from './bha/ausbilder/einstellungen/einstellungen.component';

// Routes array define component along with the path name for url
const routes: Routes = [
// Authentification
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, /*canActivate: [SecureInnerPagesGuard]*/ },
  { path: 'register-user', component: SignUpComponent, /*canActivate: [SecureInnerPagesGuard]*/ },
  { path: 'forgot-password', component: ForgotPasswordComponent, /*canActivate: [SecureInnerPagesGuard]*/ },
  { path: 'verify-email-address', component: VerifyEmailComponent },
// Azubi
  { path: 'azubi-berichte', component: AzubiBerichteComponent },
  { path: 'azubi-export', component: AzubiExportComponent },
  { path: 'azubi-profil', component: AzubiProfilComponent },
  { path: 'azubi-einstellungen', component: AzubiEinstellungenComponent },
// Ausbilder
  { path: 'ausbilder-berichte', component: AusbilderBerichteComponent },
  { path: 'ausbilder-azubis', component: AusbilderAzubisComponent },
  { path: 'ausbilder-profil', component: AusbilderProfilComponent },
  { path: 'ausbilder-einstellungen', component: AusbilderEinstellungenComponent },
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
