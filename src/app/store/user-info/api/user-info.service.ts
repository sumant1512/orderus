import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppConfigurations } from '../../config/config';
import { ApiType } from '../../config/config.type';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchUserInfo(): Observable<any> {
    return this.http.get<any>('./../../../../assets/api/user-info.json').pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }
}
