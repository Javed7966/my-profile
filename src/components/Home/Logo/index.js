/* eslint-disable no-unused-vars */
import { useRef } from "react";
import LogoS from "../../../assets/images/logo-z.jpg";
import "./index.scss";
import DisplayLottie from "../DisplayLottie";
import Coding from "../lottie/coding.json";

const Logo = () => {
  const bgRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <DisplayLottie animationData={Coding} />
    </div>
  );
};

export default Logo;
