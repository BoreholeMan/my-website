import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <div>
      <PageHero
        tag="About Us"
        title="We do the hole job."
        subtitle="21+ years of professional borehole drilling in Cape Town — founded on reliability, built on reputation."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.story}>
            <h2>Our Story</h2>
            <p>Our business was founded in April 2005 by Dale Herbert during a period of severe drought and strict water restrictions in Cape Town. From the very beginning, the company focused on helping homeowners secure reliable alternative water sources through professional borehole drilling.</p>
            <p>In early 2014, Dusty joined the business and has since taken ownership, continuing to build on the strong reputation established over the years for dependable service and quality workmanship.</p>
            <p>We specialise primarily in drilling domestic boreholes across the Southern Suburbs of Cape Town, where we have successfully completed numerous projects for homeowners seeking sustainable water solutions. In addition to our local work, we have also undertaken drilling contracts internationally, including projects in Mozambique and Saudi Arabia.</p>
            <p>Dusty began his drilling career in Antarctica, where he completed a three-month contract drilling holes for safety net installations. Since then, he has continued working extensively in Cape Town, bringing years of hands-on drilling experience and technical knowledge to every project we take on.</p>
            <p>Today, we remain committed to providing reliable, professional borehole drilling services tailored to the needs of our local community.</p>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.card}>
              <div className={styles.cardNum}>2005</div>
              <div className={styles.cardLabel}>Year Founded</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNum}>300+</div>
              <div className={styles.cardLabel}>Boreholes Drilled</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNum}>21+</div>
              <div className={styles.cardLabel}>Years Experience</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNum}>3</div>
              <div className={styles.cardLabel}>Countries Operated In</div>
            </div>
            <div className={styles.callout}>
              <h3>Ready to get started?</h3>
              <p>Contact us for expert advice and a no-obligation quote for your property.</p>
              <Link to="/contact" className={styles.btn}>Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
