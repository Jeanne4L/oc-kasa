import Locations from '../../locations.json'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'

function Location() {
    const { id } = useParams()
    const location = Locations.filter((location) => location.id === id)

    return (
        <main>
            {location.map((location) => (
                <Carousel pictures={location.pictures} />
            ))}
        </main>
    )
}

export default Location
