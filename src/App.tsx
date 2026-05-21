import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Properties from "./pages/Properties"
import Navbar from "./components/Navbar"
import Blogs from "./pages/blog"

export default function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/blogs"
          element={<Blogs />}
        />

      </Routes>

    </div>
  )
}