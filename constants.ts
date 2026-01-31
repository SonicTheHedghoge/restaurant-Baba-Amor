import { MenuItem, ServiceFeature, SocialLinks } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/Babaamordjerba",
  email: "babaamor27@gmail.com",
  phone: "50 850 183"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Djerbian Couscous',
    description: 'Steamed semolina served with fresh local fish, pumpkin, and a fragrant spiced tomato broth.',
    price: '35 TND',
    category: 'Main',
    imageUrl: 'https://picsum.photos/id/1080/600/400' 
  },
  {
    id: '2',
    name: 'Brik à l\'Oeuf',
    description: 'Crispy pastry triangle filled with fresh parsley, tuna, capers, and a soft-cooked egg.',
    price: '8 TND',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/id/139/600/400'
  },
  {
    id: '3',
    name: 'Grilled Octopus',
    description: 'Freshly caught Djerbian octopus, marinated in garlic and olive oil, grilled to perfection.',
    price: '42 TND',
    category: 'Main',
    imageUrl: 'https://picsum.photos/id/42/600/400'
  },
  {
    id: '4',
    name: 'Mechouia Salad',
    description: 'Grilled peppers, tomatoes, and onions, chopped finely and seasoned with caraway and olive oil.',
    price: '12 TND',
    category: 'Starter',
    imageUrl: 'https://picsum.photos/id/292/600/400'
  },
  {
    id: '5',
    name: 'Bambalouni',
    description: 'Traditional Tunisian doughnut sprinkled with sugar, perfect with mint tea.',
    price: '5 TND',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/id/431/600/400'
  },
  {
    id: '6',
    name: 'Mint Tea with Pine Nuts',
    description: 'Sweet, hot green tea served with fresh mint leaves and crunchy pine nuts.',
    price: '6 TND',
    category: 'Drink',
    imageUrl: 'https://picsum.photos/id/425/600/400'
  }
];

export const SERVICES: ServiceFeature[] = [
  { id: '1', name: 'Reservations', iconName: 'CalendarCheck', description: 'Book your table in advance for the perfect evening.' },
  { id: '2', name: 'In-store Pickup', iconName: 'ShoppingBag', description: 'Order ahead and collect your meal fresh from our kitchen.' },
  { id: '3', name: 'Contactless Delivery', iconName: 'Truck', description: 'Safe and swift delivery directly to your doorstep in Djerba.' },
  { id: '4', name: 'Outdoor Seating', iconName: 'Sun', description: 'Enjoy the Mediterranean breeze in our beautiful courtyard.' },
  { id: '5', name: 'Dine-in', iconName: 'Utensils', description: 'Experience the warm atmosphere of Baba Amor.' },
];