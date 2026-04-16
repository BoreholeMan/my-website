import PageHero from '../components/PageHero'
import styles from './Gallery.module.css'

const images = [
  { src: '/gallery/image1.jpg', caption: 'Borehole drilling in progress' },
  { src: '/gallery/image2.jpg', caption: 'Pump installation' },
  { src: '/gallery/image3.jpg', caption: 'Completed borehole setup' },
  { src: '/gallery/image4.jpg', caption: 'Water storage system' },
  { src: '/gallery/image5.jpg', caption: 'Irrigation installation' },
  { src: '/gallery/image6.jpg', caption: 'Site preparation' },
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
