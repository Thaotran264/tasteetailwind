import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import MenuButton from "../components/MenuButton";
import Page from "../components/Page";
import BannerSlide from "../components/Slider/BannerSlide";
import BrandSlide from "../components/Slider/BrandSlide";
import SingleSlide from "../components/Slider/SingleSlide";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSlide />
      {/* <MultiSlide /> */}
      <SingleSlide />
      <BrandSlide />
      <Page />
      <MenuButton />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}