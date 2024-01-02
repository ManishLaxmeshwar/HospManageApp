import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { AddPatientComponent } from './components/addpatient/add-patient.component';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './auth.guard';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';

const routes: Routes = [
  {'path':'',component:HomepageComponent },
  {'path':'about',component:AboutComponent},
  {'path':'navbar',component:NavbarComponent},
  {'path':'login',component:LoginComponent},
  {'path':'addpatient',component:AddPatientComponent,canActivate:[authGuard]}, // visit add_patient only if authenticated,
  {'path':'all-patients',component:AllPatientsComponent,canActivate:[authGuard]},
  {'path':'delete',component:DeleteComponent},
  {'path':'footer',component:FooterComponent},
  {'path':'signup',component:SignupComponent},
  {'path':'update-patient/:pId',component:UpdatePatientComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
