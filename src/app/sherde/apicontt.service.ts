import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconttService {

  private apiUrl = 'http://localhost:3000/bill';

  constructor(private http: HttpClient) {}

  getprdact(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
