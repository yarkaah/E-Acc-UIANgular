import { Component, OnInit } from '@angular/core';
import { DocumentService, DocumentDTO } from '../../services/document.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  documents: DocumentDTO[] = [];

  constructor(
    private documentService: DocumentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();

    if (userId) {
      this.documentService.getUserDocuments(userId).subscribe({
        next: data => this.documents = data,
        error: err => alert('Error fetching documents')
      });
    } else {
      alert('User ID not found in token');
    }
  }




  //for mock purpose
  
  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   // Mock data
  //   this.documents = [
  //     { id: 'doc1', name: 'Passport.pdf', owner: 'evelyn@example.com' },
  //     { id: 'doc2', name: 'DegreeCertificate.pdf', owner: 'evelyn@example.com' }
  //   ];
  // }
}
