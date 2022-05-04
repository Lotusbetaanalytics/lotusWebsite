import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Navigation,
  Card,
  Carousel as Slider,
  Options,
  TitleLabel,
  TestimonialCard,
  Footer,
} from "../components";
import aboutImage from "../assets/group.png";
import {
  FaHandshake,
  FaRegPaperPlane,
  FaMobileAlt,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaUserAlt,
} from "react-icons/fa";
import Jump from "react-reveal/Jump";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const partnerResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container">
      <Head>
        <title>Lotus Beta Analytics | Home</title>
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
        <Slider slides={Options.slider} />
        {/* About Us */}
        <div className={styles.about}>
          <div className={styles.image}>
            <Image src={aboutImage} alt="About" />
          </div>
          <div className={styles.text}>
            <TitleLabel title="About Us" />
            <Zoom left>
              <h3>Lotus Beta Analytics</h3>
            </Zoom>
            <p>
              Lotus Beta Analytics (LBAN) is a company leading the revolutionary
              approach to Information Communication Technology (ICT) by
              redefining and reimagining a strategic approach to solutions and
              service delivery. We are focused on the provision of Information
              Technology Solutions and Services that are built on a world-class,
              secured, resilient infrastructure, and delivered according to
              global best practices in partnership with the world’s leading
              technology vendors.
            </p>
            <div className="btnContainer">
              <Link href="/about" passHref>
                <a className="btn whiteOutline">
                  <BsPlus /> Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* End Of About */}
        {/* Services */}
        <div className={styles.services}>
          <div className={styles.servicesHeader}>
            <Zoom left>
              <h1>Our Services</h1>
            </Zoom>
            <Jump>
              <p>
                For us at LBAN, services are all about partnering with you as
                strategic partners to ensure the best solution(s) that fits into
                your enterprise business strategy and effectively leverage new
                technologies......
              </p>
            </Jump>
          </div>
          <Tada>
            <div className={styles.servicesFlex}>
              <Card
                Icon={FaUserAlt}
                text="We are a professional IT consulting and services provider with over 10 years’ experience in the industry providing solutions to our various clients."
                title="Professional Services"
                url="/services/professional-services"
                className="i-bounceLeft"
              />
              <Card
                Icon={FaHandshake}
                text="With evolving customer expectations and emerging technologies, our business consulting services can help you adapt to today's market..."
                title="Business Consulting"
                url="/services/business-consulting"
                className="s-o-bounce"
              />
              <Card
                Icon={FaRegPaperPlane}
                text="At lotus Beta Analytics we believe that mobility is and should be at the core of businesses. That is why we offer a wide range of services and innovations that boost smooth operations organization round"
                title="Mobility Services"
                url="/services/mobility-services"
              />
              <Card
                Icon={FaMobileAlt}
                text="At Lotus beta Analytics, we leverage years of experience, expertise, technical prowess and know-how, intellectual property (IP), methods in application..."
                title="Application Development"
                url="/services/application-development"
              />
              <Card
                Icon={FaShieldAlt}
                text="With the growth of technology and technology being the driving force for businesses, it is of no doubt that technology unfolds opportunities upon..."
                title="IT Assurance"
                url="/services/IT-assurance"
              />
              <Card
                Icon={FaChalkboardTeacher}
                text="Lotus Beta Analytics capacity building and training services are designed to improve our customer’s whole organizational performance, experience..."
                title="Capacity Building/Training"
                url="/services/capacity-building-training"
              />
            </div>
          </Tada>
        </div>
        {/* End of Services */}
        {/* Testimonial */}
        <div className={styles.testimonial}>
          <TitleLabel title="Testimonial" />
          <h1>What our Customers are saying</h1>
          {/* <div className={styles.testimonialFlex}> */}
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass={styles.testimonialFlex}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass={styles.itemGap}
          >
            <TestimonialCard
              author="Adetola TAIWO- OGUNBODE"
              content="The Lotus Beta Analytics team is a dedicated team of professionals who know their technology and never shy away from their duty and commitment to their customers. 
              From the MD to all the staffs they worked with us on projects to meet some very difficult deadlines and provided us with very excellent support services even at very odd hours of the day. 
              They deliver brilliant boundless services and are always ready to listen to support our business needs."
              role="NISRAL Microfinance Bank, Head of Information technology"
            />
            <TestimonialCard
              author="Abiodun Ijaware"
              content="Our organization has enjoyed an excellent working relationship with Lotus Beta Analytics team for years now that I can safely say that they are our world class partners. 
              This team has continually provided us with excellent cost-effective support with willingness to always satisfy us with their quality delivery on project scope. 
              They possess a deep understanding of the Microsoft platform (and licensing) and always ready to help and share what they know with great customer service skills"
              role="Head, Information Technology, Development Bank of Nigeria"
            />
            <TestimonialCard
              author="Keneth Amadi"
              content="Our organization has enjoyed an excellent working relationship with Lotus Beta Analytics team for years now that I can safely say that they are our world class partners. 
              This team has continually provided us with excellent cost-effective support with willingness to always satisfy us with their quality delivery on project scope. 
              They possess a deep understanding of the Microsoft platform (and licensing) and always ready to help and share what they know with great customer service skills"
              role="IT Support Technical, AB Offshore marine service Limited"
            />
            <TestimonialCard
              author="Keneth Amadi"
              content="Our organization has enjoyed an excellent working relationship with Lotus Beta Analytics team for years now that I can safely say that they are our world class partners. 
              This team has continually provided us with excellent cost-effective support with willingness to always satisfy us with their quality delivery on project scope. 
              They possess a deep understanding of the Microsoft platform (and licensing) and always ready to help and share what they know with great customer service skills"
              role="IT Support Technical, AB Offshore marine service Limited"
            />
          </Carousel>
          {/* </div> */}
        </div>
        {/* End of Testimonial */}
        {/* Partners */}
        <div className={styles.partners}>
          <h1>Our Partners</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={partnerResponsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // customTransition="all 1"
            transitionDuration={500}
            containerClass={styles.testimonialFlex}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass={styles.itemGap}
          >
            {Options.partners.map((item, i) => (
              <div className={styles.partners} key={i}>
                <Image src={item.image} alt="Partners" />
              </div>
            ))}
          </Carousel>
        </div>
        {/* End of Partners */}
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
}
