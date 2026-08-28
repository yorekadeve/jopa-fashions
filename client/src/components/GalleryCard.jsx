import './GalleryCard.css'

function GalleryCard({ style, onOpen }) {
  return (
    <div className="gallery-card" onClick={() => onOpen(style)}>
      <div className="gallery-card__image-placeholder" />
      <div className="gallery-card__body">
        <p className="gallery-card__name">{style.name}</p>
      </div>
    </div>
  )
}

export default GalleryCard