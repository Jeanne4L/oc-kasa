import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'
import Locations from '../../locations.json'
import LocationItem from '../../components/LocationItem'

function Home() {
    return (
        <main>
            <Banner
                image={homeBannerImg}
                paragraphText="Chez vous, partout et ailleurs"
            />
            <div className="locations">
                {Locations.map((location) => (
                    <LocationItem location={location} key={`${location.id}`} />
                ))}
            </div>
        </main>
    )
}

export default Home
