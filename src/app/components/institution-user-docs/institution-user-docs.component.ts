import { Component, OnInit } from '@angular/core';
import { DocumentDTO, DocumentService } from 'src/app/services/document.service';
import { UserService, UserDTO } from 'src/app/services/user.service';

@Component({
  selector: 'app-institution-user-docs',
  templateUrl: './institution-user-docs.component.html',
  styleUrls: ['./institution-user-docs.component.css']
})
export class InstitutionUserDocsComponent implements OnInit {
  users: UserDTO[] = [];
  selectedUserId: string = '';
  documents: DocumentDTO[] = [];
  loading = false;
  error = '';

  constructor(
    private userService: UserService,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (res: UserDTO[]) => {
        this.users = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  onUserChange(): void {
    if (!this.selectedUserId) return;

    this.loading = true;
    this.documents = [];
    this.documentService.getUserDocuments(this.selectedUserId).subscribe({
      next: (docs: DocumentDTO[]) => {
        this.documents = docs;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load documents';
        this.loading = false;
      }
    });
  }

  download(docId: number): void {
    this.documentService.downloadDocument(docId.toString()).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `document_${docId}`;
      link.click();
    });
  }
}
