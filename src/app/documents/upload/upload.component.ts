import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  selectedFile!: File;

  constructor(private documentService: DocumentService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.documentService.uploadDocument(formData).subscribe({
      next: (response) => {
        console.log('Upload successful', response);
        alert('Document uploaded successfully');
      },
      error: (error) => {
        console.error('Upload failed', error);
        alert('Upload failed');
      }
    });
  }
}
