export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  imageUrl: string;
}

export interface ServiceFeature {
  id: string;
  name: string;
  iconName: string; // Mapping to Lucide icon names
  description: string;
}

export interface SocialLinks {
  facebook: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}