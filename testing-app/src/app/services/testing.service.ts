import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppPageData } from '../app-page.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<AppPageData> {
    return this.http.get<AppPageData>('assets/app-page.data.json');
  }

  otroMetodo(): Observable<AppPageData> {
    return this.http.get<AppPageData>('assets/otro-app-page.json');
  }
}
