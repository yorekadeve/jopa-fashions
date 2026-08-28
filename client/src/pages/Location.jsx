import './Location.css'

function Location() {
  return (
    <main className="location-page">
      <h1 className="location-page__title">Find us</h1>

      <div className="location-page__map">
        <iframe
          title="JOPA Fashions location"
          src="https://maps.google.com/maps?q=Rwashamaire,Ntungamo,Uganda&output=embed"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="location-page__address">
        <p className="location-page__name">JOPA Fashions workshop</p>
        <p className="location-page__detail">Rwashamaire, Kajara, Ntungamo District</p>
        <p className="location-page__detail">Uganda</p>
      </div>
    </main>
  )
}

export default Location