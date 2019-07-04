import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatButtonModule, MatTableModule, MatExpansionModule } from '@angular/material';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientComponent } from './patient/patient.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientDetailsComponent,
    PatientComponent,
    PatientAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: PatientDetailsComponent },
      { path: 'sguli/:patientId', component: AdminComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
