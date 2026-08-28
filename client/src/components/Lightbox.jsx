import { useState } from 'react'
import InterestForm from './InterestForm'
import './Lightbox.css'

function Lightbox({ style, onClose }) {
  const [showOptions, setShowOptions] = useState(false)
  const [showForm, setShowForm] = useState(false)

  if (!style) return null

  const whatsappUrl = 'https://wa.me/256700000000?text=' + encodeURIComponent(style.whatsapp_message)

  return (
    <div className="lightbox__overlay" onClick={onClose}>
      <div className="lightbox__modal" onClick={function(e) { e.stopPropagation() }}>
        <button className="lightbox__close" onClick={onClose}>X</button>
        <div className="lightbox__image-placeholder" />
        <div className="lightbox__body">
          <p className="lightbox__type">{style.type}</p>
          <h2 className="lightbox__name">{style.name}</h2>
          <p className="lightbox__desc">{style.description}</p>

          {!showOptions && !showForm && (
            <button className="btn btn--primary" onClick={function() { setShowOptions(true) }}>
              Interested?
            </button>
          )}

          {showOptions && !showForm && (
            <div className="lightbox__options">
              <p className="lightbox__options-label">How would you like to proceed?</p>
              <button className="btn btn--primary" onClick={function() { setShowForm(true) }}>
                Fill interest form
              </button>
              <a className="btn btn--whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          )}

          {showForm && (
            <InterestForm style={style.name} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Lightbox