import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
          As a Sales Specialist, I possess a diverse skill set tailored to drive revenue growth and exceed sales targets. With a proven track record of meeting sales target, and various sales techniques and strategies to achieve exceptional results. My ability to establish and maintain client relationships is a cornerstone of my success, by excellent communication and interpersonal skills. I excel in product knowledge, ensuring a comprehensive understanding of the offerings I represent, enabling me to articulate product features, benefits, and advantages convincingly to customers. 
          </p>

          <p>
          My strong negotiation skills, honed over years of experience, enable me to effectively close deals and secure favorable terms, while also adeptly handling objections and overcoming resistance. My proficiency in time management ensures that I can prioritize leads and opportunities, consistently meet deadlines, and manage a demanding sales schedule with efficiency and precision.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default Skills;
