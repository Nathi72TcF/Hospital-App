import { ServiceService } from '../Service/service.service';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patientArray;
  patientID;

  constructor(public serviceService: ServiceService, public route: ActivatedRoute) {
    this.patientArray = this.serviceService.newDuties();
   }

  //  edittask(sguli) {
  //   this.serviceService.edittask(sguli);
  // }

  // removetask(sguli) {
  //   this.serviceService.removetask(sguli);
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientID = params.get('patientId');
    });

    console.log(this.patientID);
  }

}
