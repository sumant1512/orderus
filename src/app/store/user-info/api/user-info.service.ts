import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppConfigurations } from '../../config/config';
import { ApiType } from '../../config/config.type';
import {
  ILoginRequestBody,
  IUserInfoRequestBody,
} from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  login(body: ILoginRequestBody): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/login', body).pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }

  fetchUserInfo(body: IUserInfoRequestBody): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/auth/userInfo', body)
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  logout(id: number): Observable<any> {
    return this.http
      .delete<any>(`http://localhost:8080/auth/logout/${id}`)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
        })
      );
  }
}
