import React from "react";
import "./css/About.css";

export default function About({ colorBG, colorText, colorDynamic }) {
  const initStyle = {
    backgroundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };

  return (
    <div id="About" style={initStyle}>
      <p className="title" style={{ color: colorDynamic }}>
        About me
      </p>
      <div className="aboutContainer">
        <div className="leftPart">
          <div className="leftPicture"></div>
        </div>
        <div className="rightPart">
          <h1>Hello!</h1>
          <p>
            I am S M Mehedi, a front-end web developer from Bangladesh. I have
            deep understanding of the technologies and the processes required
            for realising a successful web project from A to Z. I'm ready and
            eager to work to create something simple and unique.
          </p>
          <div className="aboutContact">
            <p>
              <strong>Email:</strong> s.mehedi2022@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Dhaka, Bangladesh.
            </p>
            <p>
              <strong>Education:</strong> B.Sc in C.S.E.
            </p>
          </div>
          <div className="aboutButton">
            <a style={{ color: colorDynamic }} href="#Portfolio">
              My work!
            </a>
            <a
              className="resume"
              style={{ backgroundColor: colorDynamic, color: colorBG }}
              href="https://drive.google.com/file/d/11SMNpJsLL55zir3JrTR1YbPLG8kswka9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
