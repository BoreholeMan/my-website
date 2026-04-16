import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function WaterStorage() {
  return (
    <div>
      <PageHero
        tag="Services — Water Storage System"
        title="A Complete Water System"
        subtitle="From the ground to your tap — the right setup makes everything simple and reliable."
      />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h2>The Right Setup</h2>
          <p>Borehole pumps are designed to fill a storage tank — not to supply a house or irrigation system directly. The correct setup is a storage tank filled by your borehole pump, with a separate booster pump to distribute water at the right pressure to where it's needed. This gives you a reliable, hassle-free system that protects both pumps and keeps water flowing consistently.</p>
          <p>We supply and install the complete system — you deal with one company, not multiple contractors.</p>

          <h2>What's Included</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Storage Tanks</h3>
              <p>Tank size is matched to your borehole's flow rate and your daily water usage. We make sure your tank is big enough to meet your needs without oversizing unnecessarily.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Booster Pump</h3>
              <p>Sized to match the demand from your household or irrigation system. The booster distributes water at the right pressure throughout your property.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Electrical & Automation</h3>
              <p>A fully automated control system manages the borehole pump and booster pump. It also protects both pumps from dry-running — one of the most common causes of pump failure.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Water Treatment</h3>
              <p>We take a water sample so we can design the right treatment system for your borehole's specific water. Every borehole is different — treatment is tailored to your results, not a one-size-fits-all solution.</p>
            </div>
          </div>

          <div className={styles.highlight}>
            <h3>One Company, One Install</h3>
            <p>We work on residential properties, large estates and commercial sites. Whatever the scale, the same attention to detail applies. You deal with one company for the whole job — no coordinating between multiple contractors.</p>
          </div>

          <h2>Irrigation Integration</h2>
          <p>If needed, we design and install an irrigation system tailored to your garden or landscaped area — with separate zones and timing for different plant types and water requirements. Everything integrates with your borehole and storage system as one complete solution.</p>
        </div>
      </section>

      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Design your water system</h3>
          <p>We'll assess your property and design the right complete solution for you.</p>
          <Link to="/contact" className={styles.ctaBtn}>Get a Quote</Link>
        </div>
      </div>
    </div>
  )
}
