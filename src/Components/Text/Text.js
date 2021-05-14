import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Text.module.css'

const Text = (props) => {
    return (
        <p className={`${styles.text} ${props.light ? styles.light : ''}`}>
            {props.children}
        </p>
    )
}

export default Text