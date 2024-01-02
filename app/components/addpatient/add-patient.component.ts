import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patient : Patient = new Patient();
  
  constructor( private patientService:PatientServiceService,private activeRouter:ActivatedRoute,private router:Router){}
  ngOninit(): void{
  }
    addPatientData() {
      console.log(this.patient);
      this.patientService.addPatient(this.patient).subscribe((Data: any)=>{
        alert("Patient Data insertion successfull");
        this.router.navigate(['/all-patients'])
      },error=>alert("Patient data insertion unsucessfull"))

  

}
}


