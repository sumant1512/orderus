import { Component } from '@angular/core';
import { IFooterUrlList } from 'src/app/shared/interfaces/footer-url-list.interface';
import { IImage } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-delivery-footer',
  templateUrl: './delivery-footer.component.html',
  styleUrls: ['./delivery-footer.component.scss'],
})
export class DeliveryFooterComponent {
  footerUrlList: Array<IFooterUrlList> = [
    {
      headerName: 'Responses',
      urlList: [
        { name: 'How it Works', url: '' },
        { name: 'Gurantee', url: '' },
        { name: 'Security', url: '' },
        { name: 'Pricing', url: '' },
      ],
    },
    {
      headerName: 'Company',
      urlList: [
        { name: 'About Us', url: '' },
        { name: 'Prices', url: '' },
        { name: 'Blog', url: '' },
        { name: 'License', url: '' },
      ],
    },
    {
      headerName: 'Support',
      urlList: [
        { name: 'Getting Started', url: '' },
        { name: 'Help Center', url: '' },
        { name: 'Report a bug', url: '' },
        { name: 'Contact us', url: '' },
      ],
    },
  ];

  socialMediaList: Array<IImage> = [
    { img: './../../../assets/footer/whatsapp.svg', imgAlt: 'Whatsapp' },
    { img: './../../../assets/footer/twitter.svg', imgAlt: 'twiter' },
    { img: './../../../assets/footer/instagram.svg', imgAlt: 'instagram' },
    { img: './../../../assets/footer/facebook.svg', imgAlt: 'facebook' },
    { img: './../../../assets/footer/linkedin.svg', imgAlt: 'linkedin' },
  ];
}
