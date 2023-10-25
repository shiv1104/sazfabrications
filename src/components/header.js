import React, { useState } from 'react';
import { Link } from "gatsby"
// import "../style/style.css"

import "../scripts/header-scripts.js";
import oda from "../images/logo-white.png"
import desk from "../images/desktop-menu-img.jpg"
import sun from "../images/sun.png"
import ThemeToggle from './ThemeToggle'; 


const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* <div className="preloader">
        <figure>
          <img src={oda} alt="Image" />
        </figure>
      </div> */}


      <header class="header-style-one" >
        <div className="container">
          <div className="row">
            <div className="desktop-nav" id="stickyHeader">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex-all justify-content-between">
                      <div className="header-logo">
                        <a href="/">
                          <figure>
                            <img src={oda} alt="logoo" className="w-100" />
                          </figure>
                        </a>
                      </div>
                      <div className="nav-bar">
                        <ul>
                        <li><a href="/">Home</a></li>                       
                <li><a href="/about_us/">About us</a></li>
                <li className="menu-item-has-children"><a href="/services/">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0)">Fabrication Works </a>
                      <ul className="sub-menu">
                        <li><a href="/services/fabrication/steel-fabrication">Steel fabrication</a></li>
                        <li><a href="/services/fabrication/aluminum-fabrication">Aluminum Fabrication</a></li>
                        <li><a href="/services/fabrication/s-s-fabrication">S.S fabrication</a></li>
                        <li><a href="/services/fabrication/structural-fabrication">Structural Fabrication</a></li>
                        <li><a href="/services/fabrication/gas-cutting">Gas Cutting</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Welding service </a>
                      <ul className="sub-menu">
                        <li><a href="/services/welding-services/arc-welding">Arc Welding</a></li>
                        <li><a href="/services/welding-services/mig-welding">MIG welding</a></li>
                        <li><a href="/services/welding-services/tig-welding">TIG welding</a></li>
                      </ul>
                    </li>
                    <li><a href="/services/metal-lathe-turning">Lathe Turning</a></li>
                    <li><a href="/services/metal-bending-and-rolling">Metal Bending & Rolling</a></li>
                    <li><a href="/services/cnc-laser-cutting-services">CNC Laser Cutting Services</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Furniture Manufacturing & Fabrication </a>
                      <ul className="sub-menu">
                        <li><a href="/services/furniture/metal-and-glass-furniture">Glass & Metal Furniture</a></li>
                        <li><a href="/services/furniture/metal-and-wooden-furniture">Wood & Metal Furniture</a></li>
                        <li><a href="/services/furniture/aluminum-and-steel-furniture">Aluminum & Steel Furniture</a></li>
                      </ul>
                    </li>
                    <li><a href="/services/exhibition-stands">Exhibition Stands (Manufacturing & Fabrication)</a></li>
                    <li><a href="/services/kitchen-equipments">Kitchen Equipment</a></li>
                  </ul>
                </li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact_us">Contact US</Link></li>
                        </ul>


                        <div className="extras">
                          {/* <ThemeToggle /> */}
                          <a href="javascript:void(0)" id="mobile-menu" className={`menu-start ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                            <svg id="ham-menu" viewBox="0 0 100 100"> <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /> <path className="line line2" d="M 20,50 H 80" /> <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /> </svg>
                          </a>

                          <a href="tel:+971544101606" className="theme-btn">+971544101606 
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62">
                                <defs>
                                  <clipPath id="saddasdasdasdasda">
                                    <rect width="40" height="62" />
                                  </clipPath>
                                </defs>
                                <g id="Mobisdfle" clip-path="url(#saddasdasdasdasda)">
                                  <path id="Path_125" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)" />
                                  <path id="Path_4342" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)" />
                                </g>
                              </svg>
                            </i>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div   id="mobile-nav" className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <div className="res-log">
                <a href="/">
                  <img src={oda} alt="Responsive Logo" />
                </a>
              </div>
              <ul>
                <li><a href="/">Home</a></li>                       
                <li><a href="/about_us/">About us</a></li>
                <li className="menu-item-has-children"><a href="/services/">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0)">Fabrication Works</a>
                      <ul className="sub-menu">
                        <li><a href="/services/fabrication/steel-fabrication">Steel fabrication</a></li>
                        <li><a href="/services/fabrication/aluminum-fabrication">Aluminum Fabrication</a></li>
                        <li><a href="/services/fabrication/s-s-fabrication">S.S fabrication</a></li>
                        <li><a href="/services/fabrication/structural-fabrication">Structural Fabrication</a></li>
                        <li><a href="/services/fabrication/gas-cutting">Gas Cutting</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Welding service </a>
                      <ul className="sub-menu">
                        <li><a href="/services/welding-services/arc-welding">Arc Welding</a></li>
                        <li><a href="/services/welding-services/mig-welding">MIG welding</a></li>
                        <li><a href="/services/welding-services/tig-welding">TIG welding</a></li>
                      </ul>
                    </li>
                    <li><a href="/services/metal-lathe-turning">Lathe Turning</a></li>
                    <li><a href="/services/metal-bending-and-rolling">Metal Bending & Rolling</a></li>
                    <li><a href="/services/cnc-laser-cutting-services">CNC Laser Cutting Services</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Furniture Manufacturing & Fabrication </a>
                      <ul className="sub-menu">
                        <li><a href="/services/furniture/metal-and-glass-furniture">Glass & Metal Furniture</a></li>
                        <li><a href="/services/furniture/metal-and-wooden-furniture">Wood & Metal Furniture</a></li>
                        <li><a href="/services/furniture/aluminum-and-steel-furniture">Aluminum & Steel Furniture</a></li>
                      </ul>
                    </li>
                    <li><a href="/services/exhibition-stands">Exhibition Stands (Manufacturing & Fabrication)</a></li>
                    <li><a href="/services/kitchen-equipments">Kitchen Equipment</a></li>
                  </ul>
                </li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact_us">Contact US</Link></li>
              </ul>
              <a href="#" id="res-cross" onClick={closeMobileMenu}></a>
            </div>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default Header