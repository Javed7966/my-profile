/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faSalesforce,
} from "@fortawesome/free-brands-svg-icons";

import DJ from '../../assets/images/dj.png'
import DM from '../../assets/images/direct-marketing.png'
import SM from '../../assets/images/salesman.png'
import SM2 from '../../assets/images/salesman2.png'
import SM3 from '../../assets/images/salesman3.png'
import SM4 from '../../assets/images/salesman4.png'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faDollar, faIdCard, faMessage, faPerson, faPhone, faWallet } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
          Sales Executive with over 10 years of professional experience in outdoor Sales (Projects and Retail). Seeking a responsible, challenging and innovative position, wherein my skills can be fully utilized for organization growth while providing the opportunity for learning new things and career growth.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src={SM2} width={200} height={200} />

            </div>
            <div className="face2">
            <img src={SM3} width={200} height={200} />
            </div>
            <div className="face3">
            <img src={SM4} width={200} height={200} />
            </div>
            <div className="face4">
            <img src={SM} width={200} height={200} />
            </div>
            <div className="face5">
            <img src={DM} width={200} height={200} />
            </div>
            <div className="face6">
              <img src={DJ} width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
