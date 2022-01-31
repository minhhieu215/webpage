import React,{useState, useEffect} from 'react';
import BlinkWord from './BlinkWord'
const Banner = () => {

  return <div className="banner dl_between_center">
      <div className="banner_detail">
      <h1>The #1 CRM app for <BlinkWord/> </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut vanic barem ultrices sollicitudin</p>
      <button>Sign up for free</button>
      </div>
        <div className="banner_img">
        <img src={require(".././images/banner.png")} alt="" />

        </div>
  </div>;
};

export default Banner;
