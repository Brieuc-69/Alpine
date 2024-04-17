import React from "react";
import '../../features/App.css';
import Logo from '../../Assets-TP-Alpine/images/sources-homepage/logo/logo-white.png';



function Header() {

  return (
     
    <div className="header-container">
   
        <img src={Logo} className="logo" alt="logo" />
    <ul className="ul-container">
      <li>HOME<br/><span className="En-color">HOME</span></li>
      <li>SERVICE<br/><span className="En-color">SERVICE</span></li>
      <li>MODELE<br/><span className="En-color">MODELE</span></li>
      <li>ABOUT US <br/><span className="En-color">ABOUT US</span></li>
      <li>CONTACT<br/><span className="En-color">CONTACT</span></li>
      <li>BOUTIQUE<br/><span className="En-color">BOUTIQUE.</span></li> 
      <li>RACING<br/><span  className="En-color">RACING</span></li>                    
    </ul>
  </div>
  
)}


export default Header;