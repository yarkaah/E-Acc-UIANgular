import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InstitutionService {
  private apiUrl = 'http://localhost:8080/api/institution/documents';

  constructor(private http: HttpClient) {}

  uploadDocumentForUser(userId: string, formData: FormData): Observable<any> {
    const params = new HttpParams().set('userId', userId);
    return this.http.post(`${this.apiUrl}/upload`, formData, { params });
  }
}
