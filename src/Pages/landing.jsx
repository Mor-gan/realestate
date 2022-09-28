import React from "react";
import { useState } from "react";
import "../Styles/landing.css";
import Afrilogo from "../Images/Afrilogo.png";
import Person from "../Images/Person.png";
import Group from "../Images/Group.png";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";
import youtube from "../Images/youtube.svg";
import facebooki from "../Images/facebooki.svg";
import Lemon from "../Images/Lemon.png";
import Vector from "../Images/Vector.png";
import landingCircle from "../Images/landingCircle.png";
import "../Styles/thankyou.css";
import Rectangle from "../Images/Rectangle.jpg";
import apple from "../Images/apple.jpg";
import google from "../Images/google.jpg";
import Vec from "../Images/Vec.png";
import quote from "../Images/quote.png";
import two from "../Images/two.png";
import "../Styles/thankyou.css";

const Landing = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password : ""
  });
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUserData(...userData));
  };

  return (
    <body>
      <div className="firstDiv">
        <div className="logoImage">
          <img src={Afrilogo} alt="" />
        </div>
        <div className="groupImage">
          <img src={Group} alt="" />
        </div>
      </div>
      <div className="secondDiv">
        <div className="imageDiv">
          <div className="circleImage">
            <img src={landingCircle} alt="" />
          </div>
          <div className="landingfirst">
            <p>Get your dream house,</p>
          </div>
          <div className="landingsecond">
            <p>Achieve best your goals with success and ease.</p>{" "}
          </div>
          <div className="personImage">
            <div className="personImagge">
              <img src={Person} alt="" />
            </div>
            <div className="lemonImage">
              <img src={Lemon} alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="formDiv">
          <form className="landingform" onSubmit={handleSubmit}>
            <p className="landingpara">
              Sign up to get started <br /> we assure you great achievement!
            </p>
            <input
              className="landingInput"
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
            <input
              className="landingInput"
              type="@email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
            <input
           type={passwordShown ? "text" : "password"}
              className="landingInput"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleChange}
              onClick={togglePassword}
              required
            />
        
            <button id="communitylink" className="landingIbutton" onclick={handleSubmit}
            >
              Sign Up
            </button>
            <p>Your information is safe with us.</p>
          </form>

          <div className="vectorImage">
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
      {/* second page moved to here */}
      <div className="firstContainer">
        <div className="mainContainer">
          <div className="thankFirst"></div>
          <div className="thankCircle">
            <img src={landingCircle} alt="" />
          </div>
          <div className="thankFirstHead">
            <h2>Thank You + Offer</h2>
          </div>
          <div className="thankFistDiv">
            <div className="thankContainer">
              <div className="thankFirstPara">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> quas vel sint commodi repudiandae consequuntur
                  voluptatum laborumnumquam.
                </p>
              </div>
              <div className="thankSecondPara">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> quas vel sint commodi repudiandae consequuntur
                  voluptatum laborumnumquam.
                </p>
              </div>
              <div className="thankSecondHead">
                <h4>
                  Why You’ll <span className="Emoji"> ♥️</span> realLandLord
                  too…
                </h4>
              </div>
              <div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>5000+Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>3000+Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className="thankThirdPara">
                  <div>
                    <img src={Rectangle} alt="" />
                  </div>
                  <div>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
                <div className="thankThirdHead">
                  <h5>
                    Simply download realLandLord on Play store or iOS Now!
                    Limited slots available.
                  </h5>
                </div>
              </div>
              <div className="thankImages">
                <div id="thankImagesGoogle">
                  <img src={google} width={150} height={60} alt="" />
                </div>
                <div className="thankImagesApple">
                  <img src={apple} width={150} height={40} alt="" />
                </div>
              </div>
              <a href="#" >
                <button id="communitylink" type="submit">JOIN OUR COMMUNITY</button>
              </a>
            </div>
            <div className="thankSecondDiv">
              <div className="thankSecondDivPerson">
                <img src={Person} alt="" />
              </div>
              <div className="thankSecondDivVec">
                <img src={Vec} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonialDiv">
          <div>
            <img src={quote} alt="" />
            <h1>
              <b>
                What People are Saying <br />
                About realLandLord?
              </b>
            </h1>
          </div>
          <div>
            {" "}
            <p>
              <b>Get inspired by these stories</b>
            </p>
          </div>
          <div className=" container-fluid">
            <div className="card">
              <div className="card-body">
                <img src={two} alt="" />{" "}
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <p className="card-text">Mr. John Doe</p>
                <p className="card-text">Pharmacist</p>
              </div>
            </div>
            <div className="card">
              <div class="border border-success">
                <img src={two} alt="" />{" "}
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis.{" "}
                </p>
                <p className="card-text">
                  <b>Johnny Parker </b>
                </p>
                <p className="card-text">Student </p>
              </div>
            </div>
            <div className="card">
              <div class="card-body">
                <img src={two} alt="" />{" "}
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi{" "}
                </p>
                <p className="card-text">Mrs John Doe </p>
                <p className="card-text">Nurse</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="firstFooter">
          <div className="landingfooter">
            <p>Copyright &copy; 2022.realLandLord. All rights reserved </p>
            <a href="https://porfolio-lemon.vercel.app/" >
              {" "}
              <p>Privacy policy</p>
            </a>
            <img src={Afrilogo} width={100} height={70} alt="" />
            <div className="footerimage">
              <a href="/" >
                {" "}
                <img src={instagram} alt="" />
              </a>
              <a href="/" >
                <img src={facebooki} alt="" />
              </a>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
              <a href="/" >
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
          <div className="footerFacebook">
            {" "}
            This site is not a part of the Facebook website or Facebook Inc.{" "}
            <br />
            Additionally, This site is NOT endorsed by Facebook in any way.
            <br />
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </div>
        </div>
      </footer>
    </body>
  );
};
export default Landing;
