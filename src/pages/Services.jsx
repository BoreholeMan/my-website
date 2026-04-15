import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Borehole Drilling',
    desc: 'Full borehole drilling using Rotary Mud Drilling and Air Percussion techniques — from rig setup to handover. We drill through sand, clay and granite with the right method for each layer.',
    path: '/services/borehole-drilling',
  },
  {
    num: '02',
    title: 'Pump Installation',
    desc: 'Italian-manufactured stainless steel submersible pumps, individually sized to each borehole\'s depth and flow rate. Quality materials throughout — HDPE pipe, correct cable, safety rope.',
    path: '/services/pump-installation',
  },
  {
    num: '03',
    title: 'Borehole Maintenance',
    desc: 'Annual servicing to pull, inspect and reinstall your pump. We blow the hole clear, clean the screens, measure flow rate and check all components — protecting your investment long-term.',
    path: '/services/maintenance',
  },
  {
    num: '04',
    title: 'Water Storage System',
    desc: 'Complete system design and installation: storage tanks matched to your usage, booster pump, automated controls and water treatment. One company, one install.',
    path: '/services/water-storage',
  },
  {
    num: '05',
    title: 'Water Quality Testing',
    desc: 'Accredited laboratory analysis of your borehole water. We design a tailored filtration and treatment system based on your specific results — not a one-size-fits-all solution.',
    path: '/services/water-quality',
  },
  {
    num: '06',
    title: 'Irrigation',
    desc: 'Custom irrigation systems designed around your garden layout, plant types and zone requirements. Fully automated, integrated with your borehole and storage system.',
    path: '/services/irrigation',
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        tag="Services"
        title="Complete Water Solutions"
        subtitle="From drilling to distribution — we handle every part of your borehole and water system."
      />
      <section className={styles.list}>
        <div className={styles.inner}>
          {services.map((s) => (
            <Link to={s.path} key={s.num} className={styles.item}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.body}>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.desc}>{s.desc}</p>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
