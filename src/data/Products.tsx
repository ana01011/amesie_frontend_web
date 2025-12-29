import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'c1',
    name: 'Signature Espresso',
    description: 'Rich, bold espresso with velvety crema',
    price: 4.50,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'coffee',
    tags: ['trending', 'bestseller'],
    rating: 4.8,
    prepTime: '3 min'
  },
  {
    id: 'c2',
    name: 'Caramel Macchiato',
    description: 'Smooth espresso with vanilla and caramel',
    price: 5.75,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'coffee',
    tags: ['bestseller', 'recommended'],
    rating: 4.9,
    prepTime: '4 min'
  },
  {
    id: 'c3',
    name: 'Cappuccino Supreme',
    description: 'Classic cappuccino with microfoam art',
    price: 5.25,
    image: 'https://images.pexels.com/photos/1936844/pexels-photo-1936844.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'coffee',
    tags: ['recommended'],
    rating: 4.7,
    prepTime: '4 min'
  },
  {
    id: 'c4',
    name: 'Iced Vanilla Latte',
    description: 'Refreshing iced latte with vanilla bean',
    price: 5.50,
    image: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'coffee',
    tags: ['trending'],
    rating: 4.6,
    prepTime: '5 min'
  },
  {
    id: 'c5',
    name: 'Flat White',
    description: 'Velvety microfoam with double ristretto',
    price: 5.00,
    image: 'https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'coffee',
    tags: ['recommended'],
    rating: 4.8,
    prepTime: '4 min'
  },
  {
    id: 's1',
    name: 'Truffle Croissant',
    description: 'Buttery croissant with truffle butter',
    price: 6.50,
    image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'snacks',
    tags: ['trending', 'bestseller'],
    rating: 4.9,
    prepTime: '2 min'
  },
  {
    id: 's2',
    name: 'Avocado Toast',
    description: 'Sourdough with smashed avocado & seeds',
    price: 8.50,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'snacks',
    tags: ['recommended'],
    rating: 4.7,
    prepTime: '6 min'
  },
  {
    id: 's3',
    name: 'Artisan Bagel',
    description: 'Fresh bagel with cream cheese & salmon',
    price: 7.75,
    image: 'https://images.pexels.com/photos/4394516/pexels-photo-4394516.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'snacks',
    tags: ['bestseller'],
    rating: 4.6,
    prepTime: '5 min'
  },
  {
    id: 's4',
    name: 'Chocolate Muffin',
    description: 'Double chocolate chip muffin',
    price: 4.25,
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'snacks',
    tags: ['trending'],
    rating: 4.5,
    prepTime: '1 min'
  },
  {
    id: 'j1',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed organic oranges',
    price: 5.50,
    image: 'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'juices',
    tags: ['bestseller', 'recommended'],
    rating: 4.8,
    prepTime: '3 min'
  },
  {
    id: 'j2',
    name: 'Green Detox Blend',
    description: 'Spinach, apple, cucumber & ginger',
    price: 7.25,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'juices',
    tags: ['trending'],
    rating: 4.7,
    prepTime: '4 min'
  },
  {
    id: 'j3',
    name: 'Berry Blast',
    description: 'Mixed berries with acai & honey',
    price: 6.75,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'juices',
    tags: ['trending', 'recommended'],
    rating: 4.9,
    prepTime: '4 min'
  },
  {
    id: 'b1',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha',
    price: 6.25,
    image: 'https://images.pexels.com/photos/4350056/pexels-photo-4350056.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    tags: ['trending', 'bestseller'],
    rating: 4.8,
    prepTime: '5 min'
  },
  {
    id: 'b2',
    name: 'Chai Tea Latte',
    description: 'Spiced black tea with steamed milk',
    price: 5.50,
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    tags: ['recommended'],
    rating: 4.6,
    prepTime: '4 min'
  },
  {
    id: 'b3',
    name: 'Hot Chocolate',
    description: 'Belgian chocolate with whipped cream',
    price: 5.75,
    image: 'https://images.pexels.com/photos/4040641/pexels-photo-4040641.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    tags: ['bestseller'],
    rating: 4.7,
    prepTime: '4 min'
  },
  {
    id: 'sa1',
    name: 'Caesar Salad',
    description: 'Romaine, parmesan, croutons & dressing',
    price: 9.50,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    tags: ['bestseller', 'recommended'],
    rating: 4.7,
    prepTime: '7 min'
  },
  {
    id: 'sa2',
    name: 'Mediterranean Bowl',
    description: 'Quinoa, feta, olives & tahini',
    price: 10.50,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    tags: ['trending'],
    rating: 4.8,
    prepTime: '8 min'
  },
  {
    id: 'sa3',
    name: 'Asian Fusion Salad',
    description: 'Edamame, mandarin, sesame dressing',
    price: 10.25,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    tags: ['recommended'],
    rating: 4.6,
    prepTime: '7 min'
  }
];
