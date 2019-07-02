import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  patient = [];

  Pid: string;
  Pname: string;
  Psurname: string;
  Page: string;
  PphoneNumber: string;
  Pgender: string;

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
  // this.Pname = '';
  // this.Psurname = '';
  // this.Page = '';
  // this.PphoneNumber = '';
}

 removetask(sguli) {
   const index = this.patient.indexOf(sguli);
   this.patient.splice(index,1);
   if (this.patient.length <= 0) {
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

newDuties() {
  return this.patient;
}

getPatient(patientId) {
  const index = this.patient.indexOf(patientId);
  return index;
}

}
