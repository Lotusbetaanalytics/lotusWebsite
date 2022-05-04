import Head from "next/head";
import {
  Navigation,
  Footer,
  Options,
  Select,
  CustomButton,
  Input,
} from "../../../components";
import styles from "../styles.module.css";
import Link from "next/link";
import React, { useState } from "react";

const Application = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [residentialState, setResidentialState] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [cv, setCV] = useState("");
  const [role, setRole] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const uploadHandler = (e) => {
    const file = e.target.files[0];
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Careers: Application</title>
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
        <div className={styles.about}>
          <form>
            <div className="lban__InputFlex forms">
              <Input
                title="Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
              />
              <Input
                title="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
              />
              <Input
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Input
                title="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="number"
              />
              <Select
                title="Nationality"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                options={Options.country}
              />
              <Select
                title="State of Origin"
                value={state}
                onChange={(e) => setState(e.target.value)}
                options={Options.state}
              />
              <Select
                title="Residential State"
                value={residentialState}
                onChange={(e) => setResidentialState(e.target.value)}
                options={Options.residentialState}
              />
              <Select
                title="Educational Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                options={Options.EducationData}
              />
              <Input
                title="Course of Study"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                type="text"
              />
              <Select
                title="What role are you applying for?"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={Options.role}
              />
              <Select
                title="How did you hear about us?"
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
                options={Options.socialMedia}
              />
              <Input
                title="Upload CV"
                value={cv}
                onChange={uploadHandler}
                type="file"
              />
              <div className="lban__InputContainer">
                <CustomButton
                  name="Apply"
                  onClick={submitHandler}
                  color="purple"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
};

export default Application;
