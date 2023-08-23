import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from 'src/app/store/config/config';
import { ApiType } from 'src/app/store/config/config.type';

@Injectable({
  providedIn: 'root',
})
export class RestaurantReceivedOrdersService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchRestaurantReceivedActiveOrders(): Observable<any> {
    return this.http
      .get<any>(
        './../../../../assets/api/restaurant/restaurant-received-active-orders.json'
      )
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  fetchRestaurantReceivedOpenOrders(): Observable<any> {
    return this.http
      .get<any>(
        './../../../../assets/api/restaurant/restaurant-received-open-orders.json'
      )
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  fetchRestaurantReceivedDeliveredOrders(): Observable<any> {
    return this.http
      .get<any>(
        './../../../../assets/api/restaurant/restaurant-received-delivered-orders.json'
      )
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }
}
