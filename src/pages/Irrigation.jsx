import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

const considerations = [
  { title: 'Garden Size & Layout', desc: 'Including paths, beds, lawn areas and any landscaped zones — we design around your actual garden.' },
  { title: 'Plant Types', desc: 'Lawns, flower beds, shrubs and trees all have different water requirements. Each is accounted for.' },
  { title: 'Zone Separation', desc: 'Different areas run on independent schedules so each zone gets exactly what it needs — no more, no less.' },
  { title: 'Sprinkler & Drip Selection', desc: 'The right heads for each area to avoid over- or under-watering. Pop-up sprinklers, drip lines and micro-jets where appropriate.' },
  { title: 'Timer & Automation', desc: 'Set it and forget it — with full control over frequency and duration. Seasonal adjustments made easy.' },
  { title: 'System Integration', desc: 'Everything integrates with your borehole and storage system. Water demand never exceeds your borehole\'s output.' },
]

export default function Irrigation() {
  return (
    <div>
      <PageHero
        tag="Services — Irrigation"
        title="A Custom Irrigation System for Your Garden"
        subtitle="A well-designed irrigation system delivers the right amount of water to the right areas at the right time."
      />

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h2>No Two Gardens Are the Same</h2>
          <p>A well-designed irrigation system does more than just water your garden — it delivers the right amount of water to the right areas at the right time. The lab designs every system specifically around your garden layout, plant types and watering needs.</p>

          <h2>What We Consider in the Design</h2>
          <div className={styles.infoGrid}>
            {considerations.map(c => (
              <div key={c.title} className={styles.infoCard}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.highlight}>
            <h3>Designed Within Your System's Capacity</h3>
            <p>A properly designed irrigation system also protects your borehole pump by ensuring water demand never exceeds your borehole's output. We always design within your system's capacity — never over-specifying and never leaving you short.</p>
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Design your irrigation system</h3>
          <p>We'll assess your garden and design a system to match.</p>
          <Link to="/contact" className={styles.ctaBtn}>Get a Quote</Link>
        </div>
      </div>
    </div>
  )
}
