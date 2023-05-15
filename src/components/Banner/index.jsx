import styles from '../../styles/banner.module.css'

function Banner({ image, paragraphText }) {
    return (
        <div className={styles.banner}>
            <img src={image} alt="paysage" />
            {paragraphText && <p>{paragraphText}</p>}
        </div>
    )
}

export default Banner
