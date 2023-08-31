import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigurations } from 'src/app/store/config/config';
import { ApiType } from 'src/app/store/config/config.type';

@Injectable({
  providedIn: 'root',
})
export class RestaurantMenuService {
  apiUrls: ApiType = AppConfigurations.api;
  constructor(private http: HttpClient) {}

  fetchRestaurantMenuCategories(): Observable<any> {
    return this.http
      .get<any>(
        './../../../../assets/api/restaurant/restaurant-menu-categories.json'
      )
      .pipe(
        map((response) => {
          if (response) {
            return response.data;
          }
        })
      );
  }

  fetchRestaurantMenuItems(id: number): Observable<any> {
    return this.http
      .get<any>(
        './../../../../assets/api/restaurant/restaurant-menu-items.json'
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
