import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AppConfigurations } from 'src/app/store/config/config';
import { ApiType } from 'src/app/store/config/config.type';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrls: ApiType = AppConfigurations.api;

  constructor(private http: HttpClient) {}

  admins(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Swigy',
        userName: 'swigy',
        password: '123456',
        token: 'swigy123456',
        status: 'Active',
        createdOn: '12/22/2003',
        lastUpdatedOn: '12/12/2022',
      },
    ]);
    return this.http.get<any>(this.apiUrls.admins).pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }
}
