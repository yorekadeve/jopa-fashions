import './GalleryCard.css'

function GalleryCard({ style, onOpen }) {
  return (
    <div className="gallery-card" onClick={() => onOpen(style)}>
      <div className="gallery-card__image-wrap">
        <img className="gallery-card__image" src={style.image} alt={style.name} />
        <div className="gallery-card__overlay">
          <button className="gallery-card__interested">Interested?</button>
        </div>
      </div>
      <div className="gallery-card__body">
        <p className="gallery-card__name">{style.name}</p>
        <button className="gallery-card__interested--mobile">Interested?</button>
      </div>
    </div>
  )
}

export default GalleryCard