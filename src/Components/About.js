import React from 'react'

import styles from './About.module.css'

import htmlLogo from '../img/htmlLogo.svg'
import cssLogo from '../img/cssLogo.svg'
import javascriptLogo from '../img/javascriptLogo.svg'
import reactLogo from '../img/reactLogo.svg'
import nodejsLogo from '../img/nodejsLogo.svg'
import mongodbLogo from '../img/mongodbLogo.svg'

import Card from './Card'
import ListItem from './ListItem'
import Text from './Text/Text'
import Title from './Title/Title'

const About = () => {
    return (
        <main className={styles.main}>
            <section className={`${styles.about} animeTopToBottom`}>
                <header>
                    <Title>Minha trajetória</Title>
                    <Title h2={true}>Uma linha do tempo da minha vida profissional e fatores importantes para a minha carreira</Title>
                </header>
                <ListItem about={true} title="Como vim parar aqui">Em 2019 ingressei nos meus estudos de programação. Aprendi muito desenvolvimento web e acabei adquirindo uma grande afeição por UI Design e desenvolvimento de sites. Desde lá, venho me aperfeiçoando, adquirindo conhecimento em plataformas como Udemy e Origamid, afim de tentar ser a cada novo dia, melhor que antes</ListItem>
                <ListItem about={true} title="Meu canal no Youtube" alignSide="right">No começo de 2020, durante a pandemia, resolvi criar um canal no youtube, onde compartilho uma porção dos meus conhecimentos com devs que começaram sua jornada recentemente</ListItem>
                <ListItem about={true} title="Digital influencing">Em 2021 comecei um projeto de compartilhar no instagram, alguns conhecimentos não técnicos, com enfoque maior na carreira, maneira de se aprender, mas também, não me limitando apenas aos tais</ListItem>
            </section>
            <div className={styles.cardsContainer}>
                <Title light={true} id={styles.cardsTitle}>Tecnologias</Title>
                <div className={styles.cards}>
                    <Card path={htmlLogo} title={"HTML"}>Adquiri uma base sólida em tags HTML, técnicas de SEO, e como codificar nessa liguagem de maneira semântica. Aprendi durante o curso de DS, além de ter aprendido pela internet, em sites como o w3schools e a propria documentação da Mozilla</Card>
                    <Card path={cssLogo} title={"CSS"}>CSS é uma das linguagens das quais mais gosto de codificar, por tornar os elementos web bonitos, tal como esse card que podes ver. Em suma, obtive todo meu conhecimento através do Youtube e aulas da escola Cod3r</Card>
                    <Card path={javascriptLogo} title={"JavaScript"}>Antes de qualquer biblioteca ou framework, adquiri um bom conhecimento em JS puro, para entender todos os conceitos e funcionalidades da liguagem</Card>
                    <Card path={reactLogo} title={"React JS"}>É a tecnologia que até agora mais gostei de aprender, tem uma ótima flexibilidade, com sua facilidade em economizar código, além de que torna a programação muito mais prática</Card>
                    <Card path={nodejsLogo} title={"Node JS"}>Uma tecnologia utilizada para o back-end, que particularmente, acredito que seja a melhor para criar APIs, devido à sua facilidade de lidar com rotas e conexão com qualquer banco de dados.</Card>
                    <Card path={mongodbLogo} title={"Em construção"}></Card>
                </div>
            </div>
        </main>
    )
}

export default About
