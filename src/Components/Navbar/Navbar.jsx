import React from 'react'
import Logo from '../../Assets/Google_Book_Search.png'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <>
        <div className={styles.navbar}>
        <img className={styles.navbar__logo} src={Logo}></img>
        </div>
        <div className={styles.navabar__spacer}></div>
        </>
    )
}

export default Navbar
