import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'patientdetails/:patientId', component: PatientDetailsComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'patientAppointment', component: PatientAppointmentComponent},
  {path: 'patientappointment/:patientId', component: PatientAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
