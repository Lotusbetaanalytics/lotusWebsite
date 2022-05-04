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

const ApplicationDevelopment = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Services: Application Develoment</title>
        <meta
          name="description"
          content="Application development is re-molding significantly the current way of thinking or doing business by organizations in every sector"
        />
        <meta
          name="keywords"
          content="Application development, SAAS Solution, Product Design and User Interface Design,Web development,Mobile Development: iOS and Android, Enterprise Application Development: SharePoint Portal and Microsoft Dynamics, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: Application Development" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="Application Development" color="black" />
          </Zoom>
          <Jump>
            <h4>Application Development</h4>
          </Jump>

          <p>
            At Lotus beta Analytics, we leverage years of experience, expertise,
            technical prowess and know-how, intellectual property (IP), methods
            in application development to produce applications that improve and
            nurture business growth. Application development is re-molding
            significantly the current way of thinking or doing business by
            organizations in every sector. 
          </p>
          <br />
          <br />
          <p>
            From transforming end-user experience, creating new revenue
            channels, and making business innovation-ready towards targeting a
            wider customer base, our solutions are developed and supported to
            meet these needs by industry best practices that guarantee security,
            availability, interoperability, and maintainability. 
          </p>
          <br />
          <br />
          <p>
            We work together with our clients to provide solution
            recommendations, custom, application support, and maintenance
            tailored to meet their needs. All these are becoming core strategic
            requirements for clients looking to compete effectively in
            delivering world-class services to their customers, and to add value
            and improve business outcomes. In all these our designs and
            application development are premeditated to meeting our client’s
            needs and solving their problems.
          </p>
          <br />
          <br />
          <h4>Our Application Development Solutions: </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard Icon={BsFillHddNetworkFill} text="SAAS Solution" />
            <ServicesCard
              Icon={BsFillShieldFill}
              text="Product Design and User Interface Design"
            />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="Web development"
            />
            <ServicesCard
              Icon={BsFillLayersFill}
              text="Mobile Development: iOS and Android"
            />
            <ServicesCard
              Icon={GiCpu}
              text="Enterprise Application Development: SharePoint Portal and Microsoft Dynamics"
            />
            <ServicesCard Icon={BsCpu} text="Application Re-Engineering" />
            <ServicesCard
              Icon={BsStack}
              text="EData Analytics and Artificial Intelligence"
            />
            <ServicesCard Icon={FaSpinner} text="Testing Services" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default ApplicationDevelopment;
