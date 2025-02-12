import Image from "next/image";
import Navbar from "../navbar";
import "./hero.css";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="heroSubWrapper">
        <Navbar />
        <div className="lowerSubHeroWrapper">
          <div className="leftContainer">
            <div className="innerLeftContainer">
              <div className="heroTitleWrapper">
                <h2 className="heroTxt">
                  <span className="hey">Hey,</span>{" "}
                  <span className="breakTxt">
                    <br />
                  </span>
                  <span className="name">I’m Sangita</span>
                </h2>
                <Image
                  src={`/images/check.svg`}
                  width={43}
                  height={43}
                  alt="verified icon"
                  className="checkMark hero"
                />
              </div>
              <p className="heroDesc">
                I’m a Corporate Trainer, Academician, and{" "}
                <span className="bolder">Founder of ProStrategic-H</span>, with
                18+ years of experience in leadership development, communication
                mastery, and transformational learning. I help professionals and
                organizations unlock their true potential.
              </p>
              <div className="heroCta">
                <p>Connect Now</p>
                <Image
                  src={`/images/cta-arrow.svg`}
                  width={32}
                  height={32}
                  alt="arrow icon"
                  className="ctaIcon"
                />
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <Image
              src={`/images/sangita.png`}
              width={520}
              height={560}
              alt="sangita icon"
              className="profileImg"
            />
          </div>
        </div>
        <div className="gridLines">
          <Image
            src={`/images/grid.png`}
            width={1000}
            height={630}
            alt="grid line"
            className="gridLine"
          />
        </div>
        <div className="extraGradientCirc"></div>
      </div>
    </div>
  );
};

export default Hero;
