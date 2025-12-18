import { Event, Fan, Track, Collaborator, RevenueData, MerchItem } from '@/types';

export const events: Event[] = [
  {
    id: '1',
    name: 'Summer Fest 2024',
    venue: 'Madison Square Garden',
    city: 'New York, NY',
    date: '2024-07-15',
    time: '8:00 PM',
    status: 'upcoming',
    ticketsSold: 12500,
    ticketsTotal: 15000,
    revenue: 625000
  },
  {
    id: '2',
    name: 'Rooftop Sessions',
    venue: 'The Wiltern',
    city: 'Los Angeles, CA',
    date: '2024-06-28',
    time: '7:30 PM',
    status: 'upcoming',
    ticketsSold: 1800,
    ticketsTotal: 2000,
    revenue: 90000
  },
  {
    id: '3',
    name: 'Spring Tour Finale',
    venue: 'Red Rocks',
    city: 'Denver, CO',
    date: '2024-05-20',
    time: '6:00 PM',
    status: 'completed',
    ticketsSold: 9500,
    ticketsTotal: 9500,
    revenue: 475000
  },
  {
    id: '4',
    name: 'Acoustic Night',
    venue: 'Bluebird Cafe',
    city: 'Nashville, TN',
    date: '2024-08-10',
    time: '9:00 PM',
    status: 'upcoming',
    ticketsSold: 85,
    ticketsTotal: 120,
    revenue: 4250
  }
];

export const fans: Fan[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah.m@email.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    segment: 'superfan',
    totalSpent: 2450,
    eventsAttended: 12,
    lastInteraction: '2024-06-10',
    location: 'Austin, TX',
    tags: ['VIP', 'Merch Buyer', 'Newsletter']
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus.j@email.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    segment: 'active',
    totalSpent: 890,
    eventsAttended: 5,
    lastInteraction: '2024-06-08',
    location: 'Chicago, IL',
    tags: ['Newsletter', 'Spotify Listener']
  },
  {
    id: '3',
    name: 'Emily Chen',
    email: 'emily.c@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    segment: 'superfan',
    totalSpent: 3200,
    eventsAttended: 18,
    lastInteraction: '2024-06-12',
    location: 'Seattle, WA',
    tags: ['VIP', 'Fan Club', 'Merch Buyer']
  },
  {
    id: '4',
    name: 'David Park',
    email: 'david.p@email.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    segment: 'casual',
    totalSpent: 120,
    eventsAttended: 1,
    lastInteraction: '2024-05-20',
    location: 'Denver, CO',
    tags: ['Newsletter']
  },
  {
    id: '5',
    name: 'Jessica Rivera',
    email: 'jessica.r@email.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    segment: 'new',
    totalSpent: 50,
    eventsAttended: 0,
    lastInteraction: '2024-06-11',
    location: 'Miami, FL',
    tags: ['Spotify Listener']
  }
];

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    album: 'Neon Horizons',
    coverArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200',
    releaseDate: '2024-03-15',
    streams: 2450000,
    revenue: 8575,
    duration: '3:42'
  },
  {
    id: '2',
    title: 'Electric Heart',
    album: 'Neon Horizons',
    coverArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200',
    releaseDate: '2024-03-15',
    streams: 1890000,
    revenue: 6615,
    duration: '4:15'
  },
  {
    id: '3',
    title: 'Starlight Serenade',
    album: 'Echoes',
    coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200',
    releaseDate: '2023-09-01',
    streams: 5200000,
    revenue: 18200,
    duration: '3:58'
  },
  {
    id: '4',
    title: 'City Lights',
    album: 'Echoes',
    coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200',
    releaseDate: '2023-09-01',
    streams: 3100000,
    revenue: 10850,
    duration: '3:24'
  },
  {
    id: '5',
    title: 'Summer Daze',
    album: 'First Light',
    coverArt: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200',
    releaseDate: '2022-06-20',
    streams: 8900000,
    revenue: 31150,
    duration: '4:02'
  }
];

export const collaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Alex Turner',
    role: 'Lead Vocals / Guitar',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    email: 'alex@band.com',
    phone: '+1 555-0123',
    status: 'active'
  },
  {
    id: '2',
    name: 'Maya Rodriguez',
    role: 'Bass',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    email: 'maya@band.com',
    phone: '+1 555-0124',
    status: 'active'
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Drums',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    email: 'james@band.com',
    phone: '+1 555-0125',
    status: 'active'
  },
  {
    id: '4',
    name: 'Sophie Lee',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
    email: 'sophie@management.com',
    phone: '+1 555-0126',
    status: 'active'
  },
  {
    id: '5',
    name: 'Mike Chen',
    role: 'Sound Engineer',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100',
    email: 'mike@studio.com',
    status: 'active'
  }
];

export const revenueData: RevenueData[] = [
  { month: 'Jan', streaming: 12500, merchandise: 8200, tickets: 45000 },
  { month: 'Feb', streaming: 14200, merchandise: 6800, tickets: 32000 },
  { month: 'Mar', streaming: 18900, merchandise: 12400, tickets: 78000 },
  { month: 'Apr', streaming: 16400, merchandise: 9100, tickets: 52000 },
  { month: 'May', streaming: 21300, merchandise: 15600, tickets: 125000 },
  { month: 'Jun', streaming: 24800, merchandise: 11200, tickets: 89000 }
];

export const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'Tour T-Shirt 2024',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200',
    price: 35,
    sold: 1250,
    stock: 500,
    category: 'Apparel'
  },
  {
    id: '2',
    name: 'Vinyl - Neon Horizons',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=200',
    price: 30,
    sold: 890,
    stock: 200,
    category: 'Music'
  },
  {
    id: '3',
    name: 'Signature Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200',
    price: 65,
    sold: 620,
    stock: 180,
    category: 'Apparel'
  },
  {
    id: '4',
    name: 'Poster Bundle',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200',
    price: 25,
    sold: 2100,
    stock: 800,
    category: 'Accessories'
  }
];
