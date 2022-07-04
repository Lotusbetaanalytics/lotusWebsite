import Head from "next/head";
import {
  Navigation,
  Footer,
  Hero,
  TitleLabel,
  CareerCard,
} from "../../components";
import styles from "./styles.module.css";
import photo from "../../public/intern.jpg";

const Careers = () => {
  const navigateHandler = () => {};
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Careers</title>
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
        <Hero title="Careers" />
        <div className={styles.about}>
          <div className={styles.careersFlex}>
            <CareerCard
              title="LBAN Internship Program (LIP)"
              image={photo}
              content="Lotus Beta Analytics Nig Ltd is incorporated in August 2011 and is currently made up of team members with relevant industry experience spanning over 10 years. We are well focused on the provision of Information Technology Solutions. "
              button={true}
              name="Read More..."
              url={`careers/LBAN-Internship-program`}
              color="purpleOutline"
            />
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
