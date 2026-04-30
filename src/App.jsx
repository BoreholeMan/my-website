import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BoreholeDrilling from './pages/BoreholeDrilling'
import PumpInstallation from './pages/PumpInstallation'
import Maintenance from './pages/Maintenance'
import WaterStorage from './pages/WaterStorage'
import WaterQuality from './pages/WaterQuality'
import Irrigation from './pages/Irrigation'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-enter">{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/services/borehole-drilling" element={<Layout><BoreholeDrilling /></Layout>} />
        <Route path="/services/pump-installation" element={<Layout><PumpInstallation /></Layout>} />
        <Route path="/services/maintenance" element={<Layout><Maintenance /></Layout>} />
        <Route path="/services/water-storage" element={<Layout><WaterStorage /></Layout>} />
        <Route path="/services/water-quality" element={<Layout><WaterQuality /></Layout>} />
        <Route path="/services/irrigation" element={<Layout><Irrigation /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  )
}
