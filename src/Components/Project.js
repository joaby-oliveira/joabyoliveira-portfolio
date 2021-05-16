import React from 'react'
import { useParams } from 'react-router'

import oscel1 from '../img/oscel1.jpg'
import oscel2 from '../img/oscel2.jpg'
import oscel3 from '../img/oscel3.jpg'

import lisweet1 from '../img/lisweet1.jpg'

import uhuu1 from '../img/uhuu1.png'
import uhuu2 from '../img/uhuu2.jpg'
import uhuu3 from '../img/uhuu3.jpg'
import uhuu4 from '../img/uhuu4.jpg'

import mingle1 from '../img/mingle1.jpg'
import mingle2 from '../img/mingle2.jpg'
import mingle3 from '../img/mingle3.jpg'
import mingle4 from '../img/mingle4.jpg'

import styles from './Project.module.css'
import BackButton from './BackButton'

const Project = () => {

    const params = useParams()
    if (params.id === 'oscel') {
        return (
            <div className={`${styles.container} animeTopToBottom`}>
                <div className={`${styles.top} flex mainCenter crossCenter`}>
                    <BackButton params={params.id} />
                </div>
                <div className={styles.imgContainer}>
                    <img src={oscel1} alt="oscel" />
                    <img src={oscel2} alt="oscel" />
                    <img src={oscel3} alt="oscel" />
                </div>
            </div>
        )
    } else if (params.id === 'lisweet') {
        return (
            <div className={`${styles.container} animeTopToBottom`}>
                <div className={`${styles.top} flex mainCenter crossCenter`}>
                    <BackButton params={params.id} />
                </div>
                <div className={styles.imgContainer}>
                    <img src={lisweet1} alt="lisweet" />
                </div>
            </div>
        )
    } else if (params.id === 'uhuu') {
        return (
            <div className={`${styles.container} animeTopToBottom`}>
                <div className={`${styles.top} flex mainCenter crossCenter`}>
                    <BackButton params={params.id} />
                </div>
                <div className={styles.imgContainer}>
                    <img src={uhuu1} alt="uhuu" />
                    <img src={uhuu2} alt="uhuu" />
                    <img src={uhuu3} alt="uhuu" />
                    <img src={uhuu4} alt="uhuu" />
                </div>
            </div>
        )
    }
}

export default Project
