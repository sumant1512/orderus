import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from '../../config/config';
import { ApiType } from '../../config/config.type';

@Injectable({
  providedIn: 'root',
})
export class RestaurantDetailsService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchRestaurantDetails(id: string): Observable<any> {
    return this.http
      .get<any>(`./../../../../assets/api/restaurant-details-1.json`)
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }
}
