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
import {
  BsFillHddNetworkFill,
  BsFillShieldFill,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";

const CapacityBuilding = () => {
  return (
    <div className="container">
      <Head>
        <title>
          Lotus Beta Analytics | Services: Capacity Building / Training
        </title>
        <meta
          name="description"
          content="We offer our customers the required expertise to support and drive their business and technology infrastructure forward by way of providing outright recruitment or support. "
        />
        <meta
          name="keywords"
          content="Customized onsite delivered workshops, Action lead learning, E-learning, IT Risk Assessment, Vendor Analysis, Governance Policies and Security, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: Capacity Building / Training" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="Capacity Building / Training" color="black" />
          </Zoom>
          <Jump>
            <h4>Capacity Building / Training</h4>
          </Jump>

          <p>
            Lotus Beta Analytics capacity building and training services are
            designed to improve our customer’s whole organizational performance,
            experience, and internal capabilities through the application of
            world industry standards.
          </p>
          <br />
          <br />
          <p>
            We believe the effect and impact of a workshop, training, E-learning
            but to mention a few, provides the desired context to assist
            organizations to manage company resources efficiently to boost
            increased productivity, reduced costs, develop new business
            opportunities, and improve overall business performance.
          </p>
          <br />
          <br />

          <h4>Our Capacity Building and Training services:  </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard
              Icon={BsFillHddNetworkFill}
              text="Customized onsite delivered workshops"
            />
            <ServicesCard Icon={BsFillShieldFill} text="Action lead learning" />
            <ServicesCard Icon={BsFillTelephoneInboundFill} text="E-learning" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default CapacityBuilding;
