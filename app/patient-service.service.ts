import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  
  baseURL="http://localhost:8081/patients";

  constructor(private httpClient:HttpClient) { }

  addPatient(patient :Patient):Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8; Access-Control-Allow-Origin = *');
   
    return this.httpClient.post("http://localhost:8081/patient",patient,);
  }
  getAllPatient():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  getPatientById(pId:number):Observable<Patient>{
    return this.httpClient.get<Patient>("http://localhost:8081/patient/"+pId);
  }
  updatePatientData(id:any,patient: Patient):Observable<Patient> {
    return this.httpClient.put<Patient>("http://localhost:8081/patient/"+id,patient);
  }
  deletePatientById(pId:number):Observable<Object>{
    return this.httpClient.delete<String>("http://localhost:8081/patient/"+pId);
  }

}
