import * as React from "react";
import { graphql, Link } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout';
import Hero from '../components/hero';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'


class Contact_Us extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        phone: '',
        company: '', // Optional field
        message: '',
      },
      errors: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const validationErrors = {};

    // Validate all required fields
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone is required';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }


    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit it here or perform any desired action
      // 
      try {
        const response = await fetch('https://formspree.io/f/xyyqblnb', { // Ensure the URL matches your PHP script's location
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Successful response
          console.log('Form data sent successfully');
          // You can handle the success response here
        } else {
          // Server returned an error
          console.error('Form data could not be sent');
          // You can handle the error response here
        }
      } catch (error) {
        console.error('An error occurred while sending form data:', error);
        // Handle any other errors here
      }
    } else {
      // Update the state with validation errors
      this.setState({ errors: validationErrors });
    }
  };

  render() {

    const { formData, errors } = this.state;
    const seoDetail = this.props.data.allContentfulSeo.edges;
    let seoTitle = 'Contact Us';
    let seoDesc = '';
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || 'Contact Us';;
      seoDesc = seoDetail[0].node.detail?.detail || '';
      keywords = seoDetail[0].node.keywords || '';;
    }


  return (
    <>
    <Seo
          title={seoTitle}
          description={seoDesc}
          keywords={keywords}
        />
      <Layout>
      <Hero
          image=''
          title='Contact Us'
          content='Our values and vaulted us to the top of our industry.'
        />
      {/* Contact Form 2 Start */}
      <section className="gap contact-form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="data">
                <h2>Ready to turn your metal fabrication dreams into reality? Let's get started! </h2>
                <p>
                Please fill out the contact form so we can put you in touch with the right person. 
                </p>
                <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={this.handleInputChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-6 mt-15">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={this.handleInputChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-md-6 mt-15">
            <input
              type="text"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              name="phone"
              placeholder="Contact No."
              value={formData.phone}
              onChange={this.handleInputChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="col-md-12 mt-15">
            <input
              type="text"
              className={`form-control ${errors.company ? 'is-invalid' : ''}`}
              name="company"
              placeholder="Company Name (optional)"
              value={formData.company}
              onChange={this.handleInputChange}
            />
            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
          </div>
          <div className="col-md-12 mt-15">
            <textarea
              placeholder="Question / Message?"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              name="message"
              value={formData.message}
              onChange={this.handleInputChange}
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
        </div>
        <button type="submit" className="theme-btn">
          Send Message <i><FontAwesomeIcon icon={faAnglesRight} /></i>
        </button>
      </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="info">
                <ul className="contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={79}
                      height={94}
                      viewBox="0 0 79 94"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="clip-location_Bd">
                          {" "}
                          <rect width={79} height={94} />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g
                        id="location_Bd"
                        data-name="location B"
                        clipPath="url(#clip-location_B)"
                      >
                        {" "}
                        <path
                          id="Path_1gfhjfjytkd"
                          data-name="Path 1"
                          d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                          transform="translate(-922.725 -482.15)"
                        />{" "}
                        <path
                          id="Path_24cr2r"
                          data-name="Path 2d"
                          d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                          transform="translate(25 26)"
                        />{" "}
                      </g>{" "}
                    </svg>
                    <div>
                      <h3>Address:</h3>
                      <p>P.O. Box : 115717, Dubai-UAE, Ras Al Khor Industrial Area 2, Warehouse No. 02</p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={40}
                      height={62}
                      viewBox="0 0 40 62"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="fsddffsdfsdfsdf">
                          {" "}
                          <rect width={40} height={62} />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)">
                        {" "}
                        <path
                          id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd"
                          data-name="Path 1"
                          d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                          transform="translate(1 1)"
                        />{" "}
                        <path
                          id="Padfth_2"
                          data-name="Path 2"
                          d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                          transform="translate(14 48)"
                        />{" "}
                      </g>
                    </svg>
                    <div>
                      <h3>Contact No:</h3>
                      <p>Mob: +971 54 101 606</p>
                      <p>Tel: +971 48 927 908</p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={102}
                      height={93}
                      viewBox="0 0 102 93"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <clipPath id="clip-Emaidl_Bhf">
                          {" "}
                          <rect width={102} height={93} />{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g
                        id="Emaidfgsdl_B"
                        data-name="Email B"
                        clipPath="url(#clip-Email_Bsdfhf)"
                      >
                        {" "}
                        <path
                          id="Pathsdf_1"
                          data-name="Path 1"
                          d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                          transform="translate(-918 -492)"
                        />{" "}
                        <path
                          id="Path_2dfsdsffgs"
                          data-name="Path 2"
                          d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                          transform="translate(-918 -492)"
                        />{" "}
                      </g>{" "}
                    </svg>
                    <div>
                      <h3>Email:</h3>
                      <p>info@sazfabrication.com</p>
                    </div>
                  </li>
                </ul>
                <ul class="social-link-new">
                    <li><a href="https://www.facebook.com/sazsteelfabrication/" target="_blank" rel="facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></li>
                    <li><a href="https://www.instagram.com/sazsteelfabrication/" target="_blank" rel="instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
                    <li><a href="https://www.linkedin.com/company/saz-steel-fabrication-llc/" target="_blank" rel="linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></li>
                    <li><a href="https://twitter.com/sazfabrication" target="_blank" rel="twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>
                    <li><a href="https://www.pinterest.com/sazsteelfabrication/" target="_blank" rel="pinterest"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg></a></li>
                    {/* <li><a href="#" rel="tiktok"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></a></li> */}
                    <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form 2 End */}
      {/* Contact Map Start */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221.561835433921!2d55.353040295145405!3d25.176874320505586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f665550ed8eb9%3A0xc1329059db67ab92!2sRas%20Al%20Khor%20Industrial%20Area%20-%20Ras%20Al%20Khor%20Industrial%20Area%202%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1696314633682!5m2!1sen!2sin"
          width={600}
          height={760}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* Contact Map End */}
     </Layout>
    </>

  )
}
}
export default Contact_Us

export const contectQuery = graphql`
  query contectQuery {
    allContentfulSeo(filter: {seoFor: {eq: "Contact"}}) {
      edges {
        node {
          id
          title
          seoFor
          keywords
          detail {
            detail
          }
        }
      }
    }
  }
`;