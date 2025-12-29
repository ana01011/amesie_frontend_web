import { Plus, Star, Clock } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(product);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-gradient-to-br from-white to-yellow-50/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col border border-yellow-100/50 hover:border-yellow-300">
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-yellow-100 to-orange-100">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-200">
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-xs text-yellow-700 font-semibold">{product.name}</p>
            </div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={handleImageError}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg border border-white/50">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold text-slate-800">{product.rating}</span>
        </div>
        {product.tags.includes('trending') && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
            Trending
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-yellow-50/60 px-2 py-1 rounded-lg w-fit">
          <Clock className="w-4 h-4 text-yellow-600" />
          <span className="font-semibold text-yellow-700">{product.prepTime}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-yellow-100/50">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 hover:from-yellow-600 hover:via-amber-700 hover:to-orange-700 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group/btn"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-5 h-5 group-hover/btn:rotate-90 group-hover/btn:scale-110 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
