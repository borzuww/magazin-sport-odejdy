export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2">
              <img 
                src="https://images.unsplash.com/photo-1571731956622-39ed443d0385?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Store"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design Accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black rounded-full blur-[100px] opacity-10"></div>
          </div>

          <div className="flex-1">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">О магазине</span>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-8 leading-tight uppercase">
              МЫ ВДОХНОВЛЯЕМ <br /> <span className="text-blue-600">БИШКЕК</span> НА СПОРТ
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Bishkek Sport — это больше, чем просто магазин. Это сообщество людей, объединенных страстью к активному образу жизни. Мы открылись в самом сердце Бишкека, чтобы каждый мог найти качественную экипировку, не переплачивая.
              </p>
              <p className="font-medium text-gray-900 border-l-4 border-blue-600 pl-6 py-2">
                "Наша миссия — сделать профессиональную атлетическую одежду доступной для каждого жителя Кыргызстана."
              </p>
              <p>
                Мы тщательно подбираем ткани, которые дышат и выдерживают интенсивные нагрузки. Каждая модель в нашем каталоге проходит проверку нашими атлетами.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center md:text-left">
                <span className="block text-3xl font-black text-black mb-1">5000+</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Довольных клиентов</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl font-black text-black mb-1">24ч</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Доставка по городу</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl font-black text-black mb-1">3 года</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">На рынке Бишкека</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
