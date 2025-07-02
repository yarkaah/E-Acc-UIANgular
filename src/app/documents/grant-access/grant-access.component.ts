import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-grant-access',
  templateUrl: './grant-access.component.html'
})
export class GrantAccessComponent {
  recipientEmail: string = '';
  docId!: string;

  constructor(private route: ActivatedRoute, private documentService: DocumentService) {
    this.docId = this.route.snapshot.paramMap.get('docId') || '';
  }

  grant() {
    this.documentService.grantAccess(this.docId, this.recipientEmail).subscribe({
      next: () => alert('Access granted'),
      error: () => alert('Failed to grant access')
    });
  }
}
