import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from '../../public/logo2.png'
import whitelogo from '../../public/logo.png'
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsPlus, BsChevronDoubleRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showServices, setShowServices] = useState(false)

    const aboutToggle = () => {
        setShowAbout(!showAbout)
        showServices && setShowServices(false)
    }
    const serviceToggle = () => {
        setShowServices(!showServices)
        showAbout && setShowAbout(false)
    }

    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Image src={logo} alt="LBAN" />
                    </div>
                    <div className={styles.icon}>
                        <AiOutlineAlignLeft onClick={() => setToggle(true)} />
                    </div>
                </div>

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
            <div className={toggle ? `${styles.overlay} ${styles.open}` : styles.overlay}>
                <div className={styles.linksContainer}>
                    <div className={styles.label}>Navigation</div>
                    <div className={styles.linksHome}>
                        <div className={styles.mainLogoContainer}>
                            <div className={styles.mainLogo}>
                                <Image src={whitelogo} alt="lban" />
                                <div className={styles.name}>
                                    <h3>Lotus Beta Analytics Nigeria Limited</h3>
                                </div>
                                <div className={styles.close} onClick={() => setToggle(!toggle)} ><AiOutlineClose /></div>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <ul>
                                <Link href="/" passHref><li>Home</li></Link>
                                <li onClick={aboutToggle} ><><span>About <BsPlus /></span></></li>
                                {showAbout && <div className={styles.sub}>
                                    <ul>
                                        <Link href="/about" passHref><li><p><BsChevronDoubleRight />About Us</p></li></Link>
                                        <Link href="/about/our-ceo" passHref><li><p><BsChevronDoubleRight />Our CEO</p></li></Link>
                                        <Link href="/about/our-team" passHref><li><p><BsChevronDoubleRight />Our Team</p></li></Link>
                                    </ul>
                                </div>}
                                <li onClick={serviceToggle}><><span>Services<BsPlus /></span></></li>
                                {showServices && <div className={styles.sub}>
                                    <ul>
                                        <Link href="/services/professional-services" passHref><li><p><BsChevronDoubleRight />Professional Services</p></li></Link>
                                        <Link href="/services/business-consulting" passHref><li><p><BsChevronDoubleRight />Business Consulting</p></li></Link>
                                        <Link href="/services/mobility-services" passHref><li><p><BsChevronDoubleRight />Mobility Services</p></li></Link>
                                        <Link href="/services/application-development" passHref><li><p><BsChevronDoubleRight />Application Development</p></li></Link>
                                        <Link href="/services/IT-Assurance" passHref><li><p><BsChevronDoubleRight />IT Assurance</p></li></Link>
                                        <Link href="/services/capacity-building" passHref><li><p><BsChevronDoubleRight />Capacity Building/Training</p></li></Link>
                                    </ul>
                                </div>}
                                <Link href="/careers" passHref><li>Careers</li></Link>
                                <Link href="/contact" passHref><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
};

export default Navigation;
