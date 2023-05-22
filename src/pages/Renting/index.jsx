import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Rentals from '../../rentals.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import styles from '../../styles/renting.module.css'
import Carousel from '../../components/Carousel'

function Renting() {
    const { id } = useParams()
    const renting = Rentals.filter((renting) => renting.id === id)

    if (renting.length > 0) {
        return (
            <main>
                {renting.map((renting) => (
                    <React.Fragment key={`rentingContainer-${renting.id}`}>
                        <Carousel pictures={renting.pictures} />
                        <div className={styles.presentation}>
                            <div className={styles.titles}>
                                <h1 key={`${renting.title}-${renting.id}`}>
                                    {renting.title}
                                </h1>
                                <h2 key={`${renting.location}-${renting.id}`}>
                                    {renting.location}
                                </h2>

                                <div
                                    className="tags"
                                    key={`tagsContainer-${renting.id}`}
                                >
                                    <Tag tags={renting.tags} />
                                </div>
                            </div>

                            <div
                                key={`rentingInfoContainer-${renting.id}`}
                                className={styles.info_container}
                            >
                                <Rating renting={renting} />
                                <div className={styles.host}>
                                    <p className={styles.name}>
                                        {renting.host.name}
                                    </p>
                                    <img
                                        src={renting.host.picture}
                                        alt={renting.host.name}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.collapse_container}>
                            <Collapse
                                title={'Description'}
                                paragraphText={renting.description}
                            />
                            <Collapse
                                title={'Équipements'}
                                list={renting.equipments}
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

export default Renting
