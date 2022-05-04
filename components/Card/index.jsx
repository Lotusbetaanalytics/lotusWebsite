import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

const Card = ({ Icon, text, title, url, className = "" }) => {
    const router = useRouter()
    const redirect = () => {
        router.push(`${url}`)
    }
    return (
        <div className={`${className} ${styles.container}`} onClick={redirect}>
            <div className={styles.card}>
                <div className={styles.icon}><Icon /></div>
                <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.overlay}>{title}</div>
        </div>

    )
}

export default Card