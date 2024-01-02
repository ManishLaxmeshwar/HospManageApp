package com.test.demo.restcontroller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.test.demo.model.Patient;
import com.test.demo.repo.PatientRepo;
@RestController
@CrossOrigin (origins = "http://localhost:4200/")
public class PatientRestController {	
@Autowired
	private PatientRepo patientRepo;
	
	@PostMapping("/patient")
	public Patient addPatient(@RequestBody Patient patient) {
		return patientRepo.save(patient);
	}
	@GetMapping("/patients")
	public List<Patient> getAllpatient(){
		return patientRepo.findAll();
	}
	@GetMapping("patient/{pId}")
	public Patient getPatientById(@PathVariable("pId")int pId) {
		return patientRepo.findById(pId).get();
	}
	@PutMapping("patient/{pId}")
	public Patient updatePatient(@PathVariable("pId") int pId,@RequestBody Patient patient) {
		Patient p= patientRepo.findById(pId).get();
		p.setpName(patient.getpName());
		p.setpEmail(patient.getpEmail());
		p.setpPhone(patient.getpPhone());
		p.setpCategory(patient.getpCategory());
		return this.patientRepo.save(p);
	}
	
	@DeleteMapping("/patient/{pId}")
		public ResponseEntity<?> deletePatientById(@PathVariable("pId")int pId){
			patientRepo.deleteById(pId);
			HashMap<String, String> response=new HashMap<String, String>();
			response.put("message", "Patient Deleted");
			return new ResponseEntity<>(response,HttpStatus.OK);
			}
	
	

}
