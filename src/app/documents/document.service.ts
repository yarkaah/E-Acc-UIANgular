import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DocumentDTO {
  id: number;
  name: string;
  uploadedAt: string;
}

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private apiUrl = 'http://localhost:8080/api/documents';

  constructor(private http: HttpClient) {}

  uploadDocument(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  getUserDocuments(userId: string): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.apiUrl}/user/${userId}/dto`);
  }

  downloadDocument(docId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${docId}`, { responseType: 'blob' });
  }

  getDownloadUrl(docId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/download-url?docId=${docId}`);
  }

  grantAccess(docId: string, recipientEmail: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/grant-access/${docId}`, { recipientEmail });
  }

  deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
