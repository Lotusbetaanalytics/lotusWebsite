import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const TeamCard = ({ image, name, role }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt={name} />
            </div>
            <div className={styles.text}>
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default TeamCard