import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { GrantAccessComponent } from './grant-access/grant-access.component';
import { DownloadComponent } from './download/download.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    UploadComponent,
    ViewComponent,
    GrantAccessComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
  ]
})
export class DocumentsModule { }
