import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-black"
          >

            Dream Homes

          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">

            <Link
              to="/about"
              className="hover:text-black transition"
            >
              About Us
            </Link>

            <Link
              to="/properties"
              className="hover:text-black transition"
            >
              Properties
            </Link>

            <Link
              to="/blogs"
              className="hover:text-black transition"
            >
              Blogs
            </Link>

          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">

            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition active:scale-95">

              Login

            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center"
          >

            {
              mobileMenu
                ? <X size={22} />
                : <Menu size={22} />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {
        mobileMenu && (

          <div className="md:hidden border-t border-gray-100 bg-white">

            <div className="flex flex-col px-6 py-6 gap-5 text-sm font-medium text-gray-700">

              <Link
                to="/about"
                onClick={() => setMobileMenu(false)}
                className="hover:text-black transition"
              >
                About Us
              </Link>

              <Link
                to="/properties"
                onClick={() => setMobileMenu(false)}
                className="hover:text-black transition"
              >
                Properties
              </Link>

              <Link
                to="/blogs"
                onClick={() => setMobileMenu(false)}
                className="hover:text-black transition"
              >
                Blogs
              </Link>

              <button className="bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">

                Login

              </button>

            </div>

          </div>

        )
      }

    </nav>
  )
}