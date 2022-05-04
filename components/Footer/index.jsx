import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.firstFlex}>
                <div className={styles.card}>
                    <h4>About</h4>
                    <ul>
                        <Link href="/about" passHref><li><p>About Us</p></li></Link>
                        <Link href="/about/our-ceo" passHref><li><p>Our CEO</p></li></Link>
                        <Link href="/about/our-team" passHref><li><p>Our Team</p></li></Link>
                        <Link href="/career" passHref><li><p>Career</p></li></Link>
                        <Link href="/privacy" passHref><li><p>Policy</p></li></Link>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>Our Solutions</h4>
                    <ul>
                        <li><Link href="/#">Vistors Management System</Link></li>
                        <li><Link href="/#">CCTV Feeds</Link></li>
                        <li><Link href="/#">Hospital Management System</Link></li>
                        <li><Link href="/#">Modern Desktop</Link></li>
                        <li><Link href="/#">Student Management System</Link></li>
                        <li><Link href="/#">Document Approval System</Link></li>
                        <li><Link href="/#">SharePoint Online Optimization</Link></li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>Offers</h4>
                    <ul>
                        <li><Link href="/#">Azure Lift</Link></li>
                        <li><Link href="/#">Azure RecovR</Link></li>
                        <li><Link href="/#">Rem-worker</Link></li>
                        <li><Link href="/#">Data Nest</Link></li>
                        <li><Link href="/#">Lite-WebHost</Link></li>
                        <li><Link href="/#">WebHost</Link></li>
                        <li><Link href="/#">TimeIT Bot</Link></li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>Our Services</h4>
                    <ul>
                        <Link href="/services/professional-services" passHref><li><p>Professional Services</p></li></Link>
                        <Link href="/services/business-consulting" passHref><li><p>Business Consulting</p></li></Link>
                        <Link href="/services/mobility-services" passHref><li><p>Mobility Services</p></li></Link>
                        <Link href="/services/application-development" passHref><li><p>Application Development</p></li></Link>
                        <Link href="/services/IT-Assurance" passHref><li><p>IT Assurance</p></li></Link>
                        <Link href="/services/capacity-building" passHref><li><p>Capacity Building/Training</p></li></Link>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>Contact</h4>
                    <a href='mailtTo:info@lotusbetaanalytics.com'>info@lotusbetaanalytics.com</a>
                    <div className={styles.socialMedia}>
                        <p>Follow Us</p>
                        <a href='https://www.linkedin.com/company/lotus-beta-analytics'>
                            <BsLinkedin />
                        </a>
                        <a href='https://web.facebook.com/lotusbetaanalytics'>
                            <BsFacebook />
                        </a>
                        <a href=' <BsFacebook />'>
                            <BsTwitter />
                        </a>
                        <a href='https://www.instagram.com/lbannigeria'>
                            <BsInstagram />
                        </a>
                        <a href='https://www.youtube.com/channel/UCOhLIAisZyiolylqVhuq2qg'>
                            <BsYoutube />
                        </a>

                    </div>
                </div>
                <div className={styles.card}>
                    <h4>HeadQuarters</h4>
                    <p>Plot 21 Omorinre Johnson, Off Mobolaji Johnson Road, By Second Roundabout Lekki Phase 1, Lagos, Nigeria</p>
                </div>
                <div className={styles.card}>
                    <h4>Abuja Office</h4>
                    <p>No 74, 11th Crescent Kado Estate, Abuja</p>
                </div>
                <div className={styles.card}>
                    <h4>Canada Office</h4>
                    <a href='Tel:+1 647-336-2188'>+1 647-336-2188</a>
                    <a href='mailTo:info@lotusbetaanalytics.ca'>info@lotusbetaanalytics.ca</a>
                </div>

            </div>
        </div>
    )
}

export default Footer