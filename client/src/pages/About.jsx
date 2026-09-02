import styles from '../data/gallery.json'
import './About.css'

function About() {
  return (
    <main className="about-page">
      <h1 className="about-page__title">Our Story</h1>
      <img
        className="about-page__photo"
        src="/images/about-photo.jpg"
        alt="JOPA Fashions workshop"
      />
      <p className="about-page__text">
        JOPA Fashions began in a small village workshop, where every customer was welcomed,
        measured by hand, and remembered. For years, our founder sewed custom Kitenge and
        fitted wear for the Banyankole and Bahima community, guided by a simple book of
        names, measurements, and stories. Today, JOPA carries that same care forward —
        every piece still starts with a conversation, not just a measurement.
      </p>
      <div className="about-page__stats">
        <div className="about-page__stat">
          <p className="about-page__stat-value">100%</p>
          <p className="about-page__stat-label">Custom fit</p>
        </div>
        <div className="about-page__stat">
          <p className="about-page__stat-value">{styles.length}</p>
          <p className="about-page__stat-label">Styles offered</p>
        </div>
        <div className="about-page__stat">
          <p className="about-page__stat-value">Rwashamaire</p>
          <p className="about-page__stat-label">Ntungamo roots</p>
        </div>
      </div>
    </main>
  )
}

export default About