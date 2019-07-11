import { ServiceService } from './../Service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  patientArray;

  constructor(public serviceService: ServiceService) {
    this.patientArray = this.serviceService.newDoctorzz();
   }

   newDoctor(DID, Dname, Dsurname, Dspecial) {
     this.serviceService.newDoctor(DID, Dname, Dsurname, Dspecial);
   }

  ngOnInit() {
  }

}
