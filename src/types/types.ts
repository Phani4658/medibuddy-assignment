export interface ApiInput {
  minAge: number;
  maxAge: number;
  city: string;
  contractIds: number[];
  fetchAll: boolean;
  pincode: string;
  category: string;
  loadCategories: boolean;
  loadSubCategories: boolean;
  loadOnlyRadiology: boolean;
}

export interface Icon {
  type: number;
  iconText: string;
  iconTag: string;
  iconUrl: string;
  deeplink: string;
  order: number;
  isActive?: boolean;
  eventName?: string;
  webViewTitle?: string;
  serviceName?: string;
  serviceType?: string;
  configIconTagName?: string;
  disabledOnWeb?: boolean;
  checkForCorporates?: boolean;
  enabledCorporates?: string[];
  disabledCorporates?: string[];
  apiinput?: ApiInput;
}


export interface BannerProps {
    type: number;
    order: number;
    deeplink: string;
    bannerUrl: string;
    isActive: boolean,
    checkForCorporates: boolean,
}

export interface ActiveBookingProps {
  name: string;
  status: string;
  profile_image: string;
  date: string;
  day: string;
  time: string;
  type: string;
  noOfTests: number;
  typeOfTests: string;
}