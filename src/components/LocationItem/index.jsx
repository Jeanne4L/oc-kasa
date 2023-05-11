function LocationItem({ location }) {
    return (
        <figure>
            <img src={location.cover} alt={location.title} />
            <figcaption>{location.title}</figcaption>
        </figure>
    )
}

export default LocationItem
