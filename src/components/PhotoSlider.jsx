import { useRef, useState, useEffect } from 'react'
import sliderImages from '../data/sliderImages'
import styles from './PhotoSlider.module.css'

// A row of photo cards that scrolls sideways.
// Arrows move one card at a time; on phones you can also swipe.
export default function PhotoSlider() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Keep track of whether we're at either end, to dim the arrows
  const updateEnds = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateEnds()
    window.addEventListener('resize', updateEnds)
    return () => window.removeEventListener('resize', updateEnds)
  }, [])

  // Scroll by the width of one card (plus the gap)
  const scroll = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('figure')
    const step = card ? card.offsetWidth + 16 : el.clientWidth
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className={styles.slider} aria-label="Photos of our work" role="region">
      <div className={styles.track} ref={trackRef} onScroll={updateEnds}>
        {sliderImages.map((img) => (
          <figure key={img.src} className={styles.card}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <figcaption className={styles.caption}>{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scroll(-1)}
        disabled={atStart}
        aria-label="Previous photos"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scroll(1)}
        disabled={atEnd}
        aria-label="Next photos"
      >
        ›
      </button>
    </div>
  )
}
