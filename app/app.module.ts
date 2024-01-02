import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AddPatientComponent } from './components/addpatient/add-patient.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddPatientComponent,
    PatientsListComponent,
    DeleteComponent,
    HomepageComponent,
    FooterComponent,
    AboutComponent,
    AllPatientsComponent,
    SignupComponent,
    UpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
