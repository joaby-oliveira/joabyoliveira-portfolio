import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <Link
            className={`${styles.button} ${props.short ? styles.short : ''} ${props.fillParent ? styles.fillParent : ''}`}
            to={props.path}>
            {props.children}
        </Link>
    )
}

export default Button
