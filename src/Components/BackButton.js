import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'
import Title from './Title/Title'
import backButtonIcon from '../img/backButton.svg'


const BackButton = (props) => {
    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
        <Link to={`../`} className={`${styles.backButton} flex mainCenter crossCenter`}>
            <img src={backButtonIcon} />
            <Title>{capitalize(props.params)}</Title>
        </Link>
    )
}

export default BackButton
