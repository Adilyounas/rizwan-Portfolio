import React from "react";

export const Social = () => {
  return (
    <div className="home__social">
      
      <a
        href="https://www.linkedin.com/in/rizwan-saleem-06b16a286/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.behance.net/rizwansaleem622"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
       <i class="fa-brands uil-behance"></i>
      </a>

      <a
        href="https://wa.me/+923039315764"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <i className="bx bxl-whatsapp contact__card-icon"></i>
      </a>

      <a
        href="mailto:hrgraphics47@gmail.com"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <i className="bx bx-mail-send contact__card-icon"></i>
      </a>
    </div>
  );
};
