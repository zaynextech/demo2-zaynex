import { ArrowUpRight, ShieldCheck, Sparkles, Compass, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased text-black selection:bg-black selection:text-white">
      
      {/* --- HERO / INTRODUCTION BLOCK --- */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-3">
              Our Legacy
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Redefining Modern <br />Living Spaces
            </h1>
          </div>
          <div className="lg:col-span-7 lg:pt-7">
            <p className="text-gray-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              At Dream Homes, we believe that finding a home is more than a transaction—it is an architectural alignment. We curate exceptional spaces where modern engineering meets bespoke interior artistry, establishing a seamless interface for your lifestyle.
            </p>
          </div>
        </div>
      </header>

      {/* --- BRAND STORY & IMAGE ASYMMETRY --- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Structural Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/5 sm:aspect-16/11 lg:aspect-4/5 rounded-3xl overflow-hidden bg-gray-200 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" 
                alt="Architectural Luxury Interior Design" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Absolute Badging */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 hidden sm:block max-w-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Our Standard</p>
              <p className="text-sm font-semibold text-black leading-snug">Every listing is verified by structural and design specialists.</p>
            </div>
          </div>

          {/* Text Grid details */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Built on Transparency, Engineered for Excellence.
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              Founded by real estate visionaries and cybersecurity-minded developers, we solve the historical friction of property curation. No infinite scrolling, no deceptive imagery. Just direct pipelines to premium properties optimized for elite tastes.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-black">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Absolute Security</h4>
                  <p className="text-xs text-gray-400 mt-1">Role-based authentication protocols secure every transactional query.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-black">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Curated Portfolios</h4>
                  <p className="text-xs text-gray-400 mt-1">We select only the upper tier of luxury spaces and architectural triumphs.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-black">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Global Reach</h4>
                  <p className="text-xs text-gray-400 mt-1">Bridges the finest design ecosystems across premium locations worldwide.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center text-black">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Award-Winning UI</h4>
                  <p className="text-xs text-gray-400 mt-1">Designed for high scannability, ultra-clean navigation, and zero cognitive load.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS OVERLAY / METRIC STRIP --- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center relative overflow-hidden">
          {/* Subtle background glow element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">$4.2B+</p>
            <p className="text-xs md:text-sm font-medium text-gray-400 mt-2 tracking-wide uppercase">Volume Transacted</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">12k+</p>
            <p className="text-xs md:text-sm font-medium text-gray-400 mt-2 tracking-wide uppercase">Dream Homes Found</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">99.4%</p>
            <p className="text-xs md:text-sm font-medium text-gray-400 mt-2 tracking-wide uppercase">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">15+</p>
            <p className="text-xs md:text-sm font-medium text-gray-400 mt-2 tracking-wide uppercase">Global Hub Cities</p>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to map your transition?</h3>
          <p className="text-gray-500 text-sm mt-3 mb-8 leading-relaxed">
            Connect with our consultation desk today to unlock unlisted premium properties or begin listing your architectural asset.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 group hover:bg-gray-800 transition-all duration-200 active:scale-95 shadow-md">
            Work With Us
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}