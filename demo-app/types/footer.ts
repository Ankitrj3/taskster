export interface Social {
  type: string;
  href: string;
}

export interface Link {
  title: string;
  href: string;
}

export interface ContactItem {
  icon: string;
  text: string;
}

export interface Brand {
  name: string;
  description: string;
  socials: Social[];
}

export interface FooterData {
  brand: Brand;
  links: Link[];
  contact: ContactItem[];
}
