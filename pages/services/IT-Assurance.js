import Head from "next/head";
import {
  Navigation,
  Footer,
  Hero,
  TitleLabel,
  ServicesCard,
} from "../../components";
import styles from "./styles.module.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import { GiCpu } from "react-icons/gi";
import { FaSpinner } from "react-icons/fa";
import {
  BsFillHddNetworkFill,
  BsFillShieldFill,
  BsFillTelephoneInboundFill,
  BsFillLayersFill,
  BsCpu,
  BsStack,
} from "react-icons/bs";

const ITAssurance = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Services: IT Assurance </title>
        <meta
          name="description"
          content="At Lotus Beta Analytics, we offer a wide range of IT assurance services and advice that can aid your organization grow and be secure about their IT infrastructure"
        />
        <meta
          name="keywords"
          content="IT Assurance, IT Security, IT Audit and Compliance, Assessment and Remediation Assistance, Process and Assessment based COBIT, IT Risk Assessment, Change Management, SharePoint Portal and Microsoft Dynamics, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: IT Assurance" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="IT Assurance" color="black" />
          </Zoom>
          <Jump>
            <h4>IT Assurance</h4>
          </Jump>

          <p>
            With the growth of technology and technology being the driving force
            for businesses, it is of no doubt that technology unfolds
            opportunities upon opportunities whilst garnering significant
            threats as well. At Lotus Beta Analytics, we offer a wide range of
            IT assurance services and advice that can aid your organization grow
            and be secure about their IT infrastructure. 
          </p>
          <br />
          <br />
          <p>
            Our team of specialists with great experience and advanced
            technology skills and expertise offers services that will help your
            organization manage proactively and reactively your IT technology
            risks with a focus on sustainable growth. In partnership with our
            clients, we provide a deep understanding of their businesses and
            deliver superior insights as regards their technology with
            recommendations and make certain that they get good value from their
            IT knowing they are safe and secure.
          </p>
          <br />
          <br />

          <h4>Our IT Assurance services: </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard
              Icon={BsFillHddNetworkFill}
              text="IT Audit and Compliance"
            />
            <ServicesCard
              Icon={BsFillShieldFill}
              text="Assessment and Remediation Assistance"
            />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="Process and Assessment based COBIT"
            />
            <ServicesCard Icon={BsFillLayersFill} text="Data Analysis" />
            <ServicesCard Icon={GiCpu} text="IT Risk Assessment" />
            <ServicesCard Icon={BsCpu} text="IT Security" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default ITAssurance;
