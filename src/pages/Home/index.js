import Banner from '../../components/Banner'
import homeBannerImg from '../../images/home__banner.png'

function Home() {
    return (
        <div className="Home">
            <Banner
                backgroundImage={homeBannerImg}
                paragraphText="Chez vous, partout et ailleurs"
            />
        </div>
    )
}

export default Home
