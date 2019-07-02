import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  patientArray;

  constructor(public serviceService: ServiceService) {
    this.patientArray = this.serviceService.newDuties();
   }

    newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender) {
      this.serviceService.newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender);
    }

    edittask(sguli) {
      this.serviceService.edittask(sguli);
    }

  ngOnInit() {
  }

}
