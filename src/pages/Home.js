import React, {Component} from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Description from "../components/Description";
import Community from "../components/Community";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Nav />
      <Header />
      <Mission />
      <Description />
      <Community />
      <Team />
      <Partners />
      <Prices />
      <Contact />
      <Footer />
    </div>
  )
}
