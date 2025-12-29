import { Product } from '../types';
import ProductCard from './ProductCard';
import Carousel from './Carousel';

interface CategorySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  products: Product[];
  icon?: React.ReactNode;
  onAddToCart: (product: Product) => void;
}

export default function CategorySection({
  id,
  title,
  subtitle,
  products,
  icon,
  onAddToCart,
}: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <section id={id} className="py-12">
      <div className="flex items-center gap-4 mb-8">
        {icon && (
          <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 shadow-lg hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{title}</h2>
          {subtitle && <p className="text-slate-600 mt-1 font-medium">{subtitle}</p>}
        </div>
      </div>

      <Carousel itemsPerView={4}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </Carousel>
    </section>
  );
}
