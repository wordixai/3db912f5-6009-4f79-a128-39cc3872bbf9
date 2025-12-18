export interface Event {
  id: string;
  name: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  ticketsSold: number;
  ticketsTotal: number;
  revenue: number;
}

export interface Fan {
  id: string;
  name: string;
  email: string;
  avatar: string;
  segment: 'superfan' | 'active' | 'casual' | 'new';
  totalSpent: number;
  eventsAttended: number;
  lastInteraction: string;
  location: string;
  tags: string[];
}

export interface Track {
  id: string;
  title: string;
  album: string;
  coverArt: string;
  releaseDate: string;
  streams: number;
  revenue: number;
  duration: string;
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive';
}

export interface RevenueData {
  month: string;
  streaming: number;
  merchandise: number;
  tickets: number;
}

export interface MerchItem {
  id: string;
  name: string;
  image: string;
  price: number;
  sold: number;
  stock: number;
  category: string;
}
