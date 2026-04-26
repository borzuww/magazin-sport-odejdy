import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-[480px] w-full overflow-hidden bg-black mt-20 flex items-center">
      {/* Skewed Blue Accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600 skew-x-[-15deg] translate-x-12 opacity-90 hidden md:block"></div>
      
      {/* Background Image (Subtle) */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
         <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover"
            alt="Sports Texture"
            referrerPolicy="no-referrer"
         />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">
            Новая Коллекция
          </span>
          <h1 className="text-white text-6xl md:text-8xl font-black italic tracking-tighter mt-4 leading-none uppercase">
            БИШКЕК <br /> 2026
          </h1>
          <p className="text-gray-400 text-sm mt-6 max-w-xs uppercase tracking-tighter leading-tight">
            Доставка по городу и всему Кыргызстану. <br />
            Преодолевай свои границы вместе с нами.
          </p>
          <button
            onClick={onExplore}
            className="mt-8 bg-blue-600 text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all transform active:scale-95"
          >
            Смотреть каталог
          </button>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-4 right-10 text-white/5 text-[120px] font-black italic select-none pointer-events-none hidden lg:block uppercase">
        SPORT
      </div>
    </section>
  );
}
