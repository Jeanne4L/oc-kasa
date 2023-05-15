import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'
import Locations from '../../locations.json'
import Card from '../../components/Card'
import styles from '../../styles/card.module.css'

function Home() {
    return (
        <main>
            <Banner
                image={homeBannerImg}
                paragraphText="Chez vous, partout et ailleurs"
            />
            <div className={styles.card_container}>
                {Locations.map((location) => (
                    <Card location={location} key={`${location.id}`} />
                ))}
            </div>
        </main>
    )
}

export default Home
