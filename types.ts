
export enum Category {
  Construction = 'Construction',
  Finishing = 'Finishing',
  Plumbing = 'Plumbing',
  Electrical = 'Electrical',
  AC = 'A/C',
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}

export interface Supplier {
  name: string;
  price: number;
  stockAvailability: boolean;
  rating: number; // e.g., 1 to 5
  location: string;
}

export interface Material {
  id: string;
  name: string;
  unit: string;
  suppliers: Supplier[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
