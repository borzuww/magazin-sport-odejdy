import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            id="cart-drawer"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-black text-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-blue-500" />
                <h2 className="text-xl font-black uppercase tracking-tighter">Корзина</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                id="close-cart"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-gray-500 uppercase font-bold tracking-widest text-sm">Ваша корзина пуста</p>
                  <button 
                    onClick={onClose}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Вернуться к покупкам
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors"
                      id={`cart-item-${item.id}`}
                    >
                      <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-blue-600 font-black mb-4">
                          {item.price} <span className="text-[10px] font-normal text-gray-500">KGS</span>
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:text-blue-600 transition-colors"
                              id={`decrease-quantity-${item.id}`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:text-blue-600 transition-colors"
                              id={`increase-quantity-${item.id}`}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            id={`remove-item-${item.id}`}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium uppercase tracking-widest text-xs">Итого к оплате:</span>
                  <span className="text-3xl font-black text-black">
                    {total} <span className="text-sm font-normal text-gray-500">KGS</span>
                  </span>
                </div>
                <button
                  className="w-full bg-blue-600 text-white font-black py-4 rounded-lg hover:bg-blue-700 transition-all transform active:scale-95 shadow-xl shadow-blue-200 inline-flex items-center justify-center gap-2 uppercase tracking-tighter"
                  id="checkout-button"
                >
                  Оформить заказ
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
