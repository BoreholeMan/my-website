import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

const steps = [
  {
    num: 'Step 1',
    title: 'Rig Setup',
    body: `Our team arrives and sets up the drilling rig and all equipment on your property — this typically takes a full day. Where mud drilling is required, we dig a mud pit alongside the rig. This pit circulates water throughout the drilling process, which stabilises the hole and collects the debris brought to the surface.`,
  },
  {
    num: 'Step 2',
    title: 'Drilling Through the Top Layer',
    body: `In the Cape Peninsula, the ground surface consists of sand, clay and loose gravel. We use a specialist technique called Rotary Mud Drilling (RMD) — water is flushed down the hole as we drill, carrying debris back to the surface and preventing the hole from collapsing. A food-grade chemical is added to the water to help stabilise the hole walls.

If water is found at this stage, we case (line) the hole with a PVC sleeve. The lower section is precision-perforated using a specialist cutting machine, allowing water to flow in while keeping sand and clay out. We always drill a little deeper than where water is first found, to account for natural water level changes — especially during dry periods.`,
  },
  {
    num: 'Step 3',
    title: 'Drilling Through Rock',
    tag: 'If Rock Is Encountered',
    body: `If we hit hard rock before finding water — which is common in many parts of the Cape — we switch to Air Percussion Drilling (APD). A steel casing is first fitted into the soft upper section of the hole, and then a hammer drill powered by compressed air breaks through the rock. The air also carries the crushed rock pieces back up to the surface.

Water found in rock is typically very clean and clear, drawn from deep natural fissures in the formation.`,
  },
  {
    num: 'Step 4',
    title: 'Developing the Hole',
    tag: 'Critical — We Never Skip This',
    body: `Once drilling is complete, we use a compressor to blast high-pressure air down the hole. This flushes out all the drilling water and sediment, and — importantly — allows us to take an accurate flow rate reading so we can correctly specify the right pump for your borehole.

Skipping this step causes pump damage and early failure — and means we can't correctly size your pump. We never skip it.`,
    highlight: true,
  },
  {
    num: 'Step 5',
    title: 'Pump Installation and Handover',
    body: `With an accurate flow reading from Step 4, we can specify exactly the right pump for your borehole. We measure the flow rate and take a water sample for quality testing before the pump goes in.

A stainless steel submersible pump is lowered into the hole and suspended approximately 2 metres from the bottom. This gap is intentional — it allows any sediment to settle at the bottom without being drawn into the pump. The submersible cable and HDPE pipe run back to the surface and connect to a control box and regulating valve.

The borehole is finished with a manhole cover or garden box to keep foreign objects out. If it's on a lawn, we can fit a flush green fibreglass cover so it blends in completely.`,
  },
]

export default function BoreholeDrilling() {
  return (
    <div>
      <PageHero
        tag="Services — Borehole Drilling"
        title="How the Drilling Process Works"
        subtitle="Drilling a borehole is a detailed process that takes the right equipment, technique and experience. Here's exactly what happens on your property from start to finish."
      />

      <section className={styles.steps}>
        <div className={styles.inner}>
          {steps.map((step, i) => (
            <div key={i} className={`${styles.step} ${step.highlight ? styles.highlighted : ''}`}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{step.num}</span>
                {step.tag && <span className={styles.stepTag}>{step.tag}</span>}
              </div>
              <div className={styles.stepRight}>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                {step.body.split('\n\n').map((para, j) => (
                  <p key={j} className={styles.stepBody}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Quality Materials Throughout</h2>
          <p className={styles.sectionSub}>We only use quality materials — this matters when the pump needs to come out for servicing. Done right, it always comes out safely.</p>
          <div className={styles.matGrid}>
            {[
              ['HDPE Riser Pipe', 'Durable, flexible and safe for drinking water — the correct pipe for borehole applications.'],
              ['2.5mm² Submersible Cable', 'Minimum spec cable rated for permanent submersion — no shortcuts on this.'],
              ['Safety Rope', 'Always attached to the pump. When it\'s time for a service, the pump comes out safely every time.'],
              ['Compression Fittings', 'Secure, leak-free connections throughout — no push-fit shortcuts underground.'],
            ].map(([title, desc]) => (
              <div key={title} className={styles.matCard}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <div className={styles.inner}>
          <h3>Ready to drill your borehole?</h3>
          <p>Contact us for a site assessment and quote.</p>
          <Link to="/contact" className={styles.ctaBtn}>Get a Quote</Link>
        </div>
      </div>
    </div>
  )
}
