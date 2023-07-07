import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IImage } from '../interfaces/image.interface';
import { IUserInfo } from 'src/app/store/user-info/interfaces/user-info.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartImage: IImage = {
    imgUrl: './../../../assets/cart.png',
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

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
