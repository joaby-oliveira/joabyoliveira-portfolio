import React from 'react'

import styles from './Card.module.css'

import Text from './Text/Text'
import Title from './Title/Title'
import Button from './Button/Button'

const Card = (props) => {
    if (!props.portfolio) {
        return (
            <div className={styles.flipCardContainer}>
                <div className={styles.flipper}>
                    <div className={styles.flipCardFront}>
                        <img src={props.path} />
                    </div>
                    <div className={styles.flipCardBack}>
                        <Title h2={true} light={true}>{props.title}</Title>
                        <Text light={true}>{props.children}</Text>
                    </div>
                </div>
            </div>
        )
    }
    if (props.portfolio) {
        return (
            <div className={`${styles.flipCardContainer}  ${styles.portfolio}`}>
                <div className={`${styles.flipper}`}>
                    <div className={styles.flipCardFront}>
                        <img src={props.path} />
                    </div>
                    <div className={styles.flipCardBack}>
                        <Title h2={true} light={true}>{props.title}</Title>
                        <Text light={true}>{props.children}</Text>
                        <Button short={true} fillParent={true} path={props.to}>Ver fotos</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
