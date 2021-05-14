import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../img/logo.svg'
import spacer from '../img/navSpacer.svg'
const Navbar = () => {
    const [menuClosed, setMenuClosed] = React.useState(true)

    function togleMenu () {
        setMenuClosed(!menuClosed)
    }
    return (
        <nav className={`${styles.navbar} ${menuClosed ? styles.closed : ''}`}>
            <Link to="/"><img src={logo} alt="Joaby Oliveira" /></Link>
            <span className={`${styles.menuButton} ${!menuClosed ? styles.closed : ''}`} onClick={togleMenu}>
                <span className={styles.line}>
                </span>
                <span className={styles.line}>
                </span>
                <span className={styles.line}>
                </span>
            </span>

            <ul>
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to="/" end>
                        início
                    </NavLink>
                </li>
                <img src={spacer} alt="spacer" />
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to="/sobre" end>
                        sobre
                    </NavLink>
                </li>
                <img src={spacer} alt="spacer" />
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to="/portfolio" end>
                        portfólio
                    </NavLink>
                </li>
                <img src={spacer} alt="spacer" />
                <li>
                    <NavLink activeClassName={styles.active} className={`${styles.link} ${styles.last}`} to="/contato" end>
                        contato
                    </NavLink>
                </li>
                <li className={styles.email}>
                    joaby2004@gmail.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
