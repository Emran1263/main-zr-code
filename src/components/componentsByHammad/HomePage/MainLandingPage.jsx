import React from "react";
export default function MainLandingPage() {
  return (
    <div className="width-100 p-r color_main_landing_page"
    style={{
      height: `${window.innerHeight}px`,
    }}
    >

      
      <div className="video_holder">
        <video  autoPlay muted loop className="main_video">
          <source src="/video/landingPage.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mainContainerHeadingPara">
        <h1 className="mainContainerHeadingParaH1">
        Empowering Health, <br className="dis_is_none" /> Innovating Lives
        </h1>
        <p className="mainContainerHeadingParaP1">Explore More</p>
      </div>
    </div>
  );
}
