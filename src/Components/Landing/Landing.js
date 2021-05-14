import React from 'react'

import listImage1 from '../../img/item1.svg'
import listImage2 from '../../img/item2.svg'
import listImage3 from '../../img/item3.svg'
import lisweet from '../../img/lisweet.svg'
import oscel from '../../img/oscel.svg'
import mingle from '../../img/mingle.svg'
import uhuu from '../../img/uhuu.svg'

import Button from '../Button/Button'
import Text from '../Text/Text'
import Title from '../Title/Title'
import Header from './Header'
import styles from './Landing.module.css'
import ListItem from '../ListItem'
import Slider from './Slider'
const Landing = () => {
    return (
        <main>
            <section className={`animeTopToBottom ${styles.hero} flex mainCenter crossCenter`}>
                <Header />
            </section>
            <section className={`${styles.portfolio}`}>
                <Slider />
                <Button short={true} path="/portfolio">VER PORTFÓLIO</Button>
            </section>
            <section className={`${styles.sites}`}>
                <div className={`${styles.imgContainer} flex crossCenter`}>
                    <a href="https://lisweet.com.br" target="_blank"> 
                        <img src={lisweet} />
                    </a>
                    <a href="https://uhuu.com.br" target="_blank">
                        <img src={uhuu} />
                    </a>
                    <a href="https://mingle.com.br" target="_blank">
                        <img src={mingle} />
                    </a>
                    <a href="https://oscel.com.br" target="_blank">
                        <img src={oscel} />
                    </a>
                </div>
            </section>
            <section className={`${styles.reasons}`}>
                <Title>Por quê é tão importante ter um site?</Title>
                <ListItem title="Credibilidade com seus clientes" path={listImage1} alignSide="right">Quando você investe seu dinheiro em um site, você está gerando um retorno que futuramente será notório. Seus clientes enxergarão profissionalidade, te dando assim confiabilidade</ListItem>
                <ListItem title="Seja encontrado facilmente" path={listImage2}>Tendo um site, você pode se tornar muito mais encontrável, estando no topo da busca do google, atraindo assim, uma popularidade mais facilmente</ListItem>
                <ListItem title="Lidere o mercado" path={listImage3} alignSide="right">Ter um site, é vantajoso nesse quesito, pois imagine: Clientes procuram por uma solução, e acabam achando sua empresa e uma concorrente, supondo que você tenha um site, é bem mais provável que optem por seu serviço</ListItem>
            </section>
            <section className={`${styles.budget}`}>
                <div>
                    <Title light={true}>Dê vida ao seu negócio e tenha um site próprio</Title>
                    <Text light={true}>Meu objetivo é levar credibilidade até a sua empresa e conquistar confiança de seus clientes, faça agora um orçamento sem compromisso, é simples!</Text>
                    <Button short={true} path="/contato">PEDIR ORÇAMENTO</Button>
                </div>
            </section>
        </main>
    )
}

export default Landing
