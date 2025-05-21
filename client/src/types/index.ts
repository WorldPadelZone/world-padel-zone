export interface NewsArticle {
  id: number;
  title: string;
  category: 'tournament' | 'equipment' | 'player';
  imageUrl: string;
  timeAgo: string;
}

export interface Ranking {
  id: number;
  position: number;
  team: string;
  category: string;
}

export interface Tournament {
  id: number;
  name: string;
  location: string;
  date: {
    day: string;
    month: string;
  };
  featured?: boolean;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tag?: 'New' | 'Sale';
}

export interface MarketplaceItem {
  id: number;
  name: string;
  price: number;
  condition: string;
  location: string;
  rating: number;
  seller: string;
  imageUrl: string;
  category: string;
}

export interface RepairService {
  title: string;
  description: string;
  pricingText: string;
  features: string[];
}

export interface PadelTour {
  id: number;
  name: string;
  description?: string;
  location: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  price: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ExoticCourt {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
}
