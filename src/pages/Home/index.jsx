import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'
import Rentals from '../../data/rentals.json'
import Card from '../../components/Card'
import styles from './styles.module.scss'

/**
 *
 * @returns {JSX.Element} - home page
 */

const Home = () => {
  return (
    <main>
      <Banner
        image={homeBannerImg}
        firstParagraphText="Chez vous,"
        secondParagraphText="partout et ailleurs"
      />
      <div className={styles.cards_container}>
        {Rentals.map((rental) => (
          <Card rental={rental} key={`${rental.id}`} />
        ))}
      </div>
    </main>
  )
}

export default Home
