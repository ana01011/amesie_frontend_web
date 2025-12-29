import { ShoppingCart, Search, Menu, X, Crown } from 'lucide-react';
import { useState } from 'react';
import { CartItem } from '../types';
import AddressSelector from './AddressSelector';

interface HeaderProps {
  cart: CartItem[];
  onCartClick: () => void;
}

export default function Header({ cart, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    { name: 'Coffee', href: '#coffee' },
    { name: 'Snacks', href: '#snacks' },
    { name: 'Juices', href: '#juices' },
    { name: 'Beverages', href: '#beverages' },
    { name: 'Salads', href: '#salads' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-white to-yellow-50/40 backdrop-blur-md shadow-lg border-b border-yellow-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 p-2.5 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <Crown className="w-7 h-7 text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                Amesie
              </span>
              <span className="text-xs bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-bold uppercase tracking-widest">
                Royal Delivery
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <AddressSelector />
            <nav className="flex items-center gap-8 border-l border-yellow-200 pl-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-slate-700 hover:text-yellow-600 font-medium transition-colors duration-200 relative group text-sm"
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 transition-all duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-yellow-700" />
              <span className="text-sm text-yellow-700 font-semibold">Search</span>
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 hover:from-yellow-600 hover:via-amber-700 hover:to-orange-700 text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-rose-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-yellow-100 hover:bg-yellow-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-yellow-700" />
              ) : (
                <Menu className="w-6 h-6 text-yellow-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-yellow-100 bg-gradient-to-b from-white to-yellow-50/50">
          <div className="px-4 py-4 space-y-3 max-h-96 overflow-y-auto">
            <AddressSelector />
            <nav className="space-y-2 pt-4 border-t border-yellow-100">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 hover:text-yellow-700 font-semibold transition-all duration-200"
                >
                  {category.name}
                </a>
              ))}
            </nav>
            <button
              className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 transition-all duration-200 mt-4"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-yellow-700" />
              <span className="text-sm text-yellow-700 font-semibold">Search</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
