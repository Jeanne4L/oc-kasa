import styles from '../../styles/rating.module.css'

function Rating({ renting }) {
    const empty = Array(5).fill(<i className="ri-star-fill"></i>)
    const full = Array(5).fill(<i className="ri-star-fill"></i>)

    return (
        <div>
            {full.slice(5 - renting.rating).map((fullStar, index) => (
                <span
                    key={index}
                    className={`${styles.star} ${styles.full_star}`}
                >
                    {fullStar}
                </span>
            ))}
            {empty.slice(renting.rating).map((emptyStar, index) => (
                <span
                    key={index}
                    className={`${styles.star} ${styles.empty_star}`}
                >
                    {emptyStar}
                </span>
            ))}
        </div>
    )
}
export default Rating
