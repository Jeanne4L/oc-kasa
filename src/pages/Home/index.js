import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'
import Rentals from '../../rentals.json'
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
                {Rentals.map((renting) => (
                    <Card renting={renting} key={`${renting.id}`} />
                ))}
            </div>
        </main>
    )
}

export default Home
