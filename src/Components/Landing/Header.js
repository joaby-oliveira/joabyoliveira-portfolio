import React from 'react'
import profile from '../../img/profile.png'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Title from '../Title/Title'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <img src={profile} className={styles.profile} />
            <header>
                <Title light={true}>Joaby Oliveira</Title>
                <Text light={true}>Prazer em te ver aqui! Além de Web Designer, sou também programador. Apaixonado por desenvolver interfaces e codificá-las.</Text>
                <Button short={true} path="/sobre">Me conheça</Button>
            </header>
        </div>
    )
}

export default Header
