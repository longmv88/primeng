import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'  
    }),
  };

  constructor(private httpClient: HttpClient) {}
  public getNotes(): Observable<any>{
    const url = '${this.REST_API_SERVER}/notes';
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
