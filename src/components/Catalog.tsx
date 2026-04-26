import { useState, useMemo } from 'react';
import { Product, Category } from '../types';
import { products } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (Category | 'All')[] = ['All', 'T-Shirts', 'Hoodies', 'Pants', 'Footwear', 'Accessories'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="flex min-h-screen bg-white">
      {/* Sidebar Filters */}
      <aside className="w-64 border-r border-gray-100 p-10 hidden lg:flex flex-col gap-12 bg-gray-50 sticky top-20 h-[calc(100vh-80px)]">
        <div>
          <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Категории</h3>
          <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest leading-none">
            {categories.map(cat => (
              <li 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer transition-colors hover:text-blue-600 flex justify-between items-center ${selectedCategory === cat ? 'text-black' : 'text-gray-400'}`}
              >
                {cat === 'All' ? 'Все' : cat}
                <span className="text-[10px] text-gray-400">
                  {cat === 'All' ? products.length : products.filter(p => p.category === cat).length}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Локация</h3>
          <p className="text-xs leading-relaxed text-gray-600 font-medium italic">
            Бишкек, ТЦ "Дордой Плаза"<br/>ул. Ибраимова 115
          </p>
          <p className="text-xs mt-4 font-bold text-blue-600 uppercase tracking-widest">+996 (700) 123 456</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">Популярные Товары</h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-100 focus:border-black outline-none transition-colors text-sm uppercase font-bold tracking-widest"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group cursor-pointer"
                id={`product-${product.id}`}
              >
                {/* Image Area */}
                <div className="aspect-[3/4] bg-gray-50 mb-4 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-gray-300/20 font-black text-4xl uppercase select-none group-hover:opacity-0 transition-opacity whitespace-nowrap">
                        {product.category}
                     </span>
                  </div>
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                      {product.isNew ? 'New Arrival' : product.category}
                    </p>
                    <h4 className="font-black text-sm uppercase truncate leading-tight">{product.name}</h4>
                  </div>
                  <p className="font-black text-sm whitespace-nowrap italic">{product.price.toLocaleString()} KGS</p>
                </div>

                {/* Quick Add Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="w-full mt-4 bg-gray-50 text-[10px] font-black uppercase py-4 tracking-[0.2em] group-hover:bg-black group-hover:text-white transition-all transform active:scale-95"
                >
                  Добавить в корзину
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-400 text-sm uppercase font-black tracking-widest italic">Ничего не найдено...</p>
          </div>
        )}
      </div>
    </section>
  );
}
