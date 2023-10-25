import React from 'react'
import pattren from "../images/pattren-3.png";

const Hero = ({ image, title, content }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${pattren})`,
  };
  return (
  <section class="banner-style-one">
    <div class="parallax" style={backgroundImageStyle}></div>
    <div class="container">
      <div class="row">
        <div class="banner-details">
          <h2>{title}</h2>
          {content && (
            <p>{content}</p>
           )}
        </div>
      </div>
    </div>
    <div class="breadcrums">
      <div class="container">
        <div class="row">
          <ul>
            <li>
              <a href="/">
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
              </a>
            </li>
            <li class="current">
              <p>{title}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
          }

export default Hero
