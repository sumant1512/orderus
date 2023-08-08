import { AppConfigType } from './config.type';

const isLocalhostActive = true;

const host = isLocalhostActive
  ? 'http://localhost:8080'
  : 'https://fakestoreapi.com';

export const AppConfigurations: AppConfigType = {
  api: {
    restaurants: host + '/restaurant',
    admins: host + '/admins',
  },
  featureFlags: {
    isSearchFilterActive: true,
    isDeleteInvoiceDisabled: true,
    isUpdateInvoiceDisabled: true,
    isUpdateProductActive: true,
    isDeleteProductActive: true,
    isViewProductDetailsActive: true,
  },
};
