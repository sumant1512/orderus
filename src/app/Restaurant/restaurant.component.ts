import { Component } from '@angular/core';
import { UserInfoFacade } from '../store/user-info/user-info.facade';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  constructor(private userInfoFacade: UserInfoFacade) {
    const authInfo = JSON.parse(localStorage.getItem('authInfo') || '');
    this.userInfoFacade.fetchUserInfo({
      userName: authInfo.userName,
      authToken: authInfo.authToken,
    });
  }
}
