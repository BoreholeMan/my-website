import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

const steps = [
  {
    num: 'Step 1',
    title: 'Water Sample Taken at Installation',
    body: 'Once your borehole is drilled and developed, we take a water sample and send it to an accredited laboratory for full analysis.',
  },
  {
    num: 'Step 2',
    title: 'Results in 2–3 Weeks',
    body: 'Lab results typically take 2 to 3 weeks. The results tell us exactly what\'s in the water — minerals, iron content, bacteria, pH and more.',
  },
  {
    num: 'Step 3',
    title: 'Treatment System Designed for Your Results',
    body: 'Once we have the results, we design a filtration and treatment system specific to your borehole. We can\'t quote on treatment before the results are in — every borehole is different and a generic system may not be adequate or may be unnecessary.',
  },
]

export default function WaterQuality() {
  return (
    <div>
      <PageHero
        tag="Services — Water Quality Testing"
        title="Know What's in Your Water"
        subtitle="Every borehole produces different water. Before using it in your home, it's essential to have it tested."
      />

      <section className={styles.steps}>
        <div className={styles.inner}>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.8, marginBottom: 48, maxWidth: 680 }}>
            Borehole water is naturally occurring and varies significantly from one location to the next. Before using your borehole water inside your home for drinking, cooking or washing, it's essential to have it tested so we can design the right treatment system for your specific results.
          </p>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{s.num}</span>
              </div>
              <div className={styles.stepRight}>
                <h2 className={styles.stepTitle}>{s.title}</h2>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>When Is Testing Required?</h2>
          <p className={styles.sectionSub}>For any water going into your home, we always recommend a full lab analysis first.</p>
          <div className={styles.matGrid}>
            <div className={styles.matCard}>
              <h3>Always Test For</h3>
              <p>Drinking water, cooking, washing dishes or bathing. Any water used inside the home must be tested and treated correctly for your safety.</p>
            </div>
            <div className={styles.matCard}>
              <h3>Testing Not Always Required For</h3>
              <p>Garden irrigation or topping up a pool. For outdoor use only, testing isn't always necessary — though we still recommend it for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Get your water tested</h3>
          <p>We take the sample at installation and manage the whole process.</p>
          <Link to="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </div>
  )
}
