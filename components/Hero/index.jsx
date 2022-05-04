import React from 'react'
import styles from './styles.module.css'

const Hero = ({ title }) => {
    return (
        <div className={styles.hero}>{title}</div>
    )
}

export default Hero