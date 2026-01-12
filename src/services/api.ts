// import { Product, CartItem } from '../types';

// const MOCK_ADDRESSES = [
//   { id: '1', street: '123 Oak Street', city: 'San Francisco', zip: '94102', default: true },
//   { id: '2', street: '456 Maple Avenue', city: 'San Francisco', zip: '94103', default: false },
//   { id: '3', street: '789 Pine Road', city: 'San Francisco', zip: '94104', default: false },
// ];

// const PREMIUM_IMAGES = {
//   coffee: [
//     'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
//     'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg',
//     'https://images.pexels.com/photos/1936844/pexels-photo-1936844.jpeg',
//   ],
//   snacks: [
//     'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg',
//     'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
//     'https://images.pexels.com/photos/4394516/pexels-photo-4394516.jpeg',
//   ],
//   juices: [
//     'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg',
//     'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
//     'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg',
//   ],
//   beverages: [
//     'https://images.pexels.com/photos/4350056/pexels-photo-4350056.jpeg',
//     'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg',
//     'https://images.pexels.com/photos/4040641/pexels-photo-4040641.jpeg',
//   ],
//   salads: [
//     'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
//     'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
//     'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
//   ],
// };

// function getImageUrl(category: string, index: number): string {
//   const images = PREMIUM_IMAGES[category as keyof typeof PREMIUM_IMAGES] || PREMIUM_IMAGES.coffee;
//   const img = images[index % images.length];
//   return `${img}?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop`;
// }

// const MOCK_PRODUCTS: Product[] = [
//   {
//     id: 'c1',
//     name: 'Signature Espresso',
//     description: 'Rich, bold espresso with velvety crema',
//     price: 4.50,
//     image: getImageUrl('coffee', 0),
//     category: 'coffee',
//     tags: ['trending', 'bestseller'],
//     rating: 4.8,
//     prepTime: '3 min'
//   },
//   {
//     id: 'c2',
//     name: 'Caramel Macchiato',
//     description: 'Smooth espresso with vanilla and caramel',
//     price: 5.75,
//     image: getImageUrl('coffee', 1),
//     category: 'coffee',
//     tags: ['bestseller', 'recommended'],
//     rating: 4.9,
//     prepTime: '4 min'
//   },
//   {
//     id: 'c3',
//     name: 'Cappuccino Supreme',
//     description: 'Classic cappuccino with microfoam art',
//     price: 5.25,
//     image: getImageUrl('coffee', 2),
//     category: 'coffee',
//     tags: ['recommended'],
//     rating: 4.7,
//     prepTime: '4 min'
//   },
//   {
//     id: 'c4',
//     name: 'Iced Vanilla Latte',
//     description: 'Refreshing iced latte with vanilla bean',
//     price: 5.50,
//     image: getImageUrl('coffee', 0),
//     category: 'coffee',
//     tags: ['trending'],
//     rating: 4.6,
//     prepTime: '5 min'
//   },
//   {
//     id: 'c5',
//     name: 'Flat White',
//     description: 'Velvety microfoam with double ristretto',
//     price: 5.00,
//     image: getImageUrl('coffee', 1),
//     category: 'coffee',
//     tags: ['recommended'],
//     rating: 4.8,
//     prepTime: '4 min'
//   },
//   {
//     id: 's1',
//     name: 'Truffle Croissant',
//     description: 'Buttery croissant with truffle butter',
//     price: 6.50,
//     image: getImageUrl('snacks', 0),
//     category: 'snacks',
//     tags: ['trending', 'bestseller'],
//     rating: 4.9,
//     prepTime: '2 min'
//   },
//   {
//     id: 's2',
//     name: 'Avocado Toast',
//     description: 'Sourdough with smashed avocado & seeds',
//     price: 8.50,
//     image: getImageUrl('snacks', 1),
//     category: 'snacks',
//     tags: ['recommended'],
//     rating: 4.7,
//     prepTime: '6 min'
//   },
//   {
//     id: 's3',
//     name: 'Artisan Bagel',
//     description: 'Fresh bagel with cream cheese & salmon',
//     price: 7.75,
//     image: getImageUrl('snacks', 2),
//     category: 'snacks',
//     tags: ['bestseller'],
//     rating: 4.6,
//     prepTime: '5 min'
//   },
//   {
//     id: 's4',
//     name: 'Chocolate Muffin',
//     description: 'Double chocolate chip muffin',
//     price: 4.25,
//     image: getImageUrl('snacks', 0),
//     category: 'snacks',
//     tags: ['trending'],
//     rating: 4.5,
//     prepTime: '1 min'
//   },
//   {
//     id: 'j1',
//     name: 'Fresh Orange Juice',
//     description: 'Freshly squeezed organic oranges',
//     price: 5.50,
//     image: getImageUrl('juices', 0),
//     category: 'juices',
//     tags: ['bestseller', 'recommended'],
//     rating: 4.8,
//     prepTime: '3 min'
//   },
//   {
//     id: 'j2',
//     name: 'Green Detox Blend',
//     description: 'Spinach, apple, cucumber & ginger',
//     price: 7.25,
//     image: getImageUrl('juices', 1),
//     category: 'juices',
//     tags: ['trending'],
//     rating: 4.7,
//     prepTime: '4 min'
//   },
//   {
//     id: 'j3',
//     name: 'Berry Blast',
//     description: 'Mixed berries with acai & honey',
//     price: 6.75,
//     image: getImageUrl('juices', 2),
//     category: 'juices',
//     tags: ['trending', 'recommended'],
//     rating: 4.9,
//     prepTime: '4 min'
//   },
//   {
//     id: 'b1',
//     name: 'Matcha Latte',
//     description: 'Premium ceremonial grade matcha',
//     price: 6.25,
//     image: getImageUrl('beverages', 0),
//     category: 'beverages',
//     tags: ['trending', 'bestseller'],
//     rating: 4.8,
//     prepTime: '5 min'
//   },
//   {
//     id: 'b2',
//     name: 'Chai Tea Latte',
//     description: 'Spiced black tea with steamed milk',
//     price: 5.50,
//     image: getImageUrl('beverages', 1),
//     category: 'beverages',
//     tags: ['recommended'],
//     rating: 4.6,
//     prepTime: '4 min'
//   },
//   {
//     id: 'b3',
//     name: 'Hot Chocolate',
//     description: 'Belgian chocolate with whipped cream',
//     price: 5.75,
//     image: getImageUrl('beverages', 2),
//     category: 'beverages',
//     tags: ['bestseller'],
//     rating: 4.7,
//     prepTime: '4 min'
//   },
//   {
//     id: 'sa1',
//     name: 'Caesar Salad',
//     description: 'Romaine, parmesan, croutons & dressing',
//     price: 9.50,
//     image: getImageUrl('salads', 0),
//     category: 'salads',
//     tags: ['bestseller', 'recommended'],
//     rating: 4.7,
//     prepTime: '7 min'
//   },
//   {
//     id: 'sa2',
//     name: 'Mediterranean Bowl',
//     description: 'Quinoa, feta, olives & tahini',
//     price: 10.50,
//     image: getImageUrl('salads', 1),
//     category: 'salads',
//     tags: ['trending'],
//     rating: 4.8,
//     prepTime: '8 min'
//   },
//   {
//     id: 'sa3',
//     name: 'Asian Fusion Salad',
//     description: 'Edamame, mandarin, sesame dressing',
//     price: 10.25,
//     image: getImageUrl('salads', 2),
//     category: 'salads',
//     tags: ['recommended'],
//     rating: 4.6,
//     prepTime: '7 min'
//   },
// ];

