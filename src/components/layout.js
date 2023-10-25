import React from 'react'
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/magnific-popup.css"
import "../style/aos.css"
import "../style/nice-select.css"
import "../style/style.css"
import "../style/style-dark.css"
import "../style/color.css"
import "../style/responsive.css"



import './global.css'
import Seo from './seo'
import Header from './header'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
        <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}

export default Template
