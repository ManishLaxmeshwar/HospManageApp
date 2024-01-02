import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent {


  constructor(private patientService: PatientServiceService ,private router : Router){
  }
  patients : Patient[]=[];
  ngOnInit():void{
    this.patientService.getAllPatient().subscribe(data=>{
      this.patients=data;
      console.log(data)
    })
  }
  updatePatient(pId:number){
    console.log(pId);
    this.router.navigate(['update-patient',pId]);
  }
  deletePatient(pId: number) {
    console.log(pId);
    this.patientService.deletePatientById(pId).subscribe(response=>
      {alert("record deleted successfully");
      // this.router.navigate(['all-patients']);
      this.ngOnInit();
    })
    
    }
  
}
