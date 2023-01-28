import React from "react";
import "./css/Portfolio.css";
import { FcLink, FcNext } from "react-icons/fc";
import agency from "../img/agency.png";
import tools from "../img/tools.png";
import portfolio from "../img/portfolio.png";

export default function Portfolio({ colorBG, colorText, colorDynamic }) {
  const workList = [
    {
      image: portfolio,
      title: "Personal Portfolio",
      technologyUsed: "HTML, CSS, JavaScript, React",
      liveLink: "https://mehediprime.github.io/PortfolioMehedi",
      githubLink: "https://github.com/MehediPrime/PortfolioMehedi",
    },
    {
      image: tools,
      title: "Various Tools",
      technologyUsed: "HTML, CSS, JavaScript, React",
      liveLink: "https://mehediprime.github.io/my-tools/",
      githubLink: "https://github.com/MehediPrime/my-tools/",
    },
    {
      image: agency,
      title: "Agency Website",
      technologyUsed: "HTML, CSS, JavaScript, React",
      liveLink: "https://mehediprime.github.io/Agency-Website/",
      githubLink: "https://github.com/MehediPrime/Agency-Website",
    },
  ];

  const initStyle = {
    backgroundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };
  const buttonStyle = {
    border: `1px solid ${colorText}`,
    color: colorText,
  };

  return (
    <div id="Portfolio" style={initStyle}>
      <p className="title" style={{ color: colorDynamic }}>
        Portfolio
      </p>
      <h1>Selected Works</h1>
      <div className="workCards">
        {workList.map((value, index) => {
          return (
            <div className="workCard" key={index}>
              <img src={value.image} alt="WebImage" />
              <h3>{value.title}</h3>
              <p>{value.technologyUsed}</p>
              <div className="workButton">
                <a
                  href={value.liveLink}
                  target="_blank"
                  style={buttonStyle}
                  rel="noreferrer"
                >
                  <span className="workButtonIcon">
                    <FcLink />
                  </span>
                  Preview
                </a>
                <a
                  href={value.githubLink}
                  target="_blank"
                  style={buttonStyle}
                  rel="noreferrer"
                >
                  <span className="workButtonIcon">
                    <FcNext />
                  </span>
                  Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
