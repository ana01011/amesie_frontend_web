import { useState } from 'react';
import { Coffee, Sandwich, Droplet, Wine, Salad, TrendingUp, Award, Heart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import CartModal from './components/CartModal';
import { products } from './data/products';
import { CartItem, Product } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const trendingProducts = products.filter((p) => p.tags.includes('trending'));
  const bestsellerProducts = products.filter((p) => p.tags.includes('bestseller'));
  const recommendedProducts = products.filter((p) => p.tags.includes('recommended'));

  const coffeeProducts = products.filter((p) => p.category === 'coffee');
  const snacksProducts = products.filter((p) => p.category === 'snacks');
  const juicesProducts = products.filter((p) => p.category === 'juices');
  const beveragesProducts = products.filter((p) => p.category === 'beverages');
  const saladsProducts = products.filter((p) => p.category === 'salads');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/20 to-white">
      <Header cart={cart} onCartClick={() => setIsCartOpen(true)} />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <CategorySection
          id="trending"
          title="Trending Now"
          subtitle="Most popular items this week"
          products={trendingProducts}
          icon={<TrendingUp className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="bestsellers"
          title="Best Sellers"
          subtitle="Customer favorites you'll love"
          products={bestsellerProducts}
          icon={<Award className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="recommended"
          title="Recommended for You"
          subtitle="Handpicked just for you"
          products={recommendedProducts}
          icon={<Heart className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="coffee"
          title="Premium Coffee"
          subtitle="Artisan coffee crafted by expert baristas"
          products={coffeeProducts}
          icon={<Coffee className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="snacks"
          title="Gourmet Snacks"
          subtitle="Freshly prepared artisan snacks & pastries"
          products={snacksProducts}
          icon={<Sandwich className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="juices"
          title="Fresh Juices"
          subtitle="Organic cold-pressed juices & smoothies"
          products={juicesProducts}
          icon={<Droplet className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="beverages"
          title="Specialty Beverages"
          subtitle="Hot & cold specialty drinks"
          products={beveragesProducts}
          icon={<Wine className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />

        <CategorySection
          id="salads"
          title="Fresh Salads"
          subtitle="Healthy bowls & premium salad options"
          products={saladsProducts}
          icon={<Salad className="w-7 h-7 text-white" />}
          onAddToCart={addToCart}
        />
      </main>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-950 text-white py-12 mt-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 p-2.5 rounded-xl shadow-lg">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Amesie</span>
              </div>
              <p className="text-slate-400 text-sm">
                Premium royal delivery service bringing luxury to your doorstep.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#coffee" className="hover:text-yellow-400 transition-colors">Coffee</a></li>
                <li><a href="#snacks" className="hover:text-yellow-400 transition-colors">Snacks</a></li>
                <li><a href="#juices" className="hover:text-yellow-400 transition-colors">Juices</a></li>
                <li><a href="#beverages" className="hover:text-yellow-400 transition-colors">Beverages</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-yellow-400 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-yellow-400">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#help" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
                <li><a href="#terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Amesie. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;
