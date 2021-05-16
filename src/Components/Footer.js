import React from 'react'

import logo from '../img/logo.svg'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'

import styles from './Footer.module.css'
import Title from './Title/Title'
import Text from './Text/Text'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={logo} />
            <div className={styles.columns}>
                <div>
                    <Title light={true} h2={true}>Sobre mim</Title>
                    <Text light={true}>Com 15 anos de idade comecei meu curso de desenvolvimento de sistemas, e desde lá, venho cada vez mais, buscando fazer sites que agradem o usuário com uma boa usabilidade e um design agradável</Text>
                </div>
                <div>
                    <Title light={true} h2={true}>Contato</Title>
                    <address>
                        <Text light={true}>
                            - joabyoliveira2004@gmail.com
                        </Text>
                        <Text light={true}>
                            - (14)99902-9409
                        </Text>
                    </address>
                </div>
                <div>
                    <Title light={true} h2={true}>Redes Sociais</Title>
                    <div className={styles.socialMedia}>
                        <a href="https://github.com/joaby-oliveira" target="_blank">
                            <img src={github} />
                        </a>
                        <a href="https://www.linkedin.com/in/joaby-oliveira/" target="_blank">
                            <img src={linkedin} />
                        </a>
                        <a href="https://www.instagram.com/little_joaby/" target="_blank">
                            <img src={instagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
