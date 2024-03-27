import Image from "next/image";
import Banner from "./Components/Banner";
import Explore from "./Components/Explor";
import Live from "./Components/Live";
import GreatestOutdoors from "./Components/GreatestOutdoors";
import Header from "./Header/Header";
import Footer from "./Components/Footer";
import Head from "next/head";

export default function Home() {
  
  return (
    <main>
      <Header />
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoors
        img="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="The Greatest Outdoors"
        desc="Wishlists curated by Airbnb"
        linkText="Get Inspired"
      />
      <Footer />
    </main>
  );
}
