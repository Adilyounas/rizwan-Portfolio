import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me </h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">hrgraphics47@gmail.com</span>
              <a
                href="mailto:hrgraphics47@gmail.com"
                className="contact__button"
              >
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+923039315764</span>
              <a
                href="https://wa.me/+923039315764"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
            <istyl class="fa-brands uil-linkedin-alt"></istyl>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Rizwan Saleem</span>
              <a
                href="https://www.linkedin.com/in/rizwan-saleem-06b16a286/"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
         
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default contact;
