import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Borehole Man" className={styles.logo} />
          <p className={styles.tagline}>"We do the <em>hole</em> job"</p>
          <p className={styles.since}>Est. 2005 · Cape Town</p>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <Link to="/services/borehole-drilling">Borehole Drilling</Link>
          <Link to="/services/pump-installation">Pump Installation</Link>
          <Link to="/services/maintenance">Maintenance</Link>
          <Link to="/services/water-storage">Water Storage System</Link>
          <Link to="/services/water-quality">Water Quality Testing</Link>
          <Link to="/services/irrigation">Irrigation</Link>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <a href="tel:0822100454">Office: 082 210 0454</a>
          <a href="tel:0798459030">Dusty: 079 845 9030</a>
          <a href="mailto:sales@boreholeman.co.za">sales@boreholeman.co.za</a>
          <p className={styles.area}>The Block, 9 Mocke Rd, Diep River, Cape Town, 7800</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Borehole Man. All rights reserved.</p>
        <p>21+ Years Experience · Est. 2005</p>
      </div>
    </footer>
  )
}
