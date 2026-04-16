import PageHero from '../components/PageHero'
import styles from './Gallery.module.css'

const images = [
  { src: '/Image1.png', caption: 'Borehole drilling in progress' },
  { src: '/Image2.png', caption: 'Pump maintenance' },
]
export default function Gallery() {
  return (
    <div>
      <PageHero
        tag="Gallery"
        title="Our Work"
        subtitle="A selection of borehole drilling and water system projects across the Southern Suburbs of Cape Town."
      />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {images.map((img, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={img.src} alt={img.caption} />
                </div>
                <p className={styles.caption}>{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
