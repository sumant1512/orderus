import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';
import { Subscription } from 'rxjs';
import { IUserBasicInfo } from 'src/app/store/user-info/interfaces/user-info.interface';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';
import { IImage } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subscription = new Subscription();
  appRoutes = APP_ROUTES;
  bellItemCount = 1;
  selectedRoute = APP_ROUTES.HOME;
  bellImage: IImage = {
    img: './../../../assets/bell.svg',
    imgAlt: 'Bell',
  };

  userInfo = {
    img: './../../assets/userImg.png',
    imgAlt: 'User',
  };

  userBasicInfo!: IUserBasicInfo;

  constructor(private router: Router, private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.subscription.add(
      this.userInfoFacade.userBasicInfo.subscribe((userInfo) => {
        this.userBasicInfo = userInfo;
      })
    );
  }

  toggleHamburger() {
    const hamburger = document.getElementById('hamburger-9');
    if (hamburger?.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
    } else {
      hamburger?.classList.add('is-active');
    }
  }

  detectMobile(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /(android|webos|iphone|ipod|blackberry|windows phone)/.test(
      userAgent
    );
  }

  navigateToPage(routePath: string): void {
    if (this.detectMobile() && routePath) {
      const headerContent = document.getElementById('navbarSupportedContent');
      headerContent?.classList.remove('show');
      this.toggleHamburger();
    }
    this.selectedRoute = routePath;
    this.router.navigate([routePath]);
  }
}
