import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const services = [
  { label: 'Borehole Drilling', path: '/services/borehole-drilling' },
  { label: 'Pump Installation', path: '/services/pump-installation' },
  { label: 'Maintenance', path: '/services/maintenance' },
  { label: 'Water Storage System', path: '/services/water-storage' },
  { label: 'Water Quality Testing', path: '/services/water-quality' },
  { label: 'Irrigation', path: '/services/irrigation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  const waStyle = {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    width: '56px',
    height: '56px',
    background: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    zIndex: '999',
    color: 'white',
    fontWeight: '800',
    fontSize: '0.75rem',
    textDecoration: 'none',
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled || !isHome ? styles.solid : ''} ${menuOpen ? styles.solid : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img
              src="/logo.png"
              alt="Borehole Man"
              className={styles.logoImg}
              style={{ filter: scrolled || !isHome || menuOpen ? 'none' : 'brightness(0) invert(1)' }}
            />
          </Link>

          <div className={styles.links}>
            <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
            <Link to="/about" className={`${styles.link} ${location.pathname === '/about' ? styles.active : ''}`}>About</Link>

            <div className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to="/services" className={`${styles.link} ${location.pathname.startsWith('/services') ? styles.active : ''}`}>
                Services <span className={styles.caret}>v</span>
              </Link>
              {servicesOpen && (
                <div className={styles.dropMenu}>
                  {services.map(s => (
                    <Link key={s.path} to={s.path} className={styles.dropItem}>{s.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className={`${styles.link} ${location.pathname === '/gallery' ? styles.active : ''}`}>Gallery</Link>
            <Link to="/contact" className={`${styles.link} ${location.pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
            <a href="https://wa.me/27822100454" target="_blank" rel="noreferrer" style={waStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: '32px', height: '32px' }}
        />
      </a>

          <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={menuOpen ? styles.line1open : styles.line1}></span>
            <span className={menuOpen ? styles.line2open : styles.line2}></span>
            <span className={menuOpen ? styles.line3open : styles.line3}></span>
          </button>
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link to="/" className={styles.mobileLink}>Home</Link>
            <Link to="/about" className={styles.mobileLink}>About</Link>
            <Link to="/services" className={styles.mobileLink}>All Services</Link>
            {services.map(s => (
              <Link key={s.path} to={s.path} className={styles.mobileSub}>{s.label}</Link>
            ))}
            <Link to="/gallery" className={styles.mobileLink}>Gallery</Link>
            <Link to="/contact" className={styles.mobileLink}>Contact</Link>
            <a href="https://wa.me/27822100454" target="_blank" rel="noreferrer" className={styles.mobileCta}>WhatsApp Us</a>
          </div>
        )}
      </nav>

      <a href="https://wa.me/27822100454" target="_blank" rel="noreferrer" style={waStyle}>
        WA
      </a>
    </>
  )
}
