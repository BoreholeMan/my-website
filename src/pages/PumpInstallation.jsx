import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'
import pumpStyles from './PumpInstallation.module.css'

export default function PumpInstallation() {
  return (
    <div>
      <PageHero
        tag="Services — Pump Installation"
        title="The Right Pump, Installed the Right Way"
        subtitle="No two boreholes are the same. Every pump is individually sized using your borehole's actual flow data."
      />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h2>No Two Boreholes Are the Same</h2>
          <p>Every borehole has its own depth, flow rate and water characteristics. Fitting the wrong pump — or a pump that has not been properly matched to the borehole's specifications — will result in it failing well before it should. We size every pump individually using the flow data collected during the development stage.</p>

          <h2>How We Spec Your Pump</h2>
          <p>Using the borehole's flow rate and depth, we work off the pump's performance curve to find the correct match. A pump that is oversized or undersized for the hole will wear out quickly and waste energy. Getting this right at installation is what gives your pump a long, reliable service life.</p>

          <h2>The Brands We Use</h2>
          <p>We exclusively use Italian-manufactured pumps — well regarded for their quality and longevity in borehole applications. Our entry-level range is already Italian-made, and for clients wanting top-of-the-range performance, we can supply premium options to match.</p>

          <h2>Installation Materials</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>HDPE Riser Pipe</h3>
              <p>Durable, flexible and safe for drinking water — the correct pipe for borehole applications.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>2.5mm Submersible Cable</h3>
              <p>Minimum specification cable rated for permanent submersion — no shortcuts on this.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Safety Rope</h3>
              <p>A strong safety rope is always attached to the pump. When it is time for a service, the pump comes out safely every time.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Compression Fittings</h3>
              <p>Secure, leak-free connections throughout — no push-fit shortcuts underground.</p>
            </div>
          </div>

          <div className={styles.highlight}>
            <h3>Why Materials Matter</h3>
            <p>We only use quality materials throughout. This matters when the pump needs to come out for servicing — done right, it always comes out safely. Cheap materials underground make future maintenance difficult or impossible without damage.</p>
          </div>
        </div>
      </section>

      <section className={pumpStyles.media}>
        <div className={pumpStyles.mediaInner}>
          <h2 className={pumpStyles.mediaTitle}>See Our Work</h2>
          <div className={pumpStyles.mediaGrid}>
            <div className={pumpStyles.mediaItem}>
              <img src="/Image8.jpg" alt="Pump installation" />
            </div>
            <div className={pumpStyles.mediaItem}>
              <video controls playsInline>
                <source src="/Video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Need a pump installed?</h3>
          <p>We will assess your borehole and size the right pump for your system.</p>
          <Link to="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </div>
  )
}
