import {
  Play,
  MapPin,
  Home,
  DollarSign,
  Search
} from "lucide-react"
import ContactPage from "./Contact"

export default function HomeHero() {

  return (

    <div className="bg-[#F9F9F9] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col">

        {/* Main Hero */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">

          <div className="grid lg:grid-cols-2 gap-8 items-center w-full py-6">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center text-center lg:text-left">

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight tracking-tight text-black">

                Gateway to <br />

                <span className="font-extrabold">
                  Dream Homes
                </span>

              </h1>

              <p className="mt-6 text-gray-500 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">

                Discover a curated collection of dream homes
                at your fingertips, simplified and personalized.

              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5">

                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition active:scale-95 shadow-lg">

                  Discover Now

                </button>

                <button className="flex items-center gap-3 text-black font-semibold group">

                  <span className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition">

                    <Play
                      size={16}
                      fill="currentColor"
                      className="ml-0.5"
                    />

                  </span>

                  Watch Demo

                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex items-center justify-center w-full">

  <img
    src="/house1.png"
    alt="Dream Home"
    loading="eager"
    className="
      w-full
      max-w-175
      lg:max-w-212.5
      h-auto
      object-contain
      select-none
      pointer-events-none
    "
  />

</div>

          </div>

        </main>

        {/* SEARCH BAR */}
        <div className="w-full px-6 md:px-10 pb-6">

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 lg:p-5">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition">

                <MapPin className="text-gray-400" size={22} />

                <div className="flex flex-col">

                  <span className="text-xs uppercase tracking-wider text-gray-400">

                    Location

                  </span>

                  <select className="bg-transparent outline-none text-sm font-semibold">

                    <option>Los Angeles</option>
                    <option>New York</option>
                    <option>Miami</option>

                  </select>

                </div>

              </div>

              {/* Property */}
              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition">

                <Home className="text-gray-400" size={22} />

                <div className="flex flex-col">

                  <span className="text-xs uppercase tracking-wider text-gray-400">

                    Property

                  </span>

                  <select className="bg-transparent outline-none text-sm font-semibold">

                    <option>Luxury Villa</option>
                    <option>Apartment</option>
                    <option>Mansion</option>

                  </select>

                </div>

              </div>

              {/* Price */}
              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition">

                <DollarSign className="text-gray-400" size={22} />

                <div className="flex flex-col">

                  <span className="text-xs uppercase tracking-wider text-gray-400">

                    Price

                  </span>

                  <select className="bg-transparent outline-none text-sm font-semibold">

                    <option>$6k - $12k</option>
                    <option>$12k - $25k</option>
                    <option>$25k+</option>

                  </select>

                </div>

              </div>

              {/* Search Button */}
              <button className="w-full h-14 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-gray-800 transition active:scale-95">

                <Search size={22} />

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section
  id="about"
  className="min-h-screen scroll-mt-24"
>

  <ContactPage />

</section>

    </div>
  )
}