import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'
import Rentals from '../../data/rentals.json'
import Card from '../../components/Card'
import styles from '../../components/Card/styles.module.css'

/**
 *
 * @returns {JSX.Element} - home page
 */

function Home() {
    return (
        <main>
            <Banner
                image={homeBannerImg}
                paragraphText="Chez vous, partout et ailleurs"
            />
            <div className={styles.card_container}>
                {Rentals.map((rental) => (
                    <Card rental={rental} key={`${rental.id}`} />
                ))}
            </div>
        </main>
    )
}

export default Home
