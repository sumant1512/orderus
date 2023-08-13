export enum EPromotion {
  ID = 'id',
  STATUS = 'status',
  NAME = 'promotionDescription',
  VALIDITY = 'validity',
  RESTAURANT_NAME = 'restaurantName',
}

export enum EValidity {
  VALIDITY_STARTS_FROM = 'validityStartsFrom',
  VALIDITY_ENDS_ON = 'validityEndsOn',
  VALIDITY_INFO = 'validityInfo',
}

export enum EPromotionStatus {
  ACTIVE = 'Active',
  SCHEDULED = 'Scheduled',
  EXPIRED = 'Expired',
}
