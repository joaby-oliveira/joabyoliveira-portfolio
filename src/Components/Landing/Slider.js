import React from 'react'
import screen1 from '../../img/screen1.png'
import screen3 from '../../img/uhuu1.png'
import screen2 from '../../img/uhuu2.png'
import styles from './Macbook.module.css'

const Macbook = () => {
    const images = [
        screen1,
        screen2,
        screen3,
    ]
    return (
        <div className={`${styles.screen} flex mainCenter crossCenter`}>
            <img className={styles.animeLeft} src={screen1} />
        </div>
    )
}

export default Macbook
