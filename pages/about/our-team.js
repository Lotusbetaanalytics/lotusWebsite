import Head from "next/head";
import Image from "next/image";
import React from "react";
import {
  Navigation,
  Footer,
  Hero,
  TitleLabel,
  TeamCard,
  Options,
} from "../../components";
import styles from "./styles.module.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

const Team = () => {
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | About: Our Team</title>
        <meta
          name="description"
          content="Lotus Beta Analytics Nigeria LBAN, is a company leading the revolutionary approach to Information Communication Technology ICT"
        />
        <meta
          name="keywords"
          content="Lotus Beta Analytics, Sunday David, Lanre Onipede, Ayodele Dina, Tobiloba Animasuan, Timothy Jayieola, Mishal Afa Bem, Funmilayo Akinti, Owolabi Joseph, Hacking, Coding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="contentsRight">
        <Hero title="About: Our Team" />
        <div className={styles.about}>
          <Zoom left>
            <TitleLabel title="our Team" color="black" />
          </Zoom>
          <div className={styles.teamFlex}>
            {Options.team.map((item, i) => (
              <TeamCard
                image={item.image}
                name={item.name}
                role={item.role}
                key={i}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default Team;