// export interface Address {
//   id: string;
//   street: string;
//   city: string;
//   zip: string;
//   default: boolean;
// }

// interface ApiConfig {
//   baseURL: string;
//   timeout: number;
// }

// const config: ApiConfig = {
//   baseURL: 'http://localhost:3000/api',
//   timeout: 5000,
// };

// export function updateApiConfig(newConfig: Partial<ApiConfig>) {
//   Object.assign(config, newConfig);
// }

// export const apiService = {
//   getConfig: () => config,

//   async getProducts(): Promise<Product[]> {
//     try {
//       const response = await fetch(`${config.baseURL}/products`);
//       if (!response.ok) throw new Error('Failed to fetch products');
//       return await response.json();
//     } catch (error) {
//       console.warn('Using mock products:', error);
//       return new Promise((resolve) => {
//         setTimeout(() => resolve(MOCK_PRODUCTS), 100);
//       });
//     }
//   },

//   async getAddresses(): Promise<Address[]> {
//     try {
//       const response = await fetch(`${config.baseURL}/addresses`);
//       if (!response.ok) throw new Error('Failed to fetch addresses');
//       return await response.json();
//     } catch (error) {
//       console.warn('Using mock addresses:', error);
//       return new Promise((resolve) => {
//         setTimeout(() => resolve(MOCK_ADDRESSES), 100);
//       });
//     }
//   },

//   async getDefaultAddress(): Promise<Address | null> {
//     try {
//       const response = await fetch(`${config.baseURL}/addresses/default`);
//       if (!response.ok) throw new Error('Failed to fetch default address');
//       return await response.json();
//     } catch (error) {
//       console.warn('Using mock default address:', error);
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           const defaultAddr = MOCK_ADDRESSES.find((addr) => addr.default);
//           resolve(defaultAddr || null);
//         }, 100);
//       });
//     }
//   },

//   async setDefaultAddress(addressId: string): Promise<Address | null> {
//     try {
//       const response = await fetch(`${config.baseURL}/addresses/${addressId}/default`, {
//         method: 'POST',
//       });
//       if (!response.ok) throw new Error('Failed to set default address');
//       return await response.json();
//     } catch (error) {
//       console.warn('Using mock set default address:', error);
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           const index = MOCK_ADDRESSES.findIndex((addr) => addr.id === addressId);
//           if (index !== -1) {
//             MOCK_ADDRESSES.forEach((addr) => (addr.default = false));
//             MOCK_ADDRESSES[index].default = true;
//             resolve(MOCK_ADDRESSES[index]);
//           } else {
//             resolve(null);
//           }
//         }, 100);
//       });
//     }
//   },

//   async validateCart(items: CartItem[]): Promise<boolean> {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(items.length > 0), 100);
//     });
//   },

//   async submitOrder(items: CartItem[], address: Address): Promise<{ orderId: string }> {
//     try {
//       const response = await fetch(`${config.baseURL}/orders`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ items, address }),
//       });
//       if (!response.ok) throw new Error('Failed to submit order');
//       return await response.json();
//     } catch (error) {
//       console.warn('Using mock order submission:', error);
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({ orderId: `ORD-${Date.now()}` });
//         }, 500);
//       });
//     }
//   },
// };
