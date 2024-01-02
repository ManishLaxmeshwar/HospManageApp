import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit{

  constructor(private activeRouter:ActivatedRoute, private patientService:PatientServiceService, private router:Router){

  }
  pId!:number;
  patient :Patient =new Patient();
  ngOnInit(): void {
    this.pId=  this.activeRouter.snapshot.params['pId'];
    console.log(this.pId);
    this.patientService.getPatientById(this.pId).subscribe(data=>{
      this.patient=data;
    })
  }
  updatePatientData(){
    this.patientService.updatePatientData(this.pId,this.patient).subscribe(data=>{
      alert("Updated Successfully");
      this.router.navigate(['/all-patients'])
    },error=>alert("sorry unable to update"));
    

  }

}
