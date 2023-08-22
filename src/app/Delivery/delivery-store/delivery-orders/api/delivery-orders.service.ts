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

  fetchDeliveryOrders(): Observable<any> {
    return this.http
      .get<any>('./../../../../assets/api/delivery-orders.json')
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }
}
