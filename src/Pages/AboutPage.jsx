import React from "react";
import "../Styles/AboutPage.css";
import AboutTopPage from "../components/componentsByHammad/About/AboutTopPage";
import WhoWeare from "../components/componentsByHammad/About/WhoWeare";
import HowWeStarted from "../components/componentsByHammad/About/HowWeStarted";
import OurPhilosophy from "../components/componentsByHammad/About/OurPhilosophy";

export default function AboutPage() {
  return (
    <div className="width-100">
      <AboutTopPage />
      <WhoWeare />
      <HowWeStarted />
      <OurPhilosophy />
    </div>
  );
}
