import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReportManagementComponent } from './home/report-management/report-management.component';
import { AssociateDetailsComponent } from './home/report-management/associate-details/associate-details.component';
import { EventsInformationComponent } from './home/report-management/events-information/events-information.component';
import { EventsSummaryComponent } from './home/report-management/events-summary/events-summary.component';
import { MetricsComponent } from './home/metrics/metrics.component';
import { ParticipationComponent } from './home/metrics/participation/participation.component';
import { EngagementComponent } from './home/metrics/engagement/engagement.component';
import { RetentionComponent } from './home/metrics/retention/retention.component';
import { AcquisitionComponent } from './home/metrics/acquisition/acquisition.component';
import { GenericComponent } from './home/metrics/generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReportManagementComponent,
    AssociateDetailsComponent,
    EventsInformationComponent,
    EventsSummaryComponent,
    MetricsComponent,
    ParticipationComponent,
    EngagementComponent,
    RetentionComponent,
    AcquisitionComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
