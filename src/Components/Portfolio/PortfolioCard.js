import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({ name, path }) => {
    return (
        <Link className={styles.portfolioCard} to={`/${name}`}>
            <img src={path} />
        </Link>
    )
}

export default PortfolioCard
