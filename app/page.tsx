import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-blog.png';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800 min-h-screen flex flex-col">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">
          <Link href="/" className="flex items-center group hover-scale">
            <Image 
              src={logo} 
              alt="Blogger" 
             className="w-10 h-10 rounded-xl shadow-lg group-hover:shadow-indigo-200 transition-all duration-300 animate-bounce-slow" 
            />
            <h1 className="ml-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
              Blogger
            </h1>
          </Link>

          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors animate-fade-in hover-scale"
            >
              Giriş Yap
            </Link>
            <Link 
              href="/register" 
              className="px-6 py-2.5 text-sm font-medium bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all animate-fade-in hover-scale"
            >
              Ücretsiz Başla
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 opacity-70 animate-fade-in"></div>
        <div className="container mx-auto px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-7xl font-bold leading-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-8 animate-slide-left">
              Düşüncelerinizi Dünyayla Paylaşın
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed animate-slide-right">
              Profesyonel blog platformumuzla fikirlerinizi, hikayelerinizi ve uzmanlığınızı paylaşın. 
              Sizi bekleyen topluluğumuza katılın.
            </p>
            <div className="flex gap-6 justify-center items-center">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium shadow-xl shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all duration-300 animate-pulse-slow hover-scale"
              >
                Blog Oluştur
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 text-slate-600 hover:text-indigo-600 font-medium transition-colors animate-fade-in hover-scale"
              >
                Nasıl Çalışır?
              </Link>
            </div>
          </div>
        </div>
      </section>

    {/* Features Grid */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-8">
    <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 animate-fade-in">
      Neler Sunuyoruz?
    </h3>
    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 animate-fade-in">
      Blog yazarlığını bir üst seviyeye taşımanız için ihtiyacınız olan tüm araçlar
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Kolay İçerik Oluşturma",
          description: "Modern editör ile dakikalar içinde profesyonel blog yazıları oluşturun.",
          icon: "✍️",
          link: "/features#editor",
          features: ["Sürükle & Bırak", "Zengin Metin Editörü", "Şablonlar"]
        },
        {
          title: "SEO Dostu",
          description: "Otomatik SEO optimizasyonu ile içerikleriniz arama motorlarında üst sıralarda.",
          icon: "🎯",
          link: "/features#seo",
          features: ["Meta Etiketler", "Site Haritası", "Anahtar Kelime Analizi"]
        },
        {
          title: "Analitik Raporlar",
          description: "Detaylı analizler ile blog performansınızı takip edin.",
          icon: "📊",
          link: "/features#analytics",
          features: ["Gerçek Zamanlı İstatistikler", "Okuyucu Davranışları", "Özelleştirilebilir Raporlar"]
        },
        {
          title: "Topluluk Özellikleri",
          description: "Okuyucularınızla etkileşime geçin ve topluluğunuzu büyütün.",
          icon: "👥",
          link: "/features#community",
          features: ["Yorumlar", "Üyelik Sistemi", "Newsletter"]
        },
        {
          title: "Medya Yönetimi",
          description: "Görsellerinizi ve videolarınızı kolayca yönetin ve optimize edin.",
          icon: "🖼️",
          link: "/features#media",
          features: ["Otomatik Optimizasyon", "CDN Desteği", "Gelişmiş Medya Kütüphanesi"]
        },
        {
          title: "Gelişmiş Güvenlik",
          description: "Blog'unuz ve verileriniz en üst düzey güvenlik önlemleriyle korunur.",
          icon: "🛡️",
          link: "/features#security",
          features: ["SSL Sertifikası", "DDoS Koruması", "Otomatik Yedekleme"]
        }
      ].map((feature, index) => (
        <Link 
          href={feature.link}
          key={index} 
          className="group relative overflow-hidden p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Background Decoration */}
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          
          {/* Icon */}
          <div className="relative">
            <span className="inline-block text-4xl mb-6 p-4 bg-white rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {feature.icon}
            </span>
          </div>

          {/* Content */}
          <div className="relative">
            <h4 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
              {feature.title}
            </h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {feature.description}
            </p>

            {/* Feature List */}
            <ul className="space-y-2">
              {feature.features.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-8 flex items-center text-indigo-600 font-medium group/link">
              <span className="group-hover/link:mr-2 transition-all">Daha Fazla Bilgi</span>
              <svg 
                className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transform -translate-x-3 group-hover/link:translate-x-0 transition-all" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

    
{/* Testimonials */}
<section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="container mx-auto px-8">
    <h3 className="text-3xl font-bold text-center text-slate-800 mb-16 animate-fade-in">
      Bloggerlar Ne Diyor?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Ali Başar",
          role: "Teknoloji Yazarı",
          comment: "Blogger ile içerik üretmek çok keyifli. Kullanımı kolay ve profesyonel görünümlü bloglar oluşturabiliyorum.",
          profileUrl: "/profile/alibasar",
          avatar: "A",
          stats: "50K+ Okuyucu"
        },
        {
          name: "Ayşe Yılmaz",
          role: "Seyahat Blogger'ı",
          comment: "SEO özellikleri sayesinde yazılarım arama motorlarında üst sıralarda çıkıyor. Trafik artışı inanılmaz!",
          profileUrl: "/profile/ayseyilmaz",
          avatar: "A",
          stats: "100+ Ülke"
        },
        {
          name: "Mehmet Demir",
          role: "Yemek Blogger'ı",
          comment: "Analitik raporlar sayesinde hangi içeriklerin daha çok ilgi gördüğünü anlayabiliyorum. Harika bir platform!",
          profileUrl: "/profile/mehmetdemir",
          avatar: "M",
          stats: "1M+ Görüntülenme"
        }
      ].map((testimonial, index) => (
        <Link 
          href={testimonial.profileUrl}
          key={index} 
          className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-violet-50 border border-slate-100 hover:border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in hover-scale"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-sm px-4 py-1 rounded-bl-xl rounded-tr-xl">
            {testimonial.stats}
          </div>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-2xl text-white font-bold shadow-lg">
              {testimonial.avatar}
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                {testimonial.name}
              </h4>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-2 -top-2 text-4xl text-indigo-200 opacity-50">"</div>
            <p className="text-slate-600 leading-relaxed pl-4">
              {testimonial.comment}
            </p>
            <div className="absolute -right-2 bottom-0 text-4xl text-indigo-200 opacity-50">"</div>
          </div>
          <div className="mt-6 flex justify-end">
            <span className="text-sm text-indigo-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Profili Görüntüle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

    {/* CTA Section */}
<section className="py-32 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>

  <div className="container mx-auto px-8 relative">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-5xl font-bold mb-8 animate-fade-in">
        Hayalinizdeki Blogu<br />
        <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          Bugün Oluşturun
        </span>
      </h3>
      <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed" 
         style={{ animationDelay: '200ms' }}>
        Fikirlerinizi paylaşmak için daha fazla beklemeyin. Ücretsiz başlayın, 
        premium özelliklerle büyüyün. İlk 30 gün tamamen ücretsiz.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link 
          href="/register" 
          className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 animate-pulse-slow hover-scale"
        >
          Ücretsiz Hesap Oluştur
        </Link>
        <Link 
          href="/demo" 
          className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/70 text-white rounded-full font-medium transition-all duration-300 animate-fade-in hover-scale"
        >
          Demo İncele
        </Link>
      </div>
      <p className="mt-8 text-sm text-indigo-200 animate-fade-in" style={{ animationDelay: '400ms' }}>
        ⚡️ 2 dakikada hesabınızı oluşturun, hemen yazmaya başlayın
      </p>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
  <div className="container mx-auto px-8">
    {/* Üst Kısım - Logo ve Newsletter */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-800">
      {/* Logo ve Açıklama */}
      <div className="space-y-6">
        <Link href="/" className="flex items-center group hover-scale w-fit">
          <Image 
            src={logo} 
            alt="Blogger" 
            className="w-12 h-12 rounded-xl brightness-200" 
          />
          <h1 className="ml-4 text-3xl font-bold text-white">
            Blogger
          </h1>
        </Link>
        <p className="text-slate-400 max-w-md leading-relaxed">
          Profesyonel blog platformu ile hikayelerinizi paylaşın, 
          topluluğunuzu büyütün ve içeriklerinizi monetize edin.
        </p>
        <div className="flex gap-4">
          {[
            { icon: "🌐", label: "Twitter", href: "https://twitter.com" },
            { icon: "📸", label: "Instagram", href: "https://instagram.com" },
            { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
            { icon: "📱", label: "Facebook", href: "https://facebook.com" }
          ].map((social, index) => (
            <Link 
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 hover-scale"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <span className="text-lg">{social.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="lg:pl-12">
        <h4 className="text-xl font-semibold text-white mb-6">
          Blog Dünyasından Haberdar Olun
        </h4>
        <p className="text-slate-400 mb-6">
          Haftalık blog yazma ipuçları, SEO tavsiyeleri ve özel teklifler için abone olun.
        </p>
        <form className="flex gap-3">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="flex-1 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors hover-scale"
          >
            Abone Ol
          </button>
        </form>
      </div>
    </div>

    {/* Ana Linkler */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
      {[
        {
          title: "Ürün",
          links: [
            { text: "Özellikler", href: "/features" },
            { text: "Fiyatlandırma", href: "/pricing" },
            { text: "Entegrasyonlar", href: "/integrations" },
            { text: "SSS", href: "/faq" },
            { text: "API", href: "/api" }
          ]
        },
        {
          title: "Şirket",
          links: [
            { text: "Hakkımızda", href: "/about" },
            { text: "Blog", href: "/blog" },
            { text: "Kariyer", href: "/careers" },
            { text: "Basın", href: "/press" },
            { text: "Partnerlik", href: "/partners" }
          ]
        },
        {
          title: "Kaynaklar",
          links: [
            { text: "Dokümantasyon", href: "/docs" },
            { text: "Yardım Merkezi", href: "/help" },
            { text: "Topluluk", href: "/community" },
            { text: "Başarı Hikayeleri", href: "/case-studies" },
            { text: "Webinarlar", href: "/webinars" }
          ]
        },
        {
          title: "Destek",
          links: [
            { text: "Yardım Merkezi", href: "/help" },
            { text: "Durum Sayfası", href: "/status" },
            { text: "Güvenlik", href: "/security" },
            { text: "Teknik Destek", href: "/support" },
            { text: "İletişim", href: "/contact" }
          ]
        }
      ].map((section, index) => (
        <div 
          key={index} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h4 className="text-white font-semibold mb-6 text-lg">
            {section.title}
          </h4>
          <ul className="space-y-4">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link 
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors hover-scale inline-block"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Alt Bilgi */}
    <div className="pt-8 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-500">
          <span>&copy; 2024 Blogger. Tüm hakları saklıdır.</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Gizlilik Politikası
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Kullanım Şartları
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Çerez Politikası
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>🇹🇷</span>
          <select className="bg-transparent border-none focus:ring-0 cursor-pointer hover:text-white transition-colors">
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}