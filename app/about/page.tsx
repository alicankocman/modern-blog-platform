import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo-blog.png';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group hover-scale">
              <Image 
                src={logo} 
                alt="Blogger" 
                className="w-8 h-8 rounded-xl shadow-lg group-hover:shadow-indigo-200 transition-all duration-300" 
              />
              <span className="ml-3 text-xl font-bold text-slate-800">Blogger</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/login" className="text-slate-600 hover:text-indigo-600 transition-colors hover-scale">
                Giriş Yap
              </Link>
              <Link 
                href="/register" 
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all hover-scale"
              >
                Ücretsiz Başla
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Blogger Hakkında
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed animate-fade-in">
              2024 yılında kurulan Blogger, içerik üreticilerinin fikirlerini özgürce paylaşabilecekleri
              modern bir platform sunmayı amaçlamaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                İçerik üreticilerine en iyi yazım deneyimini sunarak, bilgi paylaşımını
                kolaylaştırmak ve global bir öğrenme topluluğu oluşturmak.
              </p>
              <ul className="space-y-4">
                {[
                  "Kullanıcı dostu arayüz",
                  "Güçlü SEO araçları",
                  "Detaylı analitikler",
                  "7/24 destek"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <span className="mr-3 text-indigo-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 animate-slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl">
                <div className="p-8 h-full flex items-center justify-center">
                  <p className="text-lg text-slate-600 italic">
                    "Bilgi paylaştıkça çoğalır, tecrübeler aktarıldıkça değerlenir."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yenilikçilik",
                description: "Sürekli gelişen teknoloji ve trendleri takip ederek platformumuzu güncel tutuyoruz.",
                icon: "💡"
              },
              {
                title: "Güvenilirlik",
                description: "Kullanıcı verilerinin güvenliği ve içerik kalitesi bizim için önceliklidir.",
                icon: "🛡️"
              },
              {
                title: "Topluluk",
                description: "Bilgi paylaşımını destekleyen, etkileşimi yüksek bir topluluk oluşturuyoruz.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl shadow-slate-200 animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alican KOÇMAN",
                role: "Kurucu & CEO",
                linkedIn: "https://www.linkedin.com/in/alican-ko%C3%A7man-3a57a41b7/"
              },
              {
                name: "Zeynep Kaya",
                role: "Ürün Müdürü",
                linkedIn: "#"
              },
              {
                name: "Mehmet Demir",
                role: "Baş Geliştirici",
                linkedIn: "#"
              }
            ].map((member, index) => (
              <Link 
                key={index}
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 text-center shadow-xl shadow-slate-200 animate-scale-in hover-scale group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-indigo-600 group-hover:shadow-xl transition-all">
                  {member.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-600">
                  {member.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            Blogger Ailesine Katılın
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto animate-fade-in">
            Siz de hikayelerinizi paylaşmaya başlayın.
          </p>
          <Link 
            href="/register"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 animate-pulse-slow hover-scale"
          >
            Ücretsiz Hesap Oluştur
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-8">
          <div className="flex justify-center items-center mb-8">
            <Link href="/" className="flex items-center group hover-scale">
              <Image 
                src={logo} 
                alt="Blogger" 
                className="w-8 h-8 rounded-xl brightness-200" 
              />
              <span className="ml-3 text-xl font-bold text-white">Blogger</span>
            </Link>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            {[
              { text: "Gizlilik Politikası", href: "/privacy" },
              { text: "Kullanım Şartları", href: "/terms" },
              { text: "İletişim", href: "/contact" }
            ].map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors hover-scale"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <p className="text-center">
            &copy; 2024 Blogger. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}