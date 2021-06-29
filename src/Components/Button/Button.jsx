import React from 'react'
import styles from './Button.module.scss'
import SearchButton from '@material-ui/core/Button'

const Button = () => {
    return (
        <>
        <button className={styles.Button}type="submit">Search</button>
        </>
    )
}

export default Button
