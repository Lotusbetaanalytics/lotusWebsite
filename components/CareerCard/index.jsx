import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { CustomButton } from '../'
import { useRouter } from 'next/router'

const CareerCard = ({ image, content, title, name, url, button = false, color }) => {
    const router = useRouter()
    const redirect = () => {
        router.push(`${url}`)
    }
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt="title" />
            </div>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{content}</p><br />
                {button && <CustomButton name={name} type="button" onClick={redirect} color={color} />}
            </div>

        </div>
    )
}

export default CareerCard