import Head from "next/head";
import Image from "next/image";
import { Navigation, Footer, Hero, TitleLabel } from "../../components";
import styles from "./styles.module.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

import ceo from "../../public/ceo.jpeg";

const CEO = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | About: Our CEO</title>
        <meta
          name="description"
          content="Ademola is the Managing Director Lotus Beta Analytics Nigeria Ltd where he has built a portfolio of business relationships"
        />
        <meta
          name="keywords"
          content="Lotus Beta Analytics, Ademola, Akinbade, Ademola Akinbade,Ademola Olutokunbo Akinbade,Etisalat,MTN,GLO,Union Bank of Nigeria, Chapel Hill Denham, Microsoft Nigeria, Cisco
                Nigeria, Entrust Inc, C and I leasing, Oando, Keystone bank"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="About: Our CEO" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="our Ceo" color="black" />
          </Zoom>
          <Jump>
            <h4>Ademola Olutokunbo Akinbade</h4>
          </Jump>
          <br />
          <br />
          <div className={styles.ceo}>
            <div className={styles.image}>
              <Image src={ceo} alt="Ademola Olutokunbo Akinbade" />
            </div>
            <div className={styles.text}>
              <p>
                Ademola is the Managing Director Lotus Beta Analytics Nigeria
                Ltd where he has built a portfolio of business relationships
                with clients such as Etisalat Nigeria, MTN Nigeria, Union Bank
                of Nigeria, Chapel Hill Denham, Microsoft Nigeria, Cisco
                Nigeria, Entrust Inc, C and I leasing, Oando, Keystone bank.
              </p>
              <br />
              <br />
              <p>
                Over 15 years of ICT experience, gathered from assignments with
                multi-national giants such as Microsoft, Chevron, Nigeria LNG,
                MTN Nigeria. An integrity-driven individual, with an excellent
                track record in project management, business development, ICT
                strategy and operations, and a good understanding of the use of
                technology to meet varied business objectives.
              </p>
              <br />
              <br />
              <p>
                His professional acumen is built upon a wide blend of technical
                and business skills which enables him to seamlessly merge
                groundbreaking technologies with computing environments and
                client needs. He has worked in the fields of security,
                architecture, software & database development, web development,
                systems & business analysis, systems administration, networking,
                communications, sales & management.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default CEO;
