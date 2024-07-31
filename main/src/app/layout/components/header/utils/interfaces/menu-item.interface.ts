export interface Menu {
  MAIN?: MenuProperties;
  CUSTOMERS?: MenuProperties;
  INVOICES?: MenuProperties;
  SALES?: MenuProperties;
  PAYMENTS?: MenuProperties;
  PAYOUTS?: MenuProperties;
  ACCOUNTS?: MenuProperties;
  REPORTS?: MenuProperties;
  CONFIGURATION?: MenuProperties;
}

export interface MenuProperties {
  expanded?: boolean;
  title: string;
  iconPath: string;
  link?: string;
  linkPayment?: string;
  linkCollect?: string;
  linkPayout?: string;
  subMenus?: Record<string, SubMenuProperties>;
}

export interface SubMenuProperties {
  title: string;
  iconPath: string;
  link?: string;
}

export interface MenuItemRender {
  title: string;
  iconPath: string;
  link?: string;
  expanded?: boolean;
  subMenus?: SubMenuItemRender[];
}

export interface SubMenuItemRender {
  title: string;
  iconPath: string;
  link?: string;
}
