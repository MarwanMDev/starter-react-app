/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Marwan Mostafa
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/marwan">
          <FaFacebookF />
        </a>
        <a href="https://github.com/marwan">
          <FiInstagram />
        </a>
        <a href="https://github.com/marwan">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Marwan Mostafa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
