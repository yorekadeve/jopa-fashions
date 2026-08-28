import styles from '../data/gallery.json'
import './Home.css'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Handcrafted Since the Village Workshop</p>
          <h1 className="hero__headline">Kitenge and Bahima fashion,<br />sewn with care</h1>
          <a href="/gallery" className="btn btn--primary hero__cta">View Gallery</a>
        </div>
      </section>

      <section className="featured">
        <h2 className="featured__title">Featured Styles</h2>
        <div className="featured__grid">
          {styles.map(function(style) {
            return (
              <div className="featured__card" key={style.id}>
                <div className="featured__image" />
                <div className="featured__body">
                  <p className="featured__name">{style.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Home