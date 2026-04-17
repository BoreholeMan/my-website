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
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
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
          <div className={styles.sectionHead + ' reveal'}>
            <span className={styles.sectionTag}>What We Do</span>
            <h2 className={styles.sectionTitle}>Complete Water Solutions</h2>
            <p className={styles.sectionSub}>From the first drill to full system installation — one company, one point of contact.</p>
          </div>
          <div className={styles.grid}>
            {services.map((s, i) => (
              <Link to={s.path} key={i} className={styles.card + ' reveal'} style={{ transitionDelay: i * 0.08 + 's' }}>
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
          <div className={styles.whyText + ' reveal'}>
            <span className={styles.sectionTag}>Why Borehole Man</span>
            <h2 className={styles.sectionTitle}>Cape Town's Borehole Specialists</h2>
            <p>Water restrictions, droughts and rising municipal costs have made borehole water a smart, long-term investment for Cape Town homeowners. But a borehole is only as good as the people who drill and install it.</p>
            <p>With over 21 years of experience in the Southern Suburbs, we've seen what happens when corners are cut — pumps that fail early, boreholes that run dry, systems cobbled together by multiple contractors. We do things differently.</p>
            <p>Every borehole we drill is developed properly. Every pump is sized to the actual flow data. Every installation uses quality materials. And we're still here 21 years later to service what we install.</p>
            <Link to="/about" className={styles.ctaPrimary}>Read Our Story</Link>
          </div>
          <div className={styles.whyStats + ' reveal'}>
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

      <section className={styles.reviews}>
        <div className={styles.reviewsInner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>What Clients Say</span>
            <h2 className={styles.sectionTitle}>Trusted by Cape Town Homeowners</h2>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewText}>"{r.text}"</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.reviewName}>{r.name}</span>
                  <span className={styles.reviewLocation}>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className="reveal">Ready to secure your water supply?</h2>
          <p className="reveal">Call us or send an email — we'll advise you on the best solution for your property.</p>
          <div className={styles.ctaBannerBtns + ' reveal'}>
            <a href="tel:0822100454" className={styles.ctaPrimary}>082 210 0454</a>
            <Link to="/contact" className={styles.ctaSecondaryLight}>Send a Message</Link>
          </div>
        </div>
      </section>

      
        href="https://wa.me/27822100454"
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappFloat}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
