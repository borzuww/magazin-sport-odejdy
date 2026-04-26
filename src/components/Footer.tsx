export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-10 py-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] font-black uppercase italic">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
          <span className="text-blue-500">БЫСТРАЯ ДОСТАВКА: 1-2 ЧАСА</span>
          <span className="text-gray-500">БИШКЕК, КЫРГЫЗСТАН</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500 transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-blue-500 transition-colors">WHATSAPP</a>
          <a href="#" className="hover:text-blue-500 transition-colors">TELEGRAM</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-gray-900 text-center text-[9px] text-gray-700 tracking-widest font-bold uppercase">
        © {new Date().getFullYear()} BISHKEK SPORT APPAREL GROUP. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </div>
    </footer>
  );
}
