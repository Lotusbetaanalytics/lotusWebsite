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

const BusinessConsulting = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Services: Business Consulting</title>
        <meta
          name="description"
          content="Our business consulting services will help you navigate through increased complexity and volatility"
        />
        <meta
          name="keywords"
          content="Process Improvement, Business Continuity Planning, Project Management, Review, and Supervision, Vendor Selection, Data Analytics, Change Management, SharePoint Portal and Microsoft Dynamics, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: Business Consulting" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="Business Consulting" color="black" />
          </Zoom>
          <Jump>
            <h4>Business Consulting</h4>
          </Jump>

          <p>
            With evolving customer expectations and emerging technologies, our
            business consulting services can help you adapt to today’s market
            dynamics and continue to compete for no matter the threats you might
            be facing.
          </p>
          <br />
          <br />
          <p>
            Our business consulting services will help you navigate through
            increased complexity and volatility, drive operational efficiency
            and enable collaboration amidst constant change. Moreover, our
            capabilities would enable client success through executable
            strategies, teams to execute them, and experience to manage the
            growth and achieve the required transformation from strategy to
            implementation.  
          </p>
          <br />
          <br />

          <h4>Our Business Consulting services:  </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard
              Icon={BsFillHddNetworkFill}
              text="Process Improvement"
            />
            <ServicesCard
              Icon={BsFillShieldFill}
              text="Business Continuity Planning"
            />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="Project Management, Review, and Supervision"
            />
            <ServicesCard Icon={BsFillLayersFill} text="Vendor Selection" />
            <ServicesCard Icon={GiCpu} text="Data Analytics" />
            <ServicesCard Icon={BsCpu} text="Change Management" />
          </div>
          <p>
            In all, we see our work together as a partnership of equals and we
            see ourselves as a pragmatic service provider that is here to offer
            you specific, bespoke, and, above all, feasible solutions that are
            developed with your input.
          </p>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default BusinessConsulting;
