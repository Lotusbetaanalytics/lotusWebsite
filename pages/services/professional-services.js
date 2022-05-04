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
import { FaSpinner, FaServer, FaDatabase } from "react-icons/fa";
import {
  BsFillHddNetworkFill,
  BsFillShieldFill,
  BsFillTelephoneInboundFill,
  BsFillLayersFill,
  BsCpu,
  BsStack,
  BsFillInboxesFill,
} from "react-icons/bs";

const ProfessionalServices = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Services: Professional Services</title>
        <meta
          name="description"
          content="We are a professional IT consulting and services provider with over 10 years’ experience in the industry providing solutions to our various clients"
        />
        <meta
          name="keywords"
          content="Professional Services, Application development, Business Consulting, IT Assurance, Mobility Services, Capacity Building / Training, IT Outsourcing and Recruitment "
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Services: Professional Service" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="Professional Services" color="black" />
          </Zoom>
          <Jump>
            <h4>Professional Services</h4>
          </Jump>

          <p>
            We are a professional IT consulting and services provider with over
            10 years’ experience in the industry providing solutions to our
            various clients. A key component of our success story is in our use
            of best practices methodology which enables us to improve and
            optimize our clients’ infrastructures, processes, and procedures
            while lowering overall costs.
          </p>
          <br />
          <br />
          <p>
            LBAN’s dedicated team of certified engineers possess expertise
            across each of our service and solution offerings such as
            Infrastructure, network, data center, collaboration, and security,
            etc. As we work with our clients, we make it a point of duty to
            align with them using our services methodology which helps us
            understand what value is needed and how it impacts their service
            delivery. We provide expert levels of solution delivery, expert
            advisory, and technical knowledge through a deep sense of commitment
            and balance customer expectations and profitability goals
            accordingly in a cost-effective manner.
          </p>
          <div className={styles.serviceFlex}>
            <ServicesCard
              Icon={BsFillHddNetworkFill}
              text="Converged Network Infrastructure Services"
            />
            <ServicesCard
              Icon={BsFillShieldFill}
              text="Managed Security Services"
            />
            <ServicesCard
              Icon={BsFillTelephoneInboundFill}
              text="IT Support Services"
            />
            <ServicesCard
              Icon={BsFillLayersFill}
              text="Enterprise System Management"
            />
            <ServicesCard Icon={GiCpu} text="IT Asset Management Services" />
            <ServicesCard Icon={BsCpu} text="IT Service Management" />
            <ServicesCard Icon={BsStack} text="IT Service Desk" />
            <ServicesCard Icon={FaSpinner} text="Transformation Solutions" />
            <ServicesCard
              Icon={FaServer}
              text="Data Center Management Services"
            />
            <ServicesCard
              Icon={BsFillInboxesFill}
              text="Enterprise Project Management"
            />
            <ServicesCard
              Icon={FaDatabase}
              text="End-User Computing Services"
            />
            <ServicesCard
              Icon={BsFillInboxesFill}
              text="Business Process Re-engineering (BPR)"
            />
          </div>
          <h4>Our Approach</h4>
          <ul>
            <li>
              We Make it a point of duty to understand our clients’ needs,
              analyzing in detail your journey so far and where they are headed
              in the future.
            </li>
            <li>
              We help our clients identify and highlight where improvements can
              be appended, and we measure the accruing benefits these
              improvements would have on their business.
            </li>
            <li>
              We work with our clients to implement the agreed and signed-off
              solutions. We take pleasure in serving our clients and being the
              catalyst of growth, they need to leap forward.
            </li>
          </ul>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default ProfessionalServices;
