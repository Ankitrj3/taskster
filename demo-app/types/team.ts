export interface Social {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: Social;
}

export interface TeamData {
  header: {
    title: string;
    subtitle: string;
  };
  members: TeamMember[];
}
