import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from '../../config/config';
import { ApiType } from '../../config/config.type';
import {
  IRegistrationRequestBody,
  IVerifyRequestBody,
} from '../interfaces/registration.interface';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchRoles(): Observable<any> {
    return this.http.get<any>('./../../../../assets/api/roles.json').pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }

  registerUser(body: IRegistrationRequestBody): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/auth/register', body)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
        })
      );
  }

  verifyUser(body: IVerifyRequestBody): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/verify', body).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
