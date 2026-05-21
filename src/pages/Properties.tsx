import { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, SlidersHorizontal, Heart, Search, ArrowUpDown } from 'lucide-react';

const PROPERTIES_DATA = [
  {
    id: 1,
    title: "The Obsidian Minimalist Villa",
    location: "Malibu, California",
    price: 14500,
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    tag: "Exclusive",
    type: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mid-Century Modern Masterpiece",
    location: "Los Angeles, California",
    price: 8900,
    beds: 3,
    baths: 3,
    sqft: 3100,
    tag: "Trending",
    type: "Classic Apartment",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Glass Pavilion Estate",
    location: "Miami, Florida",
    price: 22000,
    beds: 5,
    baths: 6,
    sqft: 6800,
    tag: "New",
    type: "Modern Mansion",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "The Horizon Penthouse",
    location: "New York City, NY",
    price: 11500,
    beds: 2,
    baths: 2.5,
    sqft: 2400,
    tag: "Exclusive",
    type: "Classic Apartment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Monolithic Concrete Retreat",
    location: "Austin, Texas",
    price: 7200,
    beds: 3,
    baths: 2.5,
    sqft: 2950,
    tag: "Trending",
    type: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Brutalist Waterfront Mansion",
    location: "Seattle, Washington",
    price: 19500,
    beds: 6,
    baths: 7,
    sqft: 7400,
    tag: "New",
    type: "Modern Mansion",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  }
];

export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(25000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // Advanced Filtering & Sorting Logic
  const filteredProperties = PROPERTIES_DATA.filter(item => {
    const matchesType = selectedType === "All" || item.type === selectedType;
    const matchesPrice = item.price <= maxPrice;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesPrice && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "low-to-high") return a.price - b.price;
    if (sortBy === "high-to-low") return b.price - a.price;
    return 0; // default state
  });

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased text-black selection:bg-black selection:text-white">
      
      {/* --- PAGE HEADER --- */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-3">
          Curated Portfolio
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Premium Properties
          </h1>
          <p className="text-gray-500 text-sm max-w-md md:text-right">
            Displaying elite architectural spaces optimized for luxury verification standards.
          </p>
        </div>
      </header>

      {/* --- MAIN INTERACTIVE CONTROL PANEL --- */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col gap-6">
          
          {/* Top Row: Search & Basic Select Switch */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="lg:col-span-5 relative w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search city, neighborhood, or build name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F9F9F9] pl-11 pr-4 py-3 rounded-xl text-sm border border-transparent outline-none focus:bg-white focus:border-black transition-all"
              />
            </div>

            {/* Quick Type Selection */}
            <div className="lg:col-span-5 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {["All", "Luxury Villa", "Classic Apartment", "Modern Mansion"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
                    selectedType === type
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-400 border-gray-100 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="lg:col-span-2 flex items-center bg-[#F9F9F9] rounded-xl px-3 py-2.5 border border-transparent focus-within:border-black transition-all">
              <ArrowUpDown size={16} className="text-gray-400 mr-2 shrink-0" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-semibold text-black border-none w-full outline-none cursor-pointer appearance-none"
              >
                <option value="default">Default Sort</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Dynamic Filter Sliders */}
          <div className="pt-4 border-t border-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SlidersHorizontal size={16} className="text-gray-400 shrink-0" />
              <div className="flex flex-col w-full sm:w-64">
                <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                  <span>Max Budget Cap</span>
                  <span className="text-black">${maxPrice.toLocaleString()}/mo</span>
                </div>
                <input 
                  type="range"
                  min="5000"
                  max="25000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer bg-gray-200 h-1 rounded-lg appearance-none"
                />
              </div>
            </div>

            <span className="text-xs text-gray-400 font-medium">
              Found <span className="text-black font-bold">{filteredProperties.length}</span> verified spaces
            </span>
          </div>

        </div>
      </section>

      {/* --- LUXURY PROPERTY PORTFOLIO GRID --- */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div 
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.04)]"
              >
                {/* Visual Cover Wrap */}
                <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Status Tag badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
                    {property.tag}
                  </span>

                  {/* Favorite Round Button */}
                  <button 
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <Heart 
                      size={16} 
                      fill={favorites.includes(property.id) ? "currentColor" : "none"} 
                      className={favorites.includes(property.id) ? "text-red-500" : ""}
                    />
                  </button>
                </div>

                {/* Content Descriptor Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-gray-400">{property.type}</span>
                    <div className="text-right">
                      <span className="text-lg font-extrabold">${property.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-400 font-medium"> / mo</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-black leading-snug group-hover:text-gray-700 transition-colors line-clamp-1">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 font-normal">
                    <MapPin size={13} className="text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  {/* Property Structural Specs Grid Row */}
                  <div className="mt-6 pt-4 border-t border-gray-50 grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col items-center justify-center py-1 bg-[#F9F9F9] rounded-xl">
                      <BedDouble size={14} className="text-gray-400 mb-1" />
                      <span className="text-xs font-bold text-black">{property.beds} <span className="font-normal text-gray-400 text-[10px]">Beds</span></span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-1 bg-[#F9F9F9] rounded-xl">
                      <Bath size={14} className="text-gray-400 mb-1" />
                      <span className="text-xs font-bold text-black">{property.baths} <span className="font-normal text-gray-400 text-[10px]">Baths</span></span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-1 bg-[#F9F9F9] rounded-xl">
                      <Square size={12} className="text-gray-400 mb-1.5" />
                      <span className="text-xs font-bold text-black">{property.sqft.toLocaleString()} <span className="font-normal text-gray-400 text-[10px]">Sqft</span></span>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger Area */}
                <div className="px-6 pb-6 pt-0">
                  <button className="w-full bg-black text-white py-3 rounded-xl text-xs font-semibold tracking-wide hover:bg-gray-800 transition-all active:scale-[0.98]">
                    Inquire Details
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State Portfolio */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium text-sm">No properties found within these filter bounds.</p>
            <button 
              onClick={() => { setSelectedType("All"); setMaxPrice(25000); setSearchQuery(""); setSortBy("default"); }}
              className="mt-4 text-xs font-bold underline text-black"
            >
              Reset Search Parameters
            </button>
          </div>
        )}
      </main>

    </div>
  );
}