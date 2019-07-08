import { ServiceService } from './../Service/service.service';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  patientArray;
  patientArray2;
  patientID;
  APReason;
  APDocter;
  APDate;

  constructor(public serviceService: ServiceService, public route: ActivatedRoute) {
    this.patientArray = this.serviceService.newDuties();
    this.patientArray2 = this.serviceService.newDutiezAppoint();
  }

  appointmentdate() {
    this.serviceService.appointmentdate(this.APDate, this.APReason, this.APDocter, this.patientID);
  }

   getPatientz(patientId) {
    this.serviceService.getPatientz(patientId);
  }

  removeappointment(sguliz) {
    this.serviceService.removeappointment(sguliz);
  }

  editappointment(sguliz) {
    this.serviceService.editappointment(sguliz);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientID = params.get('patientId');
      this.patientArray = this.serviceService.getPatientz(this.patientID);
      console.log(this.patientArray);
    });
    console.log(this.patientID);
  }

}
