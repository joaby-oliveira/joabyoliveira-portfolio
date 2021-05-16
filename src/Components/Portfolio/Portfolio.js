import React from 'react'

import lisweet from '../../img/lisweet.svg'
import oscel from '../../img/oscel.svg'
import mingle from '../../img/mingle.svg'
import uhuu from '../../img/uhuu.svg'

import styles from './Portfolio.module.css';

import Title from '../Title/Title'
import PortfolioCard from './PortfolioCard'
import Card from '../Card'
const Portfolio = () => {
    return (
        <section className={`animeTopToBottom ${styles.portfolio}`}>
            <Title>Veja os sites e aplicativos que já desenvolvi</Title>
            <div className={styles.cardPortfolioContainer}>
                <Card portfolio={true} path={oscel} to="./oscell" title={"Oscel"}>Design da interface de um programa para gerar ordem de serviço para técnicos de assistência técnica.</Card>
                <Card portfolio={true} path={lisweet} to="./lisweett" title={"Li Sweet"}>Site desenvolvido para uma loja de doces, com cardápio e uma ferramenta de pedidos.</Card>
                <Card portfolio={true} path={uhuu} to="./uhuuu" title={"Uhuu"}>Aplicativo que ajuda pessoas a participarem e organizarem festas desenvolvido para uma cerimonialista.</Card>
            </div>
        </section>
    )
}

export default Portfolio
