import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import styles from './Home.module.css'

const reviews = [
  {
    text: "We recently had a borehole installed by Dusty and his team. Such a great, friendly team who did a great job, despite having to drill in extremely hot weather conditions. We highly recommend them if anyone is thinking of a borehole. Don't hesitate, give Dusty a call.",
    name: "Mark & Sandy",
    location: "Westlake",
  },
  {
    text: "I honestly cannot sing the praises of Dusty and his team more highly. Instead of just doing the bare minimum, he and his team came to assess our tipping water tank and flagged a couple of other serious issues. It is so amazing to know that it is a job well done. You guys are amazing!",
    name: "Lindsay Campbell",
    location: "Cape Town",
  },
  {
    text: "Dusty and his team were amazing to work with! They were responsive, considerate and communicative. Would highly recommend.",
    name: "Kirsty Nortje",
    location: "Cape Town",
  },
]

const services = [
  {
    icon: '⛏',
    title: 'Borehole Drilling',
    desc: 'Professional drilling using Rotary Mud and Air Percussion techniques. Full site setup to handover.',
    path: '/services/borehole-drilling',
  },
  {
    icon: '⚙️',
    title: 'Pump Installation',
    desc: 'Italian-manufactured submersible pumps, individually sized to your borehole\'s exact flow and depth.',
    path: '/services/pump-installation',
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    desc: 'Annual servicing to pull, inspect, and clean your pump — protecting your investment for the long term.',
    path: '/services/maintenance',
  },
  {
    icon: '🪣',
    title: 'Water Storage System',
    desc: 'Complete system design: storage tanks, booster pumps, automation and water treatment in one package.',
    path: '/services/water-storage',
  },
  {
    icon: '🧪',
    title: 'Water Quality Testing',
    desc: 'Accredited lab analysis so we can design the right treatment system specifically for your borehole.',
    path: '/services/water-quality',
  },
  {
    icon: '🌿',
    title: 'Irrigation',
    desc: 'Custom irrigation systems designed around your garden layout, plant types and water requirements.',
    path: '/services/irrigation',
  },
]

function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Cape Town · Est. 2005</span>
          <h1 className={styles.heroTitle}>
            We do the<br />
            <em>"hole"</em> job.
          </h1>
          <p className={styles.heroSub}>
            Professional borehole drilling, pump installation and complete water solutions across the Southern Suburbs of Cape Town.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/contact" className={styles.ctaPrimary}>Get a Quote</Link>
            <Link to="/services" className={styles.ctaSecondary}>Our Services</Link>
          </div>
        </div>
        <div className={styles.heroOverlay} />
      </section>

      <section className={styles.stats}>
        <div className={styles.statsInner}>
          <div className={styles.stat}>
            <span className={styles.statNum}>300+</span>
            <span className={styles.statLabel}>Boreholes Drilled</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>21+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>2005</span>
            <span className={styles.statLabel}>Founded in Cape Town</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>6</span>
            <span className={styles.statLabel}>Specialist Services</span>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={`${styles.sectionHead} reveal`}>
            <span className={styles.sectionTag}>What We Do</span>
            <h2 className={styles.sectionTitle}>Complete Water Solutions</h2>
            <p className={styles.sectionSub}>From the first drill to full system installation — one company, one point of contact.</p>
          </div>
          <div className={styles.grid}>
            {services.map((s, i) => (
              <Link to={s.path} key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className={styles.cardIcon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <span className={styles.cardLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={`${styles.whyText} reveal`}>
  <span className={styles.sectionTag}>Why Borehole Man</span>
  <h2 className={styles.sectionTitle}>Cape Town's Borehole Specialists</h2>
  <p>Water restrictions, droughts and rising municipal costs have made borehole water a smart, long-term investment for Cape Town homeowners. But a borehole is only as good as the people who drill and install it.</p>
  <p>With over 21 years of experience in the Southern Suburbs, we've seen what happens when corners are cut — pumps that fail early, boreholes that run dry, systems cobbled together by multiple contractors. We do things differently.</p>
  <p>Every borehole we drill is developed properly. Every pump is sized to the actual flow data. Every installation uses quality materials. And we're still here 21 years later to service what we install.</p>
  <Link to="/about" className={styles.ctaPrimary}>Read Our Story</Link>
</div>
          <div className={`${styles.whyStats} reveal`}>
  <div className={styles.whyStat}>
    <div className={styles.whyStatNum}>300+</div>
    <div className={styles.whyStatLabel}>Boreholes drilled across Cape Town's Southern Suburbs</div>
  </div>
  <div className={styles.whyStat}>
    <div className={styles.whyStatNum}>21+</div>
    <div className={styles.whyStatLabel}>Years serving the same local community</div>
  </div>
  <div className={styles.whyStat}>
    <div className={styles.whyStatNum}>1</div>
    <div className={styles.whyStatLabel}>Company for drilling, installation, maintenance and irrigation</div>
  </div>
</div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className="reveal">Ready to secure your water supply?</h2>
          <p className="reveal">Call us or send an email — we'll advise you on the best solution for your property.</p>
          <div className={`${styles.ctaBannerBtns} reveal`}>
            <a href="tel:0822100454" className={styles.ctaPrimary}>082 210 0454</a>
            <Link to="/contact" className={styles.ctaSecondaryLight}>Send a Message</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
