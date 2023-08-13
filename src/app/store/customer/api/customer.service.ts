import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from '../../config/config';
import { ApiType } from '../../config/config.type';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchCustomers(): Observable<any> {
    return this.http.get<any>('./../../../../assets/api/customer.json').pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }
}
