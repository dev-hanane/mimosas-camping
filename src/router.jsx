import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Community from './pages/Community'
import About from './pages/About'

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/avis" element={<Reviews />} />
        <Route path="/communaute" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}