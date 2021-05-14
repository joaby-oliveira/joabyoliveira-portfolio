import React from 'react'
import Text from './Text/Text'
import Title from './Title/Title'
import styles from './ListItem.module.css'
const ListItem = (props) => {
    if (props.about) return (
        <div className={`${styles.listItem} ${props.alignSide ? styles.right : styles.left} ${props.about ? styles.about : ''}`}>
            <div>
                <Title h2={true}>{props.title}</Title>
                <Text>{props.children}</Text>
            </div>
        </div>
    )

    return (
        <div className={`${styles.listItem} ${props.alignSide ? styles.right : styles.left} `}>
            <img src={props.path} />
            <div>
                <Title h2={true}>{props.title}</Title>
                <Text>{props.children}</Text>
            </div>
        </div>
    )
}

export default ListItem
