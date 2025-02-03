import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo-blog.png';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex flex-col">
      {/* Header */}
      <header className="py-6">
        <div className="container mx-auto px-8">
          <Link href="/" className="flex items-center group hover-scale w-fit">
            <Image 
              src={logo} 
              alt="Blogger" 
              className="w-8 h-8 rounded-xl shadow-lg group-hover:shadow-indigo-200 transition-all duration-300" 
            />
            <span className="ml-3 text-xl font-bold text-slate-800">Blogger</span>
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 p-8 animate-scale-in">
            <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center animate-fade-in">
              Hesabınıza Giriş Yapın
            </h1>

            <form className="space-y-6">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-200" />
                  <span className="ml-2 text-slate-600">Beni hatırla</span>
                </label>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium hover-scale">
                  Şifremi unuttum
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all animate-fade-in hover-scale"
                style={{ animationDelay: '400ms' }}
              >
                Giriş Yap
              </button>
            </form>

            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
              <p className="text-slate-600">
                Henüz hesabınız yok mu?{' '}
                <Link href="/register" className="text-indigo-600 hover:text-indigo-800 font-medium hover-scale">
                  Ücretsiz Kaydolun
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}