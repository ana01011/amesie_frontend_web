export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'snacks' | 'juices' | 'beverages' | 'salads';
  tags: string[];
  rating: number;
  prepTime: string;
}

export interface CartItem extends Product {
  quantity: number;
}
