import { useState } from 'react'
import GalleryCard from '../components/GalleryCard'
import Lightbox from '../components/Lightbox'
import styles from '../data/gallery.json'
import './Gallery.css'

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <main className="gallery-page">
      <h1 className="gallery-page__title">Gallery</h1>
      <p className="gallery-page__subtitle">Tap any style to see more</p>
      <div className="gallery-page__grid">
        {styles.map(function(style) {
          return (
            <GalleryCard
              key={style.id}
              style={style}
              onOpen={setSelected}
            />
          )
        })}
      </div>
      {selected && (
        <Lightbox
          style={selected}
          onClose={function() { setSelected(null) }}
        />
      )}
    </main>
  )
}

export default Gallery