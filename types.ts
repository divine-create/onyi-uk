
export interface Memory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface LoveNote {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

export enum AppSection {
  Home = 'home',
  Gallery = 'gallery',
  Letters = 'letters',
  Reasons = 'reasons'
}
