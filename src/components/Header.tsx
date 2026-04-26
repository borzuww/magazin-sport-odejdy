import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ cartCount, onCartClick, onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Каталог', id: 'catalog' },
    { name: 'Мужчины', id: 'men' },
    { name: 'Женщины', id: 'women' },
    { name: 'О нас', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer select-none" 
            onClick={() => onNavigate('home')}
            id="site-logo"
          >
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              BISHKEK<span className="text-blue-600">SPORT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                  currentPage === item.id ? 'text-blue-600' : 'text-black'
                }`}
                id={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-black hover:text-blue-600 transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button
            onClick={onCartClick}
            className="flex items-center gap-2 border border-black px-5 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95"
            id="cart-button"
          >
            КОРЗИНА ({cartCount})
          </button>
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-gray-100 md:hidden overflow-hidden z-40"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-black uppercase tracking-widest text-left ${
                    currentPage === item.id ? 'text-blue-600' : 'text-black'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
