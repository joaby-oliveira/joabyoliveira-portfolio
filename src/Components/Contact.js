import React from 'react'
import styles from './Contact.module.css'
import Title from './Title/Title'
import Text from './Text/Text'
import discussionImg from '../img/discussion.svg'

import instagram from '../img/instagramDark.svg'
import linkedin from '../img/linkedinDark.svg'
import github from '../img/githubDark.svg'
const Contact = () => {
    return (
        <section className={`animeTopToBottom ${styles.container}`}>
            <div className={`${styles.contactImageContainer}`}>
                <Title>Entre em contato comigo</Title>
                <img src={discussionImg} />
            </div>
            <div className={`${styles.contactInfoContainer}`}>
                <div className={`${styles.contact}`}>
                    <Title h2={true}>Contato</Title>
                    <Text>- joabyoliveira2004@gmail.com</Text>
                    <Text>- (14)99902-9409</Text>
                </div>

                <div>
                    <Title h2={true}>Redes Sociais</Title>
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
        </section>
    )
}

export default Contact
