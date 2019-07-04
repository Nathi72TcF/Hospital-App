import { PatientAppointmentComponent } from './../patient-appointment/patient-appointment.component';
import { PatientDetailsComponent } from './../patient-details/patient-details.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  patient = [];
  appointmentlist = [];

  // Add Patient
  Pid: string;
  Pname: string;
  Psurname: string;
  Page: string;
  PphoneNumber: string;
  Pgender: string;

  // Add Appointment
  APDate: string;
  APReason: string;
  APDocter: string;

  constructor() { }

newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender) {
  this.patient.push({
    patientId: Pid,
    patientName : Pname,
    patientSurname : Psurname,
    patientAge : Page,
    patientPhoneNumber : Pphonenumber,
    patientGender : Pgender,
  });
  this.Pid = '';
  this.Pname = '';
  this.Psurname = '';
  this.Page = '';
  this.PphoneNumber = '';
  this.Pgender = '';
}

appointmentdate(APDate, APreason, APdocter) {
  this.appointmentlist.push({
    apDate: APDate,
    apReason: APreason,
    apDocter: APdocter,
  });
  this.APDate = '';
  this.APReason = '';
  this.APDocter = '';
}

 removetask(sguli) {
   const index = this.patient.indexOf(sguli);
   this.patient.splice(index, 1);
   if (this.patient.length <= 0) {
   }
 }

 removeappointment(sguliz) {
   const index = this.appointmentlist.indexOf(sguliz);
   this.appointmentlist.splice(index, 1);
   if (this.appointmentlist.length <= 0) {
   }
 }

 edittask(sguli) {
   const index = this.patient.indexOf(sguli);
   const newzid = prompt('edit ID', sguli.patientId);
   const newzname = prompt('edit Name', sguli.patientName);
   const newzsurname = prompt('edit Surnmae', sguli.patientSurname);
   const newzage = prompt('edit Age', sguli.patientAge);
   const newzphonenumber = prompt('edit Phone Number', sguli.patientPhoneNumber);
   const newzgender = prompt('edit Gender', sguli.patientGender);
   if (newzid != null || newzname != null || newzsurname != null || newzage != null || newzphonenumber != null || newzgender != null) {
   this.patient[index].patientId = newzid;
   this.patient[index].patientName = newzname;
   this.patient[index].patientSurname = newzsurname;
   this.patient[index].patientAge = newzage;
   this.patient[index].newzphonenumber = newzage;
   this.patient[index].newzgender = newzage;
   }
 }

 editappointment(sguliz) {
   const index = this.appointmentlist.indexOf(sguliz);
   const newzzDate = prompt('edit Date', sguliz.apDate);
   const newzzReason = prompt('edit Reason', sguliz.apReason);
   const newzzDocter = prompt('update Docter', sguliz.apDocter);
   if (newzzDate != null || newzzReason != null || newzzDocter != null) {
     this.appointmentlist[index].apDate = newzzDate;
     this.appointmentlist[index].apDate = newzzReason;
     this.appointmentlist[index].apDate = newzzDocter;
   }
   }

 getPatient(patientId) {
  for (let i = 0; i => this.patient.length; i++) {
    if (this.patient[i].patientId === patientId) {
      return this.patient[i];
    }
  }
}

getPatientz(patientId) {
  for (let i = 0; i => this.patient.length; i++) {
    if (this.patient[i].patientId === patientId) {
      return this.patient[i];
    }
  }
}

newDuties() {
  return this.patient;
}

newDutiezAppoint() {
  return this.appointmentlist;
}

}
