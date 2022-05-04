import Head from "next/head";
import { Navigation, Footer, Hero } from "../../components";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Contact</title>
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
        <Hero title="Contact" />
        <div className={styles.about}></div>
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default Contact;
