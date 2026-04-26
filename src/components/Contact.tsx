import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black text-black tracking-tighter mb-4 uppercase">Будем <span className="text-blue-600">на связи</span></h2>
              <p className="text-gray-500">Есть вопросы? Мы всегда готовы помочь вам с выбором.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Наш адрес</h4>
                  <p className="text-gray-500 text-sm">Кыргызстан, г. Бишкек, <br />Улица Исхака Раззакова 38</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Телефон</h4>
                  <p className="text-gray-500 text-sm">+996 (707) 089-511 <br />+996 (707) 089-511</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">skyixline@gmail.com <br /></p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-600 text-sm italic">
                * Доставка по Бишкеку осуществляется в течение 24 часов после заказа. По регионам Кыргызстана — от 48 часов.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-black p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Напишите <span className="text-blue-500">нам</span></h3>
            <form className="space-y-6" id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+996 ..."
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Сообщение</label>
                <textarea 
                  rows={4}
                  placeholder="Ваш вопрос..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-black py-5 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                Отправить запрос
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
