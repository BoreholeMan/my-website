import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle, tag }) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}
