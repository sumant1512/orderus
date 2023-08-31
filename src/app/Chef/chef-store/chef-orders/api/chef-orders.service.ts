import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';
import { AppConfigurations } from 'src/app/store/config/config';
import { ApiType } from 'src/app/store/config/config.type';

@Injectable({
  providedIn: 'root',
})
export class ChefOrdersService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchChefOrders(selectionCode: ETabCode): Observable<any> {
    console.log(selectionCode);
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
}
