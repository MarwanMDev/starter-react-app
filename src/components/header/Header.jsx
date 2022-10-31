import { useEffect, useState } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
// import HeaderImage from '../../assets/me-transparent-bg.png';
import AnimatedLetters from '../shared/AnimatedLetters';
import './header.css';

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    'M',
    'a',
    'r',
    'w',
    'a',
    'n',
    ' ',
    'M',
    'o',
    's',
    't',
    'a',
    'f',
    'a',
  ];

  const greeting = ['H', 'e', 'l', 'l', 'o', ' ', 'I', `'`, 'a', 'm'];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={greeting}
            idx={9}
          />
        </h5>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={13}
          />
        </h1>
        <h5 className="text-light">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={11}
          />
        </h5>
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
