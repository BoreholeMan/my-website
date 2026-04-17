import PageHero from '../components/PageHero'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div>
      <PageHero
        tag="Contact"
        title="Get in Touch"
        subtitle="Call us, send an email, or use the form below. We'll get back to you promptly."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.details}>
            <h2>Contact Details</h2>
            <p className={styles.intro}>Get in touch for a site assessment and no-obligation quote.</p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <div className={styles.contactLabel}>Office</div>
                  <a href="tel:0822100454" className={styles.contactValue}>082 210 0454</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <div className={styles.contactLabel}>Dusty (Director)</div>
                  <a href="tel:0798459030" className={styles.contactValue}>079 845 9030</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <a href="mailto:sales@boreholeman.co.za" className={styles.contactValue}>sales@boreholeman.co.za</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>Area Served</div>
                  <div className={styles.contactValue}>Cape Town</div>
                </div>
              </div>
            </div>

          <div className={styles.formWrap}>
            <h2>Send a Message</h2>
            <form
              className={styles.form}
              onSubmit={e => {
                e.preventDefault()
                const data = new FormData(e.target)
                const mailto = `mailto:sales@boreholeman.co.za?subject=Enquiry from ${encodeURIComponent(data.get('name'))}&body=${encodeURIComponent(
                  `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
                )}`
                window.location.href = mailto
              }}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your Name *</label>
                  <input name="name" type="text" required placeholder="John Smith" />
                </div>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input name="phone" type="tel" placeholder="082 000 0000" />
                </div>
              </div>
              <div className={styles.field}>
                <label>Email Address *</label>
                <input name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className={styles.field}>
                <label>Service Interested In</label>
                <select name="service">
                  <option value="">— Select a service —</option>
                  <option>Borehole Drilling</option>
                  <option>Pump Installation</option>
                  <option>Maintenance / Servicing</option>
                  <option>Water Storage System</option>
                  <option>Water Quality Testing</option>
                  <option>Irrigation</option>
                  <option>Not sure / General enquiry</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Message *</label>
                <textarea name="message" required rows={5} placeholder="Tell us about your property and what you need…"></textarea>
              </div>
              <button type="submit" className={styles.submit}>Send Message</button>
              <p className={styles.note}>This will open your email client. You can also email us directly at sales@boreholeman.co.za</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
