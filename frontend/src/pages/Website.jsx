import React from 'react'
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Hero2 from '../components/Hero2/Hero2';
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import InnovationComponent from '../components/Innovation/InnovationComponent';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Hero2/>

    </div>

  )
}

export default Website