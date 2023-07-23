import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IImage } from '../interfaces/image.interface';
import { APP_ROUTES } from '../constants/app-routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routesPath = APP_ROUTES;
  cartItemCount = 1;
  selectedRoute = APP_ROUTES.HOME;
  cartImage: IImage = {
    imgUrl: './../../../assets/cart-blue.png',
    imgAlt: 'Cart',
  };

  userInfo = {
    imgUrl: './../../assets/userImg.png',
    imgAlt: 'User',
  };

  constructor(private router: Router, private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
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
