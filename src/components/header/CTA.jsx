import React from 'react';
import CV from '../../assets/Marwan Mostafa - Resume.pdf';

const CTA = () => {
  return (
    <div
      className="cta"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="2500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
