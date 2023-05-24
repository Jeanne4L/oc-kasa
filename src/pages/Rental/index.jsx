import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Rentals from '../../data/rentals.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import styles from '../../styles/rental.module.css'
import Carousel from '../../components/Carousel'

/**
 *
 * @returns {JSX.Element} - rental page
 */

function Rental() {
    const { id } = useParams()
    const rental = Rentals.filter((rental) => rental.id === id)

    if (rental.length > 0) {
        return (
            <main>
                {rental.map((rental) => (
                    <React.Fragment key={`rentalContainer-${rental.id}`}>
                        <Carousel pictures={rental.pictures} />
                        <div className={styles.presentation}>
                            <div className={styles.titles}>
                                <h1 key={`${rental.title}-${rental.id}`}>
                                    {rental.title}
                                </h1>
                                <h2 key={`${rental.location}-${rental.id}`}>
                                    {rental.location}
                                </h2>

                                <div
                                    className="tags"
                                    key={`tagsContainer-${rental.id}`}
                                >
                                    <Tag tags={rental.tags} />
                                </div>
                            </div>

                            <div
                                key={`rentalInfoContainer-${rental.id}`}
                                className={styles.info_container}
                            >
                                <Rating rental={rental} />
                                <div className={styles.host}>
                                    <p className={styles.name}>
                                        {rental.host.name}
                                    </p>
                                    <img
                                        src={rental.host.picture}
                                        alt={rental.host.name}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.collapse_container}>
                            <Collapse
                                title={'Description'}
                                paragraphText={rental.description}
                            />
                            <Collapse
                                title={'Équipements'}
                                list={rental.equipments}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </main>
        )
    } else {
        // If the id in the url is wrong, this redirects to the 404 page
        return <Navigate to={'*'} />
    }
}

export default Rental
