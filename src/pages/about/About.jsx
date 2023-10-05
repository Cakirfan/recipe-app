import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>Irfan Cakir </span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am Irfan Cakir</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, Python
          </h4>
          <h2>
            <a href="mailto:cakirfan.001@gmail.com">Send email</a> :
            cakirfan.001@gmail.com
          </h2>
          {/* whatsapp://tel:321 12345678 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
