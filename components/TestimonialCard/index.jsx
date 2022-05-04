import React from 'react'
import styles from './styles.module.css'

const TestimonialCard = ({ author, content, role }) => {
    return (
        <div className={styles.card}>
            <h4>{author}</h4>
            <p>{content}</p>
            <span><b>{role}</b></span>
        </div>
    )
}

export default TestimonialCard