import { ServiceService } from './../Service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientArray;

  constructor(public serviceService: ServiceService) {
    this.patientArray = this.serviceService.newDuties();
   }

  edittask(sguli) {
    this.serviceService.edittask(sguli);
  }

  removetask(sguli) {
    this.serviceService.removetask(sguli);
  }

  ngOnInit() {
  }

}
