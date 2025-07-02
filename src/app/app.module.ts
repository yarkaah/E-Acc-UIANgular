import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { LogsComponent } from './access-logs/logs/logs.component';
import { DocumentsModule } from './documents/documents.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { InstitutionDashboardComponent } from './componets/institution-dashboard/institution-dashboard.component';
import { InstitutionUploadComponent } from './components/institution-upload/institution-upload.component';
import { InstitutionUserDocsComponent } from './components/institution-user-docs/institution-user-docs.component';
import { InstitutionAccessControlComponent } from './components/institution-access-control/institution-access-control.component';
import { InstitutionLogsComponent } from './components/institution-logs/institution-logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    HomeComponent,
    InstitutionDashboardComponent,
    InstitutionUploadComponent,
    InstitutionUserDocsComponent,
    InstitutionAccessControlComponent,
    InstitutionLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    DocumentsModule,
    CoreModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatProgressBarModule,
    BrowserAnimationsModule


  
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
