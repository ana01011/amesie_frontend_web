import { Coffee, Sandwich, Droplet, Wine, Salad } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

function CategoryCard({ icon, title, description, href, gradient }: CategoryCardProps) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-yellow-50/30 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 hover:-translate-y-2 border border-slate-100/50 hover:border-yellow-300/50"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex items-center text-yellow-600 font-semibold text-sm group-hover:text-orange-600 group-hover:gap-2 transition-all duration-300">
        Explore
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </a>
  );
}

export default function Hero() {
  const categories = [
    {
      icon: <Coffee className="w-7 h-7 text-white" />,
      title: 'Premium Coffee',
      description: 'Artisan coffee crafted by expert baristas',
      href: '#coffee',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Sandwich className="w-7 h-7 text-white" />,
      title: 'Gourmet Snacks',
      description: 'Freshly prepared artisan snacks',
      href: '#snacks',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: <Droplet className="w-7 h-7 text-white" />,
      title: 'Fresh Juices',
      description: 'Organic cold-pressed juices',
      href: '#juices',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Wine className="w-7 h-7 text-white" />,
      title: 'Beverages',
      description: 'Hot & cold specialty drinks',
      href: '#beverages',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: <Salad className="w-7 h-7 text-white" />,
      title: 'Fresh Salads',
      description: 'Healthy bowls & salad options',
      href: '#salads',
      gradient: 'from-teal-500 to-green-600',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-yellow-50/40 to-orange-50/20 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
            Royal Delivery,
            <span className="block bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Lightning Speed
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Experience luxury with every order. Artisan quality at your doorstep in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
