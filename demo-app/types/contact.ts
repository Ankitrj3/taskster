export interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactData {
  header: string;
  subheader: string;
  info: InfoItem[];
}
