import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import {AnimatePresence} from 'framer-motion';
import Faq  from "../components/Faq";
import Contact from "../components/ContactForm";

export default function Home({ services }) {
  return (
      <>
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
      </>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
