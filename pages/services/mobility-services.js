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

const MobilityServices = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Services: Mobility Services </title>
        <meta
          name="description"
          content="At Lotus Beta Analytics, we offer a wide range of IT assurance services and advice that can aid your organization grow and be secure about their IT infrastructure"
        />
        <meta
          name="keywords"
          content="Analysis of Current initiatives, Identification of potential opportunities, Business case and return on investment (ROI) analysis, Architecture Blueprint, Technology roadmap, IT Risk Assessment, Vendor Analysis, Governance Policies and Security, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: Mobility Services" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="Mobility Services" color="black" />
          </Zoom>
          <Jump>
            <h4>Mobility Services</h4>
          </Jump>

          <p>
            At lotus Beta Analytics we believe that mobility is and should be at
            the core of businesses. That is why we offer a wide range of
            services and innovations that boost smooth operations organization
            round. With the knowledge of the business and the experienced staff,
            we help our clients implement technology road maps that help drive
            return on investment for both business and its esteemed customers
            and most importantly yield greater productivity.
          </p>
          <br />
          <br />
          <p>
            Mobility services are redefining the rubrics of technology
            experience and as your one-stop IT shop, we are committed strongly
            to driving your business to achieve its goals and objectives by
            giving your business wings to fly and soar so that as an
            organization you can take your business where it needs it to be.
          </p>
          <br />
          <br />

          <h4>Our Mobility Services: </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard
              Icon={BsFillHddNetworkFill}
              text="Analysis of Current initiatives"
            />
            <ServicesCard
              Icon={BsFillShieldFill}
              text="Identification of potential opportunities"
            />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="Business case and return on investment (ROI) analysis"
            />
            <ServicesCard
              Icon={BsFillLayersFill}
              text="Architecture Blueprint"
            />
            <ServicesCard Icon={GiCpu} text="Technology roadmap" />
            <ServicesCard Icon={BsCpu} text="Vendor Analysis" />
            <ServicesCard
              Icon={BsCpu}
              text="Governance Policies and Security"
            />
          </div>
          <p>
            Our Mobility Services aligns with your business processes to deliver
            mobile solutions easy to use and most importantly helps you sustain
            a good enterprise presence which propels organizational growth in
            the long run.
          </p>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default MobilityServices;
