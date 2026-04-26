import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart with local storage (optional, for persistency)
  useEffect(() => {
    const savedCart = localStorage.getItem('bishkek_sport_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bishkek_sport_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setCurrentPage('catalog')} />
            <Catalog onAddToCart={addToCart} />
            <About />
          </>
        );
      case 'catalog':
        return <Catalog onAddToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'contacts':
        return <Contact />;
      default:
        return <Hero onExplore={() => setCurrentPage('catalog')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />

      {/* Floating Action Button for Mobile Contact (optional) */}
      <a 
        href="tel:+996555123456"
        className="fixed bottom-6 right-6 md:hidden z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
        id="fab-call"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  );
}

