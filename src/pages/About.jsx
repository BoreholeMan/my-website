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
            <p>Our business was started in April 2005 by Dale Herbert during a time when Cape Town was facing severe drought and water restrictions. From the beginning, the focus was simple — helping homeowners secure a reliable alternative water source through borehole drilling.</p>
            <p>Dusty joined the business in 2014 and later took over from his father, continuing to build on the reputation for reliable work and straightforward service that the company had already established.</p>
            <p>Most of our work is in the Southern Suburbs of Cape Town, where we've completed many domestic and commercial projects over the years. The team has also worked on drilling contracts outside South Africa, including projects in Mozambique and Saudi Arabia.</p>
            <p>Early in his career, Dusty spent three months working on a drilling contract in Antarctica installing safety net systems. Since then, he has continued working locally across Cape Town, bringing practical experience to every project we take on.</p>
            <p>Today, we remain focused on doing solid, dependable work and helping homeowners secure a reliable water supply for the long term.</p>
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

      <section className={styles.team}>
        <div className={styles.teamInner}>
          <div className={styles.teamHeader}>
            <span className={styles.teamTag}>Meet the Team</span>
            <h2 className={styles.teamTitle}>The People Behind the Work</h2>
            <p className={styles.teamIntro}>We're a second-generation borehole drilling team working across Cape Town's Southern Suburbs since 2005.</p>
          </div>

          <div className={styles.teamPhoto}>
            <div className={styles.teamPhotoPlaceholder}>
              <p>Team photo coming soon</p>
            </div>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.member}>
              <div className={styles.memberInitial}>D</div>
              <h3 className={styles.memberName}>Dusty</h3>
              <span className={styles.memberRole}>Owner & Lead Drilling Specialist</span>
              <p className={styles.memberBio}>Dusty grew up around drill rigs and has been working in the industry for over 10 years. He took over Borehole Man from his father, who started the business in 2005. Early on he worked on a three-month drilling contract in Antarctica installing safety net systems, before continuing his work locally across Cape Town.</p>
            </div>
            <div className={styles.member}>
              <div className={styles.memberInitial}>S</div>
              <h3 className={styles.memberName}>Shannon</h3>
              <span className={styles.memberRole}>Admin & Customer Support</span>
              <p className={styles.memberBio}>Shannon manages the admin and customer coordination side of the business. Working alongside Dusty, she helps keep projects organised and ensures every client is kept informed from first enquiry through to completion.</p>
            </div>
            <div className={styles.member}>
              <div className={styles.memberInitial}>F</div>
              <h3 className={styles.memberName}>Fani</h3>
              <span className={styles.memberRole}>Senior Drilling Operator</span>
              <p className={styles.memberBio}>Fani has been with Borehole Man for 11 years and is our most experienced operator, working across mud, air and rock drilling methods. He's known for staying positive on difficult sites and working through challenges until the job is done.</p>
            </div>
            <div className={styles.member}>
              <div className={styles.memberInitial}>A</div>
              <h3 className={styles.memberName}>Aaron</h3>
              <span className={styles.memberRole}>Installations & Maintenance Lead</span>
              <p className={styles.memberBio}>Aaron has been with Borehole Man for 7 years and leads installations and maintenance, specialising in fault-finding and making sure systems run reliably on site.</p>
            </div>
          </div>

          <p className={styles.teamFooter}>Local experience. Practical advice. Reliable work since 2005.</p>
        </div>
      </section>
    </div>
  )
}
