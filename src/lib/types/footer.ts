export interface ContactInfo {
    type: 'phone' | 'address' | 'email';
    text: string;
  }
  
  export interface MenuLink {
    text: string;
    href: string;
  }
  
  export interface SocialLink {
    platform: 'facebook' | 'webhook' | 'instagram' | 'youtube';
    href: string;
    ariaLabel: string;
  }
  
  export interface FooterData {
    contactInfo: ContactInfo[];
    menuLinks: MenuLink[];
    socialLinks: SocialLink[];
  }
  