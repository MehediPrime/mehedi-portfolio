import "./css/About.css";
import myFace from "../img/face.jpg";

export default function About({ colorBG, colorText, colorDynamic }) {
  const initStyle = {
    backgroundColor: colorBG,
    color: colorText,
    margin: "40px auto",
    paddingTop: "75px",
  };

  return (
    <div id="About" style={initStyle}>
      <h1 className="title" style={{ color: colorDynamic }}>
        About me
      </h1>
      <div className="aboutContainer">
        <div className="leftPart">
          <div className="leftPicture">
            <img src={myFace} alt="my face" width="250px" />
          </div>
        </div>
        <div className="rightPart">
          <h2>Hello!</h2>
          <p>
            I am Mehedi, a front-end web developer from Bangladesh. I have deep
            understanding of the technologies and the processes required for
            realising a successful web project from A to Z. I'm ready and eager
            to work to create something simple and unique.
          </p>
          <div className="aboutContact">
            <p>
              <strong>Full Name</strong>
              <br />S M Mehedi
            </p>
            <p>
              <strong>Email</strong>
              <br />
              s.mehedi2022@gmail.com
            </p>
            <p>
              <strong>Location</strong>
              <br />
              Dhaka, Bangladesh.
            </p>
            <p>
              <strong>Education</strong>
              <br />
              B.Sc in C.S.E.
            </p>
          </div>
          <div className="aboutButton">
            <a style={{ color: colorDynamic }} href="#Portfolio">
              My work!
            </a>
            <a
              className="resume"
              style={{ backgroundColor: colorDynamic, color: colorBG }}
              href="https://drive.google.com/file/d/1rq66V7Fs6gFX09_8iqe2H3RTk6VpEklu/view?usp=sharing"
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
