export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroData {
  tagline: string;
  headline: string;
  highlight: string;
  subheadline: string;
  actions: HeroAction[];
}
