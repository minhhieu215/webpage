import { Link } from 'react-router-dom'
import { useEffect } from 'react';
var showed =false;
const Header = () => {
  const handleToggle=()=>{
    const navbar_responsive= document.querySelector(".navbar_responsive")
    if(showed==false){
        showed=true;
      navbar_responsive.classList.add("show")
    }else{
      showed=false;
      navbar_responsive.classList.remove("show")

    }
    console.log("Toogle")
  }
  return <div className="header dl_between_center">
           <Link to=""><img   onClick ={()=>{
    const navbar_responsive= document.querySelector(".navbar_responsive")
    showed=false;
             navbar_responsive.classList.remove("show")       
        }}src={require(".././images/logo.png")} alt="" /></Link>
      <div className="header_nav dl_center_center">
       <Link to="">
       <li className="active">Home</li>
       </Link>   
          <li>Features</li>
          <li>Details</li>
          <li>Pricing</li>
          <div className="drop">
          <li>Drop</li>
            <ul className="drop_nav">
                <li>Article Details</li>
                <li>Term Conditions</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
        <Link to="/login">
        <button className="header_btn login_btn">Log in</button>
        </Link>  

      </div>
  
            <img  onClick={handleToggle} className="menu_button"src={require(".././images/menuIcon-removebg-preview.png")} alt="" />
  <div className="navbar_responsive">
  <div className="header_nav dl_center_center">
       <Link to="">
       <li  onClick ={()=>{
    const navbar_responsive= document.querySelector(".navbar_responsive")
    showed=false;
             navbar_responsive.classList.remove("show")       
        }} className="active">Home</li>
       </Link>   
          <li>Features</li>
          <li>Details</li>
          <li>Pricing</li>
          <div className="drop">
          <li>Drop</li>
            <ul className="drop_nav">
                <li>Article Details</li>
                <li>Term Conditions</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
        <Link to="/login">
        <button onClick ={()=>{
    const navbar_responsive= document.querySelector(".navbar_responsive")
    showed=false;
             navbar_responsive.classList.remove("show")       
        }} className="header_btn login_btn">Log in</button>
        </Link>  

      </div>
  </div>
  </div>;
};

export default Header;
