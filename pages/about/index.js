import Head from "next/head";
import { Navigation, Footer, Hero, TitleLabel } from "../../components";
import styles from "./styles.module.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import VisionCard from "../../components/VisionCard";
import {
  GiBullseye,
  GiTelescopicBaton,
  GiRibbonMedal,
  GiAirBalloon,
} from "react-icons/gi";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | About</title>
        <meta
          name="description"
          content="Lotus Beta Analytics Nigeria LBAN, is a company leading the revolutionary approach to Information Communication Technology ICT"
        />
        <meta
          name="keywords"
          content="Lotus Beta Analytics,Lotus Beta,Lotus Beta Analytics Nigeria Limited,LBAN,HTML,CSS,JavaScript,WebDesigners,Hackers,Sophos,CyberSecurity,Customer Satisfaction,Bussiness Application, Office 365, Sharepoint, PowerApps,Custom Apps, Microsoft Azure, Microsoft Power-point, React, software developers,power Bi,microsoft forms,flows,microsoft flows, Certified Hackers, EC-Council,"
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="About Lotus Beta" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="our Company" color="black" />
          </Zoom>
          <Jump>
            <h4>Lotus Beta Analytics</h4>
          </Jump>

          <p>
            Lotus Beta Analytics (LBAN) is a company leading the revolutionary
            approach to Information Communication Technology (ICT) by redefining
            and reimagining a strategic approach to solutions and service
            delivery. We are focused on the provision of Information Technology
            Solutions and Services that are built on a world-class, secured,
            resilient infrastructure, and delivered according to global best
            practices in partnership with the world’s leading technology
            vendors.
          </p>
          <br />
          <br />
          <p>
            We are Africa’s Leading Information Technology Consulting Company,
            and we play a major role in providing cross-platform solutions that
            meet our customers’ expectations.
          </p>
          <br />
          <br />
          <h4>Impact</h4>
          <p>
            Over the years we have been able to win the hearts of our customers
            both in the public and private sectors, by analyzing our customers’
            pain points and deploying appropriate success strategies to solve
            their problems has increased the adoption of our solutions.
          </p>
          <br />
          <br />
          <p>
            Our goal as an organization is to provide our customers with the
            best value. We bring high-level expertise on-site to you with
            long-term commitment and in-depth knowledge of your business,
            tailoring specific guidance to the way your organization uses
            technology. We have the right level of relevant competence and
            subject matter expertise/specialization in key areas of the
            business. 
          </p>
          <br />
          <br />
          <p>
            As an organization that provides solutions to boost business growth
            to contribute to the advancement of the global digital economy the
            world over, we are constantly striving to deliver quality, timely
            and innovative solutions in partnership with our customers. With a
            deep sense of professionalism, we continually maintain many steps
            ahead of the competition, which translates into our resolve to
            empower our customers with agile solutions that enable them to
            achieve their aspirations and be winners in their marketplace. We
            are proactive, responsive, customer-friendly, and focused,
            appreciating that people are the ultimate beneficiaries of our
            technology.
          </p>
        </div>
        <div className={styles.vision}>
          <VisionCard
            Icon={GiBullseye}
            title="Our Mission"
            content="Partnering with you to bring the value of innovative, durable and dependable solution to empower all via our world class team"
          />

          <VisionCard
            Icon={GiTelescopicBaton}
            title="Our Vision"
            content="To make the world a better place through innovation solutions"
          />

          <VisionCard
            Icon={GiAirBalloon}
            title="Our Essence"
            content="Services and Solutions, not just I.T."
          />

          <VisionCard
            Icon={GiRibbonMedal}
            title="Our Goal"
            content="To provide you with the best value"
          />
        </div>
        <div className={styles.about}>
          <h4>COMPANY VALUES: TECH CARRIED, CREATED RICH</h4>
          <br />
          <br />
          <div className={styles.valuesFlex}>
            <div className={styles.values}>Competence​</div>
            <div className={`${styles.values} ${styles.purple}`}>
              Respect for individual​
            </div>
            <div className={styles.values}>Empathy​​</div>
            <div className={`${styles.values} ${styles.purple}`}>
              Accountability​
            </div>
            <div className={styles.values}>Team work and trust​</div>
            <div className={`${styles.values} ${styles.purple}`}>
              Effectiveness​
            </div>
            <div className={styles.values}>Dedicated to customer success​</div>
            <div className={`${styles.values} ${styles.purple}`}>
              Responsibility​​
            </div>
            <div className={styles.values}>Integrity</div>
            <div className={`${styles.values} ${styles.purple}`}>Can-do</div>
            <div className={styles.values}>
              High quality delivered first time
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default About;
