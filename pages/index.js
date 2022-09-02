import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import {motion} from "framer-motion";
import Faq  from "../components/Faq";
import Contact from "./contact";

export default function Home({ services }) {
  return (
    <motion.div exit={{opacity:0}}>
      <Head>
        <title>DECODED || Landscaping Services</title>
        <meta
          name="description"
          content="Landscaping Services | Columbus, Ohio"
        />
      </Head>
      <Intro />
      <Mission />
      <Services services={services} />
      <Testimonials />
      <Faq />
      <Contact />
    </motion.div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
