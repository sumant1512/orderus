import { Component } from '@angular/core';
import { IFooterUrlList } from '../interfaces/footer-url-list.interface';
import { IImage } from '../interfaces/image.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
    { imgUrl: './../../../assets/whats-app.svg', imgAlt: 'Whatsapp' },
    { imgUrl: './../../../assets/twiter.svg', imgAlt: 'twiter' },
    { imgUrl: './../../../assets/instagram.svg', imgAlt: 'instagram' },
    { imgUrl: './../../../assets/facebook.svg', imgAlt: 'facebook' },
    { imgUrl: './../../../assets/whats-app.svg', imgAlt: '' },
  ];
}
