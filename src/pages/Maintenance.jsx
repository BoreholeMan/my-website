import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'
import mainStyles from './PumpInstallation.module.css'

const checks = [
  {
    title: 'Pull & Inspect the Pump',
    desc: 'We remove the pump from the hole and inspect it for wear. This is also when we check the cable, safety rope and all fittings.',
  },
  {
    title: 'Blow the Hole Clean',
    desc: 'Using a compressor, we clear sediment that builds up at the bottom. If sediment reaches the pump level, it will cause damage — regular clearing prevents this.',
  },
  {
    title: 'Clean the Screens',
    desc: 'We use a specialised tool that blows air sideways to unblock the perforations in the PVC sleeve. Iron deposits build up over time and restrict water flow — this keeps them clear.',
  },
  {
    title: 'Check Flow Rate & Water Quality',
    desc: 'Flow can change with the seasons. We measure output and check for any unusual signs — like cloudiness or excess sediment — and advise on the best solution before reinstalling the pump.',
  },
  {
    title: 'Inspect Tanks & Pipework',
    desc: 'We check that storage tanks are clean, and inspect all pipes and fittings for leaks or deterioration.',
  },
]

export default function Maintenance() {
  return (
    <div>
      <PageHero
        tag="Services — Maintenance"
        title="Protect Your Investment"
        subtitle="Because a borehole is underground, it's easy to forget about it until something goes wrong. Annual servicing keeps your system running efficiently."
      />

      <section className={styles.steps}>
        <div className={styles.inner}>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            Out of sight — but don't let it slip out of mind. Annual servicing keeps your system running efficiently, extends the life of your equipment, and catches small problems before they become costly ones.
          </p>
          {checks.map((c, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.stepRight}>
                <h2 className={styles.stepTitle}>{c.title}</h2>
                <p className={styles.stepBody}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Recommended Frequency</h2>
          <p className={styles.sectionSub}>At least once every 12 months. If your borehole is your primary water source, we recommend not leaving it longer than that.</p>
          <div className={styles.matGrid}>
            <div className={styles.matCard}>
              <h3>Regular Servicing = Longer Equipment Life</h3>
              <p>A well-maintained pump and system will outlast a neglected one by many years. The cost of an annual service is a fraction of pump replacement.</p>
            </div>
            <div className={styles.matCard}>
              <h3>Catch Problems Early</h3>
              <p>Small issues — sediment build-up, minor wear, flow reduction — are easy to fix when caught early. Left unattended, they become expensive failures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={mainStyles.media}>
        <div className={mainStyles.mediaInner}>
          <h2 className={mainStyles.mediaTitle}>Borehole Service</h2>
          <div className={mainStyles.mediaGrid}>
            <div className={mainStyles.photoItem}>
              <img src="/Image8.jpg" alt="Pump before and after service" />
            </div>
            <div className={mainStyles.videoItem}>
              <div className={mainStyles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/d1TwmZzEJd4"
                  title="Maintenance Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={mainStyles.videoCaption}>
                <h3>Borehole Service with Roots</h3>
                <p>Watch our team carry out a full borehole service — pulling the pump, clearing roots and getting the system running cleanly again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Book your annual service</h3>
          <p>Contact us to schedule a service visit for your borehole system.</p>
          <Link to="/contact" className={styles.ctaBtn}>Book a Service</Link>
        </div>
      </div>
    </div>
  )
}
