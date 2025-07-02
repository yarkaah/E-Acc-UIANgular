import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DownloadComponent} from './documents/download/download.component';
import { GrantAccessComponent } from './documents/grant-access/grant-access.component';
import { UploadComponent } from './documents/upload/upload.component';
import { ViewComponent } from './documents/view/view.component';
import { LogsComponent } from './access-logs/logs/logs.component';
import { OtpComponent } from './otp/otp/otp.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InstitutionUploadComponent } from './components/institution-upload/institution-upload.component';
import { InstitutionDashboardComponent } from './componets/institution-dashboard/institution-dashboard.component';
import { InstitutionUserDocsComponent } from './components/institution-user-docs/institution-user-docs.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'upload', component:UploadComponent, canActivate:[AuthGuard] },
  { path: 'documents', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'grant-access/:docId', component: GrantAccessComponent, canActivate: [AuthGuard] },
  { path: 'download/:docId', component: DownloadComponent, canActivate: [AuthGuard] },
  { path: 'otp', component: OtpComponent, canActivate: [AuthGuard] },
  { path: 'institution', component: InstitutionDashboardComponent},
  { path: 'institution/upload', component: InstitutionUploadComponent },
  { path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
  { path: 'institution/user-documents', component: InstitutionUserDocsComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
