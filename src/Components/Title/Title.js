import React from 'react'
import styles from './Title.module.css'

const Title = (props) => {
    if (props.h2) return (<h2 className={`${styles.subtitle} ${props.light ? styles.light : ''}`}>{props.children}</h2>)
    return <h1 className={`${styles.title} ${props.light ? styles.light : ''}`}>{props.children}</h1>
}

export default Title
