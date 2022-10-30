import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
// import HeaderImage from '../../assets/me-transparent-bg.png';
import './header.css';

const Header = () => {
  return (
    <header
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marwan Mostafa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          {/* <img src={HeaderImage} alt="me"></img> */}
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
