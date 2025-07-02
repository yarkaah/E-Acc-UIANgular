// src/app/services/access-log.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AccessLog {
  documentName: string;
  accessedBy: string;
  accessType: string;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class AccessLogService {
  private apiUrl = 'http://localhost:8080/api/access-logs';

  constructor(private http: HttpClient) {}

   getFormattedLogsByUser(userId: string): Observable<AccessLog[]> {
    return this.http.get<AccessLog[]>(`${this.apiUrl}/user/${userId}/view`);
  }
  

}
