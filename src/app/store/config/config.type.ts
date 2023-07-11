export interface AppConfigType {
  api: ApiType;
  featureFlags?: FeatureFlagType;
}

export interface ApiType {
  restaurants: string;
}

export interface FeatureFlagType {
  isSearchFilterActive?: boolean;
  isDeleteInvoiceDisabled?: boolean;
  isUpdateInvoiceDisabled?: boolean;
  isUpdateProductActive?: boolean;
  isDeleteProductActive?: boolean;
  isViewProductDetailsActive?: boolean;
}
