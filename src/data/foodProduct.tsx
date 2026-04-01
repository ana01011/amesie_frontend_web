// // src/data/foodProducts.ts
// import { FoodProduct } from '../types';

// export const foodProducts: FoodProduct[] = [
//   // Compact burger cards [file:28][file:29][file:32]
//   {
//     id: 'burger-rose-garden-1',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-1',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-1',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-1',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-1',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-1',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-2',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-2',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-2',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-2',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-2',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-2',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-3',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-3',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-3',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-3',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-3',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-3',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-4',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-4',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-4',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-4',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-4',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-4',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','bestseller'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-1',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-1',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-1',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-1',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-1',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-1',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-2',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-2',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-2',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-2',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-2',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-2',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-3',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-3',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-3',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-3',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-3',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-3',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-rose-garden-5',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
//   {
//     id: 'burger-2-5',
//     name: 'Burger',
//     restaurant: 'Rose Garden',
//     price: 40,
//     image: '/images/burger.png',  // Use your uploaded images
//     category: 9,
//     tags: ['popular', 'fast-food'],
//     rating: 4.5,
//     prepTime: '5 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg', 'chilli'],
//     deliveryFee: 0, // 0 = Free

//   },
  

//   // Detailed pizza card [file:31]
//   {
//     id: 'pizza-prosciutto-5',
//     name: 'Pizza',
//     restaurant: 'Rose Garden',
//     description: 'Prosciutto E Funghi - A pizza variety that is topped with tomato sauce',
//     price: 20,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','featured'],
//     rating: 4.7,
//     prepTime: '20 min',
//     sizes: ['10"', '14"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },
//   {
//     id: 'burger-classic-5',
//     name: 'Classic Burger',
//     restaurant: 'Rose Garden',
//     price: 45,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.7,
//     prepTime: '7 min',
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   },

//   // Signature coffee from code snippet [file:30]
//   {
//     id: 'signature-espresso-4',
//     name: 'Espresso',
//     restaurant: 'Rose Garden',
//     description: 'Rich, bold espresso with velvet crema',
//     price: 4.5,
//     image: '/images/burger.png',
//     category: 9,
//     tags: ['popular','bestseller'],
//     rating: 4.8,
//     prepTime: '3 min',
//     ingredients: [ 'coffee', 'sugar', 'milk'],
//     deliveryFee: 0,
//   },

//   // More for categories
//   {
//     id: 'pizza-marghe-5',
//     name: 'Margherita Pizza',
//     restaurant: 'Pizza Palace',
//     price: 35,
//     image: '/images/burger.png',
//     category:9,
//     tags: ['popular','bestseller'],
//     rating: 4.6,
//     prepTime: '15 min',
//     sizes: ['12"', '16"'],
//     ingredients: ['salt', 'chicken', 'garlic', 'veg'],
//     deliveryFee: 0,
//   }
// ];
