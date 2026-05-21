import { useState } from 'react';
import { Search, ArrowUpRight, Calendar, Clock, ChevronRight } from 'lucide-react';

// Mock data structured to match elite real estate & architecture editorial content
const CATEGORIES = ["All Articles", "Interior Design", "Market Trends", "Architecture", "Luxury Lifestyle", "Buying Guides"];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of Minimalist Architecture in Coastal Luxury Homes",
    excerpt: "Explore how modern architects are balancing raw concrete structures with massive glass facades to blend indoor living seamlessly with the Pacific horizon.",
    category: "Architecture",
    date: "May 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "10 Timeless Interior Design Trends Dominating This Year",
    excerpt: "From organic textures to hidden smart home integrations, discover how high-end spaces are updating luxury definitions.",
    category: "Interior Design",
    date: "May 14, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Understanding the Premium Housing Market Forecast",
    excerpt: "An analytical breakdown of urban real estate shifts, premium investment corridors, and interest rate impacts.",
    category: "Market Trends",
    date: "May 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Behind the Scenes: Transforming a 1920s Mansion Into a Modern Oasis",
    excerpt: "A cinematic documentation of structural preservation meets avant-garde interior architecture.",
    category: "Architecture",
    date: "April 29, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 5,
    title: "The Art of Lighting: Elevating Spaces with Ambient Architecture",
    excerpt: "How carefully calculated natural light trajectories and hidden fixtures redefine luxury aesthetics after dusk.",
    category: "Interior Design",
    date: "April 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 6,
    title: "A Masterclass in Crafting Professional Kitchen Layouts",
    excerpt: "Balancing commercial-grade utility with clean, handle-less luxury cabinetry designs.",
    category: "Luxury Lifestyle",
    date: "April 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== "All Articles");

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased text-black selection:bg-black selection:text-white">
      
      {/* --- HEADER BLOCK --- */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-3">
              Perspectives & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              The Journal
            </h1>
          </div>
          
          {/* Minimalist Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-11 pr-4 py-3 rounded-full text-sm border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>
        </div>
      </header>

      {/* --- CATEGORY PILLS FILTER --- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-3 whitespace-nowrap pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-black text-white shadow-sm' 
                  : 'bg-white text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* --- MAIN BLOG CONTENT GRID --- */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* 1. FEATURED ARTICLE HERO (Only shows when search/filter allows) */}
        {activeCategory === "All Articles" && searchQuery === "" && featuredPost && (
          <article className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.02)] border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
            <div className="lg:col-span-7 overflow-hidden h-75 sm:h-100 lg:h-120">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 mb-4">
                  <span className="bg-black text-white px-2.5 py-1 rounded text-[10px] tracking-wide uppercase font-bold">Featured</span>
                  <span>•</span>
                  <span>{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-gray-800 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={13} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {featuredPost.readTime}</span>
                </div>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 2. THE EDITORIAL RECENT GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)]"
              >
                {/* Image Wrap */}
                <div className="overflow-hidden aspect-16/10 bg-gray-100 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Meta & Content Content */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] font-medium text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black leading-snug group-hover:text-gray-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-gray-500 text-xs sm:text-sm font-normal line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between group/link cursor-pointer">
                    <span className="text-xs font-bold tracking-wide text-black flex items-center gap-1">
                      Read Article 
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium text-sm">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory("All Articles"); setSearchQuery(""); }}
              className="mt-4 text-xs font-bold underline text-black"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>
    </div>
  );
}