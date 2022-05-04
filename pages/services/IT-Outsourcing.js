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
  BsFillLayersFill,
} from "react-icons/bs";

const ITOutsource = () => {
  return (
    <div className="container">
      <Head>
        <title>
          Lotus Beta Analytics | Services: IT Outsourcing and Recruitment{" "}
        </title>
        <meta
          name="description"
          content="We offer our customers the required expertise to support and drive their business and technology infrastructure forward by way of providing outright recruitment or support. "
        />
        <meta
          name="keywords"
          content="IT recruitment, IT Business Analyst, Contract placement, Managed Services, Technology roadmap, IT Risk Assessment, Vendor Analysis, Governance Policies and Security, Application Re-Engineering,  Data Analytics and Artificial Intelligence, Testing Services , Professional Services,  Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: IT Outsourcing and Recruitment" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="IT Outsourcing and Recruitment" color="black" />
          </Zoom>
          <Jump>
            <h4>IT Outsourcing and Recruitment</h4>
          </Jump>

          <p>
            We offer our customers the required expertise to support and drive
            their business and technology infrastructure forward by way of
            providing outright recruitment or support.
          </p>
          <br />
          <br />
          <p>
            Our outsourcing and recruitment services improve the way businesses
            find and retain talents. These services make it easier for planning,
            screening, hiring, and onboarding prospective applicants to
            outsourcing them to our esteemed clients as required to support
            their businesses. 
          </p>
          <br />
          <br />
          <p>
            At Lotus beta Analytics, our recruitment outsourcing services are
            premeditated to build up efficiency and effectiveness end to end and
            to create an improved overall recruitment experience for our
            clients.
          </p>
          <br />
          <br />
          <h4>Our IT Outsourcing and recruitment:  </h4>

          <div className={styles.serviceFlex}>
            <ServicesCard Icon={BsFillHddNetworkFill} text="IT Recruitment" />
            <ServicesCard Icon={BsFillShieldFill} text="IT Business Analyst" />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="Contract placement"
            />
            <ServicesCard Icon={BsFillLayersFill} text="Managed Services" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default ITOutsource;
