import Head from "next/head";
import { Navigation, Footer, Hero, TitleLabel } from "../../components";
import styles from "./styles.module.css";
import Link from "next/link";

const Careers = () => {
  const navigateHandler = () => {};
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Careers: LBAN INternship Program</title>
        <meta
          name="description"
          content="Lotus Beta Analytics Nigeria LBAN, is a company leading the revolutionary approach to Information Communication Technology ICT"
        />
        <meta
          name="keywords"
          content="Lotus Beta Analytics,Lotus Beta,Lotus Beta Analytics Nigeria Limited,LBAN,HTML,CSS,JavaScript,Internship,LIP,LBAN Internship Program,WebDesigners,Hackers,Sophos,CyberSecurity,Customer Satisfaction,Bussiness Application, Office 365, Sharepoint, PowerApps,Custom Apps, Microsoft Azure, Microsoft Power-point, React, software developers,power Bi,microsoft forms,flows,microsoft flows, Certified Hackers, EC-Council,"
        />
        <meta name="author" content="Lotus Beta Analytics Nigeria Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="Careers: LBAN INternship Program" />
        <div className={styles.about}>
          <TitleLabel title="LBAN INternship Program" color="black" />
          <p>
            Lotus Beta Analytics Nig Ltd is incorporated in August 2011 and is
            currently made up of team members with relevant industry experience
            spanning over 10 years. We are well focused on the provision of
            Information Technology Solutions.{" "}
          </p>
          <br />
          <p>
            Our solutions are built on a world class, secure, resilient
            infrastructure, delivered according to global best practices in
            partnership with the world’s leading technology vendors. Most of our
            customers are in the financial services industry, public sector
            space, oil, and gas industry etc.
          </p>
          <br />
          <p>
            We have partnerships with major Original Equipment Manufacturers,
            OEMs like Microsoft, Cisco, Sophos, EC-Council, Huawei, and Entrust
            Inc etc.
          </p>
          <br />
          <p>
            We are truly global with uniform and world class standards and
            practices, having motivated and high performing people with deep
            technical and functional skills. We can operate seamlessly across
            all the continents and will not be limited by country boundaries
          </p>
          <br />
          <p>
            In Nigeria, we are currently accepting applications from the highest
            calibers of early-career talent for the LBAN Internship Program
            (LIP).{" "}
          </p>
          <br />
          <br />
          <h4>About the Program </h4>
          <ul>
            <li>
              LIP is an intensive 12months program for young graduates to grow
              their careers with Lotus Beta Analytics Nig Ltd.{" "}
            </li>
            <li>
              LIP is designed to impact trainees with the knowledge, skills, and
              abilities to contribute in different roles to serving our
              customers and delivering secured world class innovative solutions
              that drives the digital economy.{" "}
            </li>
            <li>
              Trainees will be able to accelerate their personal and
              professional development through extensive learning experiences
              delivered by the LBAN team.
            </li>
          </ul>
          <br />
          <br />
          <h4>Requirements</h4>
          <p>
            Candidates must meet the below criteria to qualify for the program
          </p>
          <ul>
            <li>
              A First Class or Second-Class Upper Bachelor’s degree in any
              discipline relevant to your preferred Career Stream (see below).{" "}
            </li>
            <li>
              Must have completed or been exempted from the National Youth
              Service Corps (NYSC).
            </li>
            <li>Must not be older than 27 years old at the time of applying</li>
            <li>
              Females are encouraged to apply as the company will ensure that
              30% of the slot will be given to female candidates.{" "}
            </li>
          </ul>
          <p>
            Interested and qualified candidates should apply to their preferred
            Career Stream as provided below{" "}
          </p>
          <br />
          <h5>Cloud solutions & IT Infrastructure Delivery</h5>
          <p>
            For graduates of computer science, engineering, or any other related
            disciplines. You will support or enable business delivery through
            roles in IT Support, IT Infrastructure, Cloud solutions, IT Security
            etc
          </p>
          <br />
          <br />
          <h5>Business Analysis & project/product management </h5>
          <p>
            For graduates of Engineering, Project Management, or Computer
            Science. You will help drive operational excellence and value-add on
            the frontline of our business
          </p>
          <br />
          <br />
          <h5>Sales & Marketing</h5>
          <p>
            For graduates of Accounting, Business Administration, Banking &
            Finance, Economics, or related disciplines. You will contribute to
            diverse roles across our teams in Human Resources & Administration,
            Sales (selling of solutions to small, medium, large corporations and
            enterprise customers), finance (responsible for regulatory and
            financial reporting, forecast preparation and development of
            internal control policies and procedures), and marketing teams
            (responsible for the company social media handles, content creation,
            tele sales, channel officers) etc
          </p>
          <br />
          <br />
          <h5>Business development & data analytics </h5>
          <p>
            For graduates of Computer Science, Engineering, Statistics, Applied
            Mathematics, or other disciplines. Must also have 1-2 years’
            demonstrable experience in applying relevant tools for data
            analytics, Artificial Intelligence, software development, data
            modelling, and reporting. You will put these skills to use in
            developing innovative IT solutions, generating insights and
            supporting decision-making for clients and at different levels of
            the organization
          </p>
          <br />
          <br />
          <p>Additionally, </p>
          <ul>
            <li>
              You will be required to demonstrate your ability to build and grow
              your talent through a selection process that includes cognitive
              ability testing and competency-based interviewing.
            </li>
            <li>
              We believe that you are the future of our organization’s
              leadership, so you will also have to demonstrate potential to
              attain greater and higher levels of responsibility through actions
              and decisions that are aligned with our core values:
              <b>
                {" "}
                COMPETENCE, EMPHATY, RESPECT, ACCOUNTABILITY, EFFECTIVENESS,
                TEAMWORK & TRUST, RESPONSIBILITY, INTEGRITY, DEDICATED TO
                CUSTOMER SUCCESS, CAN-DO SPIRIT, HIGH QUALITY DELIVERED FIRST
                TIME.
              </b>
            </li>
            <li>
              We are fully committed to fostering a diverse and inclusive
              workforce. Therefore, we strongly encourage applications from both
              genders
            </li>
          </ul>
          <p>
            At LBAN, we are building and sustaining the technology space across
            emerging markets. This program is a way of giving back to the
            society. If you would like to join us on this exciting and
            transformative journey as a talented early-career professional
          </p>
          <br />
          <br />
          <div className="btnContainer">
            <Link href="/careers/apply" passHref>
              <a className="btn purple">Apply Here</a>
            </Link>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default Careers;
