import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo-blog.png';

export default function BlogList() {
  const blogs = [
    {
      title: "Modern Web Tasarım Trendleri",
      excerpt: "2024'ün öne çıkan web tasarım trendlerini ve kullanıcı deneyimi yaklaşımlarını inceliyoruz...",
      author: "Ali Başar",
      date: "15 Mart 2024",
      category: "Tasarım",
      readTime: "5 dk",
      image: "https://picsum.photos/800/400"
    },
    // Daha fazla blog eklenebilir
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
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
              <div className="relative">
                <input
                  type="search"
                  placeholder="Blog ara..."
                  className="w-64 px-4 py-2 rounded-full border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                />
              </div>
              <Link 
                href="/write" 
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all hover-scale"
              >
                Yazı Yaz
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Blog List */}
      <main className="container mx-auto px-8 py-12">
        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 animate-fade-in">
          {["Tümü", "Teknoloji", "Tasarım", "Yazılım", "Pazarlama", "Yaşam"].map((category, index) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all whitespace-nowrap hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                    {blog.category}
                  </span>
                  <span className="text-sm text-slate-500">{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-slate-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      {blog.author[0]}
                    </div>
                    <span className="text-sm text-slate-600">{blog.author}</span>
                  </div>
                  <span className="text-sm text-slate-500">{blog.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}