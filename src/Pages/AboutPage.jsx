import React, { useEffect } from "react";
import "../Styles/AboutPage.css";
import AboutTopPage from "../components/componentsByHammad/About/AboutTopPage";
import WhoWeare from "../components/componentsByHammad/About/WhoWeare";
import HowWeStarted from "../components/componentsByHammad/About/HowWeStarted";
import OurPhilosophy from "../components/componentsByHammad/About/OurPhilosophy";

export default function AboutPage() {
  useEffect(()=>{
    document.title= "About Us | ZR Surgicals"
  },[])
  return (
    <div className="width-100" style={{marginTop:"4em"}}>
      <AboutTopPage />
      <WhoWeare />
      <HowWeStarted />
      <OurPhilosophy />
    </div>
  );
}
