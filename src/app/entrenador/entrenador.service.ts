import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private apiUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

}
