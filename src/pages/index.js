import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Lending/Header/Header";
import HomeLending from "@/Components/Lending/Home/HomeLending";
import TopHeader from "@/Components/Lending/TopHeader/TopHeader";
import Footer from "@/Components/Lending/Footer/Footer";
import Features from "@/Components/Lending/Features/Features";
import About from "@/Components/Lending/About/About";
import Kits from "@/Components/Lending/Kits/Kits";
import Sensors from "@/Components/Lending/Sensors/Sensors";
import Testimonials from "@/Components/Lending/Testimonials/Testimonials";
import Contact from "@/Components/Lending/Contact/Contact";
import CopyRight from "@/Components/Lending/CopyRight/CopyRight";

export default function Home() {
  return (
    <>
      <Head>
        <title>bhartiyarobotics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/only_logo_without_bg.ico" />
      </Head>
      <main>
        <TopHeader />
        <Header />
        <HomeLending />
        <Features />
        <About />
        <Kits />
        <Sensors />
        <Testimonials />
        <Contact />
        <Footer />
        <CopyRight />
      </main>
    </>
  );
}
