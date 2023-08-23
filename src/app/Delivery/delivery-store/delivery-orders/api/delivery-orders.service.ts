import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from 'src/app/store/config/config';
import { ApiType } from 'src/app/store/config/config.type';

@Injectable({
  providedIn: 'root',
})
export class DeliveryOrdersService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchDeliveredOrders(): Observable<any> {
    return this.http
      .get<any>('./../../../../assets/api/delivery/delivered-orders.json')
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  fetchOpenOrders(): Observable<any> {
    return this.http
      .get<any>('./../../../../assets/api/delivery/open-orders.json')
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  fetchActiveOrders(): Observable<any> {
    return this.http
      .get<any>('./../../../../assets/api/delivery/active-orders.json')
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }
}
