import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-download',
  template: `<h2>Downloading...</h2>`
})
export class DownloadComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    const docId = this.route.snapshot.paramMap.get('docId');
    if (docId) {
      this.documentService.downloadDocument(docId).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `document-${docId}`;
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }
}
