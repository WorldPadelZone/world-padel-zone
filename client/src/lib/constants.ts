import { NewsArticle, PadelTour, ExoticCourt, Product, MarketplaceItem, RepairService, Ranking, Tournament } from "@/types";

// Mock data for development - will be replaced with API calls
export const getRankings = (): Ranking[] => [
  { id: 1, position: 1, team: "Lebron/Galan", category: "Men's Doubles" },
  { id: 2, position: 1, team: "Josemaria/Sanchez", category: "Women's Doubles" },
  { id: 3, position: 2, team: "Tapia/Coello", category: "Men's Doubles" },
  { id: 4, position: 2, team: "Triay/Salazar", category: "Women's Doubles" },
  { id: 5, position: 3, team: "Stupaczuk/Lima", category: "Men's Doubles" },
];

export const getNews = (): NewsArticle[] => [
  {
    id: 1,
    title: "World Padel Tour Finals: Complete Coverage",
    category: "tournament",
    imageUrl: "https://images.pexels.com/photos/6295885/pexels-photo-6295885.jpeg?auto=compress&cs=tinysrgb&w=600",
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    title: "New Carbon Fiber Technology Revolutionizing Rackets",
    category: "equipment",
    imageUrl: "https://images.pexels.com/photos/5384430/pexels-photo-5384430.jpeg?auto=compress&cs=tinysrgb&w=600",
    timeAgo: "1 day ago"
  },
  {
    id: 3,
    title: "Exclusive Interview: Lebron Talks Training Secrets",
    category: "player",
    imageUrl: "https://images.pexels.com/photos/5739229/pexels-photo-5739229.jpeg?auto=compress&cs=tinysrgb&w=600",
    timeAgo: "2 days ago"
  }
];

export const getTournaments = (): Tournament[] => [
  {
    id: 1,
    name: "Madrid Master",
    location: "Madrid, Spain",
    date: { day: "15", month: "JUN" },
    featured: true
  },
  {
    id: 2,
    name: "Barcelona Open",
    location: "Barcelona, Spain",
    date: { day: "28", month: "JUN" }
  },
  {
    id: 3,
    name: "Paris Championship",
    location: "Paris, France",
    date: { day: "10", month: "JUL" }
  },
  {
    id: 4,
    name: "Rome Masters",
    location: "Rome, Italy",
    date: { day: "24", month: "JUL" }
  }
];

export const getEquipment = (): Product[] => [
  {
    id: 1,
    name: "Pro Diamond Racket",
    brand: "Bull Padel",
    price: 189,
    imageUrl: "https://images.pexels.com/photos/5384424/pexels-photo-5384424.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "New"
  },
  {
    id: 2,
    name: "Premium Padel Balls",
    brand: "Head",
    price: 12,
    imageUrl: "https://images.pexels.com/photos/5739233/pexels-photo-5739233.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Court Master Shoes",
    brand: "Adidas",
    price: 95,
    originalPrice: 120,
    imageUrl: "https://images.pexels.com/photos/6296039/pexels-photo-6296039.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Sale"
  }
];

export const getMarketplaceItems = (): MarketplaceItem[] => [
  {
    id: 1,
    name: "Head Graphene 360+ Alpha Pro",
    price: 80,
    condition: "Good condition",
    location: "Barcelona",
    rating: 5,
    seller: "Marco G.",
    imageUrl: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Rackets"
  },
  {
    id: 2,
    name: "Adidas Padel Pro Shoes",
    price: 45,
    condition: "Like new",
    location: "Madrid",
    rating: 4,
    seller: "Sofia L.",
    imageUrl: "https://images.pexels.com/photos/6296035/pexels-photo-6296035.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Shoes"
  }
];

export const getRepairServices = (): RepairService => ({
  title: "Professional Repair",
  description: "Extend your racket's life with our expert service",
  pricingText: "from €35",
  features: [
    "Frame repair and reinforcement",
    "Surface reconditioning",
    "Grip replacement",
    "48-hour turnaround time"
  ]
});

export const getPadelTours = (): PadelTour[] => [
  {
    id: 1,
    name: "Spanish Padel Adventure",
    description: "Experience the heart of padel in its birthplace",
    location: "Barcelona",
    duration: "7 days",
    level: "Intermediate",
    price: "€1,299",
    imageUrl: "https://images.pexels.com/photos/5384431/pexels-photo-5384431.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true
  },
  {
    id: 2,
    name: "Portugal Padel Getaway",
    location: "Lisbon",
    duration: "5 days",
    level: "All levels",
    price: "€899",
    imageUrl: "https://images.pexels.com/photos/8224752/pexels-photo-8224752.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Nordic Padel Experience",
    location: "Stockholm",
    duration: "6 days",
    level: "Advanced",
    price: "€1,099",
    imageUrl: "https://images.pexels.com/photos/6295963/pexels-photo-6295963.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const getExoticCourts = (): ExoticCourt[] => [
  {
    id: 1,
    name: "Skyline Padel",
    location: "Dubai, UAE",
    imageUrl: "https://images.pexels.com/photos/5384419/pexels-photo-5384419.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Beach Padel Club",
    location: "Maldives",
    imageUrl: "https://images.pexels.com/photos/5739076/pexels-photo-5739076.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Mountain View Padel",
    location: "Swiss Alps",
    imageUrl: "https://images.pexels.com/photos/5739079/pexels-photo-5739079.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Underground Padel",
    location: "Stockholm, Sweden",
    imageUrl: "https://images.pexels.com/photos/8224860/pexels-photo-8224860.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
