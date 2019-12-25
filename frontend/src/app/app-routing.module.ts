import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReportManagementComponent } from './home/report-management/report-management.component';
import { AssociateDetailsComponent } from './home/report-management/associate-details/associate-details.component';
import { EventsInformationComponent } from './home/report-management/events-information/events-information.component';
import { EventsSummaryComponent } from './home/report-management/events-summary/events-summary.component';
import { MetricsComponent } from './home/metrics/metrics.component';
import { ParticipationComponent } from './home/metrics/participation/participation.component';
import { AcquisitionComponent } from './home/metrics/acquisition/acquisition.component';
import { EngagementComponent } from './home/metrics/engagement/engagement.component';
import { GenericComponent } from './home/metrics/generic/generic.component';
import { RetentionComponent } from './home/metrics/retention/retention.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'reports',
        component: ReportManagementComponent,
        children: [
          {
            path: 'associate-details',
            component: AssociateDetailsComponent
          },
          {
            path: 'events-information',
            component: EventsInformationComponent
          },
          {
            path: 'events-summary',
            component: EventsSummaryComponent
          }
        ]
      },
      {
        path: 'metrics',
        component: MetricsComponent,
        children: [
          {
            path: 'participation',
            component: ParticipationComponent
          },
          {
            path: 'engagement',
            component: EngagementComponent
          },
          {
            path: 'retention',
            component: RetentionComponent
          },
          {
            path: 'acquisition',
            component: AcquisitionComponent
          },
          {
            path: 'generic',
            component: GenericComponent
          }
        ]
      }
    ]
  },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
