import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IImage } from '../interfaces/image.interface';
import { IUserInfo } from 'src/app/store/user-info/interfaces/user-info.interface';
import { APP_ROUTES } from '../constants/app-routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routesPath = APP_ROUTES;
  cartItemCount = 1;
  cartImage: IImage = {
    imgUrl: './../../../assets/cart-blue.png',
    imgAlt: 'Cart',
  };

  userInfo: IUserInfo = {
    userImage: {
      imgUrl: './../../../assets/userImg.png',
      imgAlt: 'Cart',
    },
    firstName: 'Sumant',
    lastName: 'Mishra',
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

  navigateToPage(routePath: string): void {
    const headerContent = document.getElementById('navbarSupportedContent');
    headerContent?.classList.remove('show');
    this.router.navigate([routePath]);
  }
}
